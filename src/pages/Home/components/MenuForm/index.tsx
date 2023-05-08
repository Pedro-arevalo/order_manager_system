import { useContext } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { MenuContext } from '../../../../contexts/menuContext'

import { Trash, Plus } from 'phosphor-react'

import { Form } from './styles'

type MenuForm = {
  menuOptions: {
    id: string
    name: string
  }[]
}

interface MenuFormProps {
  isMenuEmpty: boolean
  closeModal: () => void
}

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

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

  function updateMenuContext(data: MenuForm) {
    setMenuOptions(data.menuOptions)
    closeModal()
  }

  const inputsValue = watch('menuOptions')

  const emptyInputs = inputsValue.filter((input) => {
    if (input.name === '') {
      return true
    } else {
      return false
    }
  })

  const isAddingInputsAllowed = emptyInputs.length !== 0

  return (
    <Form onSubmit={handleSubmit(updateMenuContext)}>
      <div className="form_header">
        <h1>{isMenuEmpty ? 'Cadastrar novo cardápio' : 'Editar cardápio'}</h1>
      </div>
      <div className="form_content">
        {fields.map((field, index) => (
          <section key={field.id}>
            <input type="text" {...register(`menuOptions.${index}.name`)} />
            {index !== 0 && (
              <button
                className="delete_option"
                type="button"
                onClick={() => {
                  remove(index)
                }}
              >
                <Trash size={24} />
              </button>
            )}
          </section>
        ))}
        <button
          className="add_option"
          type="button"
          disabled={isAddingInputsAllowed}
          onClick={() => {
            append({
              id: generateUniqueId(),
              name: '',
            })
          }}
        >
          <Plus size={24} />
          Adicionar
        </button>
      </div>
      <div className="form_footer">
        <button type="submit">Salvar</button>
      </div>
    </Form>
  )
}
