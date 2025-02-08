import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { setCurrentPage } from '../../redux/movies/slice';
import { selectCurrentPage, selectTotalPages } from '../../redux/movies/selectors';

import './Pagination.css';

const Pagination = () => {
  const [pageRange, setPageRange] = useState(3);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const scrollToTop = () => {
    window.scrollTo({ top: 240, behavior: 'smooth' });
  };

  const handlePageClick = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
    scrollToTop();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setPageRange(5);
      } else {
        setPageRange(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ReactPaginate
      previousLabel={<span className="material-icons-outlined">chevron_left</span>}
      nextLabel={<span className="material-icons-outlined">chevron_right</span>}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={pageRange}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      pageClassName={'tui-page-btn'}
      activeClassName={'tui-is-selected'}
      previousClassName={'tui-prev'}
      nextClassName={'tui-next'}
      disabledClassName={'btn-hidden'}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
