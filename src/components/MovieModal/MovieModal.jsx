import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaYoutube } from 'react-icons/fa';

import { fetchMovieById } from '../../redux/movies/operations';
import MoviePoster from '../MoviesList/MovieItem/MoviePoster';
import { selectGenres, selectMovie } from '../../redux/movies/selectors';
import BtnList from '../MoviesList/MovieItem/BtnList';
import s from './MovieModal.module.css';
import styles from '../MoviesList/MovieItem/BtnList.module.css';

const MovieModal = ({ id }) => {
  const dispatch = useDispatch();
  const {
    poster_path,
    title,
    genre_ids,
    popularity,
    vote_count,
    vote_average,
    original_title,
    overview,
    production_companies,
  } = useSelector(selectMovie);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  const genres = useSelector(selectGenres);

  // const genreNames = genre_ids.map(id => {
  //   const genre = genres.find(g => g.id === id);
  //   return genre ? genre.name : 'Unknown';
  // });

  // const logo = production_companies.map(log => {
  //   if (log.logo_path === null) {
  //     return `https://via.placeholder.com/200x100`;
  //   } else {
  //     return `https://image.tmdb.org/t/p/w200/${log.logo_path}`;
  //   }
  // });

  return (
    <>
      <div className={s.modal_movie__thumb}>
        <MoviePoster poster_path={poster_path} title={title} />
      </div>
      <div className={s.modal_movie__info_container}>
        <h2 className={s.modal_movie__title}>{title}</h2>
        <table className={s.modal_movie__table}>
          <tbody className={s.modal_movie__cell}>
            <tr>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                Vote / Votes
              </td>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                <span className={`${s.modal_movie__span} ${s.modal_movie__span_vote}`}>
                  {vote_average}
                </span>
                /
                <span className={`${s.modal_movie__span} ${s.modal_movie__span_votes}`}>
                  {vote_count}
                </span>
              </td>
            </tr>
            <tr>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                Popularity
              </td>
              <td className="modal_movie__cell">{popularity}</td>
            </tr>
            <tr>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                Original Title
              </td>
              <td className="modal_movie__cell">{original_title}</td>
            </tr>
            <tr>
              <td
                className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text} ${s.modal_movie__cell_last_row}`}
              >
                Genre
              </td>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_last_row}`}>
                {/* {genreNames.length > 0
                  ? genreNames.splice(0, 2).concat('Others').join(', ')
                  : 'no genres'} */}
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className={`${styles.button_modal_btn} ${s.button__trailer}`}>
          <FaYoutube className={s.modal_movie__svg_ytb} />
          trailer
        </button>
        <h3 className={s.modal_movie__subtitle}>About</h3>
        <p className={s.modal_movie__text}>{overview}</p>
        <BtnList />
        {/* <img className="modal_movie--logo" src={logo[0]} alt="No production informations" /> */}
      </div>
    </>
  );
};

export default MovieModal;
