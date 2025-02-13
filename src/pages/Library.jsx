import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';

const Library = () => {
  const location = useLocation();
  const isQueuePage = location.pathname === '/library/queue';
  const isWatchedPage = location.pathname === '/library/watched';

  if (!isQueuePage && !isWatchedPage) {
    return <Navigate to="/library/queue" replace />;
  }
  return (
    <Section>
      <Container>
        <Outlet />
      </Container>
    </Section>
  );
};

export default Library;
