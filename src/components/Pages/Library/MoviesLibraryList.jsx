import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedMovie } from '../../../redux/movies/slice.js';
import ModalMovie from '../../Modals/ModalMovie';
import s from './MoviesLibraryList.module.css';

const MoviesLibraryList = ({ queueMovies }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(null);

  const openModal = id => {
    setCurrentMovieId(id);
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
    dispatch(clearSelectedMovie());
  };

  return (
    <>
      <ul className={s.movies_list}>
        {queueMovies?.map(movie => (
          <li key={movie.id} className={s.movies_item}>
            <img
              className={s.movies_image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              onClick={() => openModal(movie.id)}
            />
            <h3 className={s.movies_title}>{movie.title}</h3>
          </li>
        ))}
      </ul>
      {isModalOpen && currentMovieId && (
        <ModalMovie id={currentMovieId} isOpen={isModalOpen} onClose={onClose} />
      )}
    </>
  );
};

export default MoviesLibraryList;
