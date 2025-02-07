import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import './tui.css';
import { setCurrentPage } from '../../redux/movies/slice';
import {
  selectCurrentPage,
  selectSearchQuery,
  selectTotalPages,
} from '../../redux/movies/selectors';
import { fetchMovieSearcher, getPopularData } from '../../redux/movies/operations';

const TuiPagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const searchQuery = useSelector(selectSearchQuery);

  const paginationRef = useRef(null);
  const paginationInstance = useRef(null);

  useEffect(() => {
    if (!paginationRef.current || totalPages === 0) return;

    if (!paginationInstance.current) {
      paginationInstance.current = new Pagination(paginationRef.current, {
        totalItems: totalPages,
        itemsPerPage: 1,
        visiblePages: 5,
        page: currentPage,
        centerAlign: true,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        usageStatistics: false,
        template: {
          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
          disabledMoveButton:
            '<span class="btn-hidden tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
          moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
          moveButton: ({ type }) => {
            if (type === 'first') {
              return `<a href="#" class="tui-page-btn tui-first custom-class-first">
                        <span class="tui-ico-first">1</span>
                      </a>`;
            }
            if (type === 'prev') {
              return `<a href="#" class="arrow tui-page-btn tui-prev custom-class-prev tui-first-child">
                        <span class="material-icons-outlined">arrow_back</span>
                      </a>`;
            }
            if (type === 'next') {
              return `<a href="#" class="arrow tui-page-btn tui-next custom-class-next">
                        <span class="material-icons-outlined">arrow_forward</span>
                      </a>`;
            }
            if (type === 'last') {
              return `<a href="#" class="tui-page-btn tui-last custom-class-last">
                        <span class="tui-ico-last">${totalPages}</span>
                      </a>`;
            }
            return '';
          },
        },
      });

      paginationInstance.current.on('afterMove', event => {
        const selectedPage = event.page;
        dispatch(setCurrentPage(selectedPage));

        if (searchQuery.trim()) {
          dispatch(fetchMovieSearcher({ searchQuery, page: selectedPage }));
        } else {
          dispatch(getPopularData(selectedPage));
        }

        setTimeout(() => {
          scrollToTop();
        }, 400);
      });
    } else {
      paginationInstance.current.setTotalItems(totalPages);
      paginationInstance.current.movePageTo(currentPage);
    }
  }, [totalPages, dispatch, currentPage, searchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 240, behavior: 'smooth' });
  };

  return <section className="pagination" ref={paginationRef}></section>;
};

export default TuiPagination;
