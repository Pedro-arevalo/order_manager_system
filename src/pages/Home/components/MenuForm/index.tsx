import { useContext } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { MenuContext } from '../../../../contexts/menuContext'

import { Trash, Plus, X } from 'phosphor-react'

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
        {fields.length ? (
          <div className="options_logged">
            {fields.map((field, index) => (
              <section key={field.id}>
                <button
                  className="delete_option"
                  type="button"
                  onClick={() => {
                    remove(index)
                  }}
                >
                  <Trash size={24} />
                </button>
                <input type="text" {...register(`menuOptions.${index}.name`)} />
              </section>
            ))}
            <div className="button_group">
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
              {!isMenuEmpty && (
                <button
                  className="dismiss_menu"
                  onClick={() => {
                    closeModal()
                    setMenuOptions([])
                  }}
                  type="button"
                >
                  <X size={24} />
                  Desfazer cardápio
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="no_options_logged">
            <p>Nenhuma opção de cardápio especificada</p>
            <div>
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
                Adicionar opção
              </button>
              <button className="submit_without_options" type="submit">
                <X size={24} />
                Desfazer cardápio
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="form_footer">
        <button className="cancel" type="button" onClick={() => closeModal()}>
          Voltar
        </button>
        {fields.length !== 0 && (
          <button className="save" type="submit">
            Salvar
          </button>
        )}
      </div>
    </Form>
  )
}
