import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore from 'swiper';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';

import Loader from '../Loader/Loader';
import Container from '../Container/Container';
import Section from '../Section/Section';

import { fetchUpcomingMovies } from '../../redux/movies/operations';
import { selectError, selectIsLoading, selectUpcomingMovies } from '../../redux/movies/selectors';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './MovieSwiper.module.css';

const MovieSwiper = () => {
  SwiperCore.use([Keyboard, Autoplay, Pagination]);

  const dispatch = useDispatch();
  const upcomingMovies = useSelector(selectUpcomingMovies);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Section className={s.upcoming}>
      <Container>
        <h2 className={s.upcoming__title}>Upcoming Movies</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={10}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2900, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
        >
          {upcomingMovies?.map(movie => (
            <SwiperSlide key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={s.upcoming___image}
              />
              <h3>{movie.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default MovieSwiper;
