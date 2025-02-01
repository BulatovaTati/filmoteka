import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { MdCancel } from 'react-icons/md';

import MovieModal from '../MovieModal/MovieModal';

import { fetchMovieById } from '../../redux/movies/operations';
import { selectMovie } from '../../redux/movies/selectors';

import s from './RegistrationModal.module.css';
import styles from './ModalMovie.module.css';

Modal.setAppElement('#root');

const ModalMovie = ({ isOpen, onClose, id }) => {
  const movie = useSelector(selectMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

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
      <MovieModal movie={movie} />
    </Modal>
  );
};

export default ModalMovie;
