import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MoviePoster from './MoviePoster';
import MovieCardInfo from './MovieCardInfo';
import MovieOverview from './MovieOverview';
import ModalMovie from '../../Modals/ModalMovie';

import { selectGenres } from '../../../redux/movies/selectors';
import { clearSelectedMovie } from '../../../redux/movies/slice';

import s from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  const {
    id,
    poster_path,
    title,
    genre_ids,
    release_date,
    first_air_date,
    vote_average,
    name,
    overview,
  } = movie;

  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  const genreNames = genre_ids.map(id => {
    const genre = genres.find(g => g.id === id);
    return genre ? genre.name : 'Unknown';
  });

  const handleCardFlip = () => {
    if (!isModalOpen) {
      setIsFlipped(prev => !prev);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const onClose = () => {
    setIsModalOpen(false);
    setIsFlipped(false);
    dispatch(clearSelectedMovie());
  };

  return (
    <li className={`${s.card__item} ${isFlipped ? s.isflipped : ''}`} onClick={handleCardFlip}>
      <div className={s.card__item_front}>
        <div className={s.card__img_container}>
          <MoviePoster poster_path={poster_path} title={title} />
        </div>
        <MovieCardInfo
          genreNames={genreNames}
          name={name}
          title={title}
          vote_average={vote_average}
          release_date={release_date}
          first_air_date={first_air_date}
          openModal={openModal}
        />
      </div>
      <div className={s.card__item_back}>
        <MovieOverview overview={overview} />
      </div>
      {isModalOpen && <ModalMovie id={id} isOpen={isModalOpen} onClose={onClose} />}
    </li>
  );
};

export default MovieItem;
