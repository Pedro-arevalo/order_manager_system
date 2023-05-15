// context
import { useContext } from 'react'
import { FieldsContext } from '../MenuForm'

// icons
import { Plus, X } from 'phosphor-react'

import { FormButton } from './styles'

export function NoFieldsFormLayout() {
  const {
    fields,
    addNewField,
    removeField,
    generateUniqueId,
    isAddingInputsAllowed,
  } = useContext(FieldsContext)

  return (
    <div className="no_options_logged">
      <p>Nenhuma opção de cardápio especificada</p>
      <div>
        <FormButton
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
          Adicionar opção
        </FormButton>
        <FormButton className="submit_without_options" type="submit">
          <X size={24} />
          Desfazer cardápio
        </FormButton>
      </div>
    </div>
  )
}
