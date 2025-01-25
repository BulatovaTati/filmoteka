import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGenres } from '../../../redux/movies/selectors';
import MoviePoster from './MoviePoster';
import MovieCardInfo from './MovieCardInfo';
import MovieOverview from './MovieOverview';
import RegistrationModal from '../../Modals/RegistrationModal';
import s from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  const {
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
  };

  return (
    <li className={`${s.card__item} ${isFlipped ? s.isflipped : ''}`} onClick={handleCardFlip}>
      <div className={s.card__item_front}>
        <MoviePoster poster_path={poster_path} title={title} />
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
      {isModalOpen && <RegistrationModal isOpen={isModalOpen} onClose={onClose} />}
    </li>
  );
};

export default MovieItem;
