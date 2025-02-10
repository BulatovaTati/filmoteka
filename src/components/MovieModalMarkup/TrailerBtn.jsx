import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { FaYoutube } from 'react-icons/fa';

import { selectIsLoading, selectTrailerKey } from '../../redux/movies/selectors';
import { fetchMovieVideoById } from '../../redux/movies/operations';

import styles from '../MoviesList/MovieItem/BtnList.module.css';
import s from './MovieModalMarkup.module.css';
import { clearTrailerKey } from '../../redux/movies/slice';

const TrailerBtn = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector(selectTrailerKey);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!movieId || !trailerKey) return;
  }, [movieId, trailerKey]);

  const openTrailerModal = key => {
    if (!key) return alert('No trailer available.');
    const trailer = basicLightbox.create(
      `
      <iframe width="640" height="360" 
      src="https://www.youtube.com/embed/${key}" 
      frameborder="0" allowfullscreen class="trailer_video"></iframe>
    `,
      {
        onClose: () => {
          dispatch(clearTrailerKey());
        },
      }
    );

    trailer.show();
  };
  const handleClick = () => {
    if (!trailerKey) {
      dispatch(fetchMovieVideoById(movieId));
      return;
    }
    openTrailerModal(trailerKey);
  };

  return (
    <button
      type="button"
      className={`${styles.button_modal_btn} ${s.button__trailer}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      <FaYoutube className={s.modal_movie__svg_ytb} />
      Trailer
    </button>
  );
};

export default TrailerBtn;
