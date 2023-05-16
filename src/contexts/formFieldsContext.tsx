import { createContext, useContext, ReactNode } from 'react'
import { MenuContext } from './menuContext'
import {
  FieldArrayWithId,
  UseFormHandleSubmit,
  UseFormRegister,
  useFieldArray,
  useForm,
} from 'react-hook-form'

interface MenuOption {
  id: string
  name: string
}

type MenuForm = {
  menuOptions: MenuOption[]
}
interface FormFieldsContextData {
  fields: FieldArrayWithId<MenuForm, 'menuOptions', 'id'>[]
  isAddingInputsAllowed: boolean
  isMenuEmpty: boolean
  addNewField: (field: MenuOption) => void
  removeField: (fieldIndex: number) => void
  generateUniqueId: () => string
  register: UseFormRegister<MenuForm>
  handleSubmit: UseFormHandleSubmit<MenuForm>
  setMenuOptions: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }[]>
  >
  // closeModal: () => void
}

interface FormFieldsContextProviderProps {
  children: ReactNode
}

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

// context
export const FormFieldsContext = createContext({} as FormFieldsContextData)

export function FormFieldsContextProvider({
  children,
}: FormFieldsContextProviderProps) {
  const { menuOptions, setMenuOptions } = useContext(MenuContext)
  const isMenuEmpty = !menuOptions.length
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
    handleSubmit,
    setMenuOptions,
    addNewField,
    removeField,
    generateUniqueId,
  }
  return (
    <FormFieldsContext.Provider value={fieldsProvider}>
      {children}
    </FormFieldsContext.Provider>
  )
}
