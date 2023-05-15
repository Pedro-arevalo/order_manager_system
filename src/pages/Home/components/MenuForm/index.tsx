// context
import { useContext, createContext } from 'react'
import { MenuContext } from '../../../../contexts/menuContext'

// react hook form
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
  useFieldArray,
  useForm,
} from 'react-hook-form'

// icons
import { Trash, Plus, X } from 'phosphor-react'

// styles
import { Form, MyFormButton } from './styles'
import { NoFieldsFormLayout } from '../NoFieldsFormLayout'
import { FormWithFieldsLayout } from '../FormWithFieldsLayout'

interface MenuOption {
  id: string
  name: string
}

type MenuForm = {
  menuOptions: MenuOption[]
}

interface MenuFormProps {
  isMenuEmpty: boolean
  closeModal: () => void
}

interface FieldsContextData {
  fields: FieldArrayWithId<MenuForm, 'menuOptions', 'id'>[]
  isAddingInputsAllowed: boolean
  isMenuEmpty: boolean
  addNewField: (field: MenuOption) => void
  removeField: (fieldIndex: number) => void
  generateUniqueId: () => string
  register: UseFormRegister<MenuForm>
  setMenuOptions: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >
  closeModal: () => void
}

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

// context
export const FieldsContext = createContext({} as FieldsContextData)

export function MenuForm({ isMenuEmpty, closeModal }: MenuFormProps) {
  const { menuOptions, setMenuOptions } = useContext(MenuContext)
  const { register, handleSubmit, watch, control } = useForm<MenuForm>({
    defaultValues: {
      menuOptions: isMenuEmpty
        ? [
            {
              id: generateUniqueId(),
              name: '',
            },
          ]
        : menuOptions,
    },
  })
  const { fields, append, remove } = useFieldArray({
    name: 'menuOptions',
    control,
  })

  function onSubmit(data: MenuForm) {
    setMenuOptions(data.menuOptions)
    closeModal()
  }

  function addNewField(field: MenuOption) {
    append(field)
  }

  function removeField(fieldIndex: number) {
    remove(fieldIndex)
  }

  function getAddingInputsValidation() {
    const inputsValue = watch('menuOptions')
    const emptyInputs = inputsValue.filter((input) => input.name === '')
    return emptyInputs.length !== 0
  }

  const isAddingInputsAllowed = getAddingInputsValidation()

  // context
  const fieldsProvider = {
    fields,
    isMenuEmpty,
    isAddingInputsAllowed,
    register,
    setMenuOptions,
    addNewField,
    removeField,
    generateUniqueId,
    closeModal,
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form_header">
        <h1>{isMenuEmpty ? 'Cadastrar novo cardápio' : 'Editar cardápio'}</h1>
      </div>

      <div className="form_content">
        <FieldsContext.Provider value={fieldsProvider}>
          {fields.length ? <FormWithFieldsLayout /> : <NoFieldsFormLayout />}
        </FieldsContext.Provider>
      </div>

      <div className="form_footer">
        <MyFormButton
          className="cancel"
          type="button"
          onClick={() => closeModal()}
        >
          Voltar
        </MyFormButton>
        {fields.length !== 0 && (
          <MyFormButton className="save" type="submit">
            Salvar
          </MyFormButton>
        )}
      </div>
    </Form>
  )
}
