import { useContext } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { MenuContext } from '../../../../contexts/menuContext'

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
    <form onSubmit={handleSubmit(updateMenuContext)}>
      {isMenuEmpty ? (
        <h1>Cadastrar novo cardápio</h1>
      ) : (
        <h1>Editar cardápio</h1>
      )}
      {fields.map((field, index) => (
        <section key={field.id}>
          <input type="text" {...register(`menuOptions.${index}.name`)} />
          {index !== 0 && (
            <button
              type="button"
              onClick={() => {
                remove(index)
              }}
            >
              Deletar opção
            </button>
          )}
        </section>
      ))}

      <button
        type="button"
        disabled={isAddingInputsAllowed}
        onClick={() => {
          append({
            id: generateUniqueId(),
            name: '',
          })
        }}
      >
        Adicionar opção
      </button>
      <button type="submit">Salvar</button>
    </form>
  )
}
