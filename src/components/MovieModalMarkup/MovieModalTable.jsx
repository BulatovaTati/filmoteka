import s from './MovieModalMarkup.module.css';

const MovieModalTable = ({ genres, popularity, vote_count, vote_average, original_title }) => {
  const genreNames = genres.map(genre => genre.name || 'Unknown');

  const formatGenres = genreNames => {
    if (genreNames.length === 1) return genreNames[0];
    if (genreNames.length > 3) return [...genreNames.slice(0, 3), 'Others'].join(', ');
    return genreNames.join(', ');
  };

  return (
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
          <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>Popularity</td>
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
            {genreNames.length > 0 ? formatGenres(genreNames) : 'No genres'}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MovieModalTable;
