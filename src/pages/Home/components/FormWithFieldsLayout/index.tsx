// context
import { useContext } from 'react'
import { FieldsContext } from '../MenuForm'
import { Plus, Trash, X } from 'phosphor-react'
import { AnotherFormButton } from './styles'

export function FormWithFieldsLayout() {
  const {
    fields,
    addNewField,
    removeField,
    generateUniqueId,
    isMenuEmpty,
    isAddingInputsAllowed,
    register,
    setMenuOptions,
    closeModal,
  } = useContext(FieldsContext)
  return (
    <div className="options_logged">
      {fields.map((field, index) => (
        <section key={field.id}>
          <AnotherFormButton
            className="delete_option"
            type="button"
            onClick={() => {
              removeField(index)
            }}
          >
            <Trash size={24} />
          </AnotherFormButton>
          <input type="text" {...register(`menuOptions.${index}.name`)} />
        </section>
      ))}
      <div className="button_group">
        <AnotherFormButton
          className="add_option"
          type="button"
          disabled={isAddingInputsAllowed}
          onClick={() => {
            addNewField({
              id: generateUniqueId(),
              name: '',
            })
          }}
        >
          <Plus size={24} />
          Adicionar
        </AnotherFormButton>
        {!isMenuEmpty && (
          <AnotherFormButton
            className="dismiss_menu"
            onClick={() => {
              closeModal()
              setMenuOptions([])
            }}
            type="button"
          >
            <X size={24} />
            Desfazer cardápio
          </AnotherFormButton>
        )}
      </div>
    </div>
  )
}

{
  /* <div className="options_logged">
              {fields.map((field, index) => (
                <section key={field.id}>
                  <MyFormButton
                    className="delete_option"
                    type="button"
                    onClick={() => {
                      remove(index)
                    }}
                  >
                    <Trash size={24} />
                  </MyFormButton>
                  <input
                    type="text"
                    {...register(`menuOptions.${index}.name`)}
                  />
                </section>
              ))}
              <div className="button_group">
                <MyFormButton
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
                </MyFormButton>
                {!isMenuEmpty && (
                  <MyFormButton
                    className="dismiss_menu"
                    onClick={() => {
                      closeModal()
                      setMenuOptions([])
                    }}
                    type="button"
                  >
                    <X size={24} />
                    Desfazer cardápio
                  </MyFormButton>
                )}
              </div>
            </div>  */
}
