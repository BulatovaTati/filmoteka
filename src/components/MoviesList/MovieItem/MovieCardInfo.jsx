import { useEffect, useState } from 'react';
import s from './MovieItem.module.css';
import { getGenres } from '../../../service/fetchApi';
import { getReleaseYear } from './helpers';

const MovieCardInfo = ({ title, name, genre_ids, release_date, first_air_date, vote_average }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (genre_ids.length === 0) return;

    const fetchGenres = async () => {
      try {
        const genres = await getGenres();
        const genreNames = genre_ids.map(id => {
          const genre = genres.find(g => g.id === id);
          return genre ? genre.name : 'Unknown';
        });

        setGenres(genreNames);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, [genre_ids]);

  const year = getReleaseYear(release_date, first_air_date);

  return (
    <div className={s.card__info}>
      <h2 className={s.card__title}>{title ? title : name}</h2>
      <div className={s.card__decr}>
        <p className={s.card__genre}>
          {genres.length > 0 ? genres.join(', ') : 'No genres available'}
        </p>
        <p className={s.card__year}>{year}</p>
        <p className={s.card__rating}>{vote_average ? vote_average.toFixed(1) : 'No rating'}</p>
      </div>
    </div>
  );
};

export default MovieCardInfo;
