// context
import { useContext } from 'react'
import { MenuContext } from '../../../../contexts/menuContext'
import { FormFieldsContext } from '../../../../contexts/formFieldsContext'

// components
import { NoFieldsFormLayout } from '../NoFieldsFormLayout'
import { FormWithFieldsLayout } from '../FormWithFieldsLayout'

// styles
import { Form, MyFormButton } from './styles'

interface MenuOption {
  id: string
  name: string
}

type MenuForm = {
  menuOptions: MenuOption[]
}

interface MenuFormProps {
  closeModal: () => void
}

export function MenuForm({ closeModal }: MenuFormProps) {
  const { menuOptions, setMenuOptions } = useContext(MenuContext)
  const { fields, handleSubmit, isMenuEmpty } = useContext(FormFieldsContext)

  function onSubmit(data: MenuForm) {
    setMenuOptions(data.menuOptions)
    closeModal()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form_header">
        <h1>{isMenuEmpty ? 'Cadastrar novo cardápio' : 'Editar cardápio'}</h1>
      </div>

      <div className="form_content">
        {fields.length ? <FormWithFieldsLayout /> : <NoFieldsFormLayout />}
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
