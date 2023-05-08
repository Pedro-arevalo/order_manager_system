import Modal from 'react-modal'

import { ModalContent } from './styles'
import { MenuForm } from '../MenuForm'

interface ModalToSetMenuProps {
  modalIsOpen: boolean
  isMenuEmpty: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

Modal.setAppElement('#root')

export function ModalToSetMenu({
  modalIsOpen,
  isMenuEmpty,
  setModalIsOpen,
}: ModalToSetMenuProps) {
  function delegateModalClosing() {
    setModalIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Defina as opções do cardápio"
      closeTimeoutMS={200}
      style={{
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, .5)',
        },
        content: {
          width: '30%',
          minWidth: '300px',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '0',
        },
      }}
    >
      <MenuForm isMenuEmpty={isMenuEmpty} closeModal={delegateModalClosing} />
    </Modal>
  )
}
