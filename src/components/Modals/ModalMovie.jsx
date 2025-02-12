import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { MdCancel } from 'react-icons/md';

import MovieModalMarkup from '../MovieModalMarkup/MovieModalMarkup';
import Loader from '../Loader/Loader';

import { fetchMovieById } from '../../redux/movies/operations';
import { selectIsLoading, selectMovie } from '../../redux/movies/selectors';

import s from './ModalMovie.module.css';

Modal.setAppElement('#root');

const ModalMovie = ({ isOpen, onClose, id }) => {
  const selectedMovie = useSelector(selectMovie);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && selectedMovie?.id !== id) {
      dispatch(fetchMovieById(id));
    }
  }, [dispatch, id, selectedMovie]);

  const backdropImage = selectedMovie.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`
    : 'rgba(0, 0, 0, 0.8)';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      aria-modal="true"
      className={s.modal_movie}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: { '--backdrop-image': backdropImage },
      }}
    >
      <button onClick={onClose} className={s.cancelBtn}>
        <MdCancel />
      </button>
      {isLoading ? <Loader /> : <MovieModalMarkup movie={selectedMovie} />}
    </Modal>
  );
};

export default ModalMovie;
