import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import Section from '../Section/Section';

import { setCurrentPage } from '../../redux/movies/slice';
import { selectCurrentPage, selectTotalPages } from '../../redux/movies/selectors';

import s from './Pagination.module.css';

const Pagination = () => {
  const [pageRange, setPageRange] = useState(3);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const scrollToTop = () => {
    window.scrollTo({ top: 680, behavior: 'smooth' });
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
    <Section>
      <ReactPaginate
        previousLabel={<span className={s.pagination_icon_outlined}>chevron_left</span>}
        nextLabel={<span className={s.pagination_icon_outlined}>chevron_right</span>}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={pageRange}
        onPageChange={handlePageClick}
        containerClassName={s.pagination}
        pageClassName={s.pagination_btn}
        activeClassName={s.pagination_is_selected}
        previousClassName={s.pagination_btn_prev}
        nextClassName={s.pagination_btn_next}
        disabledClassName={s.pagination_btn_hidden}
        forcePage={currentPage - 1}
      />
    </Section>
  );
};

export default Pagination;
