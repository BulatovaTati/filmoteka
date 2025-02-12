import { useDispatch, useSelector } from 'react-redux';
import {
  addToQueue,
  addToWatched,
  removeFromQueue,
  removeFromWatched,
} from '../../../redux/movies/slice';
import { selectInQueue, selectInWatched } from '../../../redux/movies/selectors';

import s from './BtnList.module.css';

const BtnList = ({ movie }) => {
  const dispatch = useDispatch();
  const inWatched = useSelector(selectInWatched);
  const inQueue = useSelector(selectInQueue);

  const isWatched = inWatched.some(item => item.id === movie?.id);
  const isQueued = inQueue.some(item => item.id === movie?.id);

  const handleWatchedClick = e => {
    e.stopPropagation();

    dispatch(isWatched ? removeFromWatched(movie) : addToWatched(movie));
  };

  const handleQueueClick = e => {
    e.stopPropagation();

    dispatch(isQueued ? removeFromQueue(movie) : addToQueue(movie));
  };

  return (
    <ul className={s.btn_list}>
      <li>
        <button type="button" className={s.button_modal_btn} onClick={handleWatchedClick}>
          {isWatched ? 'Remove from Watched' : 'Add to Watched'}
        </button>
      </li>
      <li>
        <button type="button" className={s.button_modal_btn} onClick={handleQueueClick}>
          {isQueued ? 'Remove from Queue' : 'Add to Queue'}
        </button>
      </li>
    </ul>
  );
};

export default BtnList;
