import Modal from 'react-modal';
import RegistrationForm from '../Auth/RegistrationForm/RegistrationForm';
import s from './RegistrationModal.module.css';

Modal.setAppElement('#root');

const RegistrationModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      aria-modal="true"
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <button onClick={onClose} className={s.cancelBtn}>
        Cancel
      </button>
      <RegistrationForm />
    </Modal>
  );
};

export default RegistrationModal;
