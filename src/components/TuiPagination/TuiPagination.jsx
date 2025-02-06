import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { selectCurrentPage, selectTotalPages } from '../../redux/movies/selectors';

const TuiPagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {}, []);

  return <></>;
};

export default TuiPagination;
