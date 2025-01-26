import Modal from 'react-modal';
import { MdCancel } from 'react-icons/md';
import s from './RegistrationModal.module.css';
import styles from './ModalMovie.module.css';

import MovieModal from '../MovieModal/MovieModal';

Modal.setAppElement('#root');

const ModalMovie = ({ isOpen, onClose, id }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      aria-modal="true"
      className={styles.modal_movie}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <button onClick={onClose} className={s.cancelBtn}>
        <MdCancel />
      </button>
      <MovieModal id={id} />
    </Modal>
  );
};

export default ModalMovie;
