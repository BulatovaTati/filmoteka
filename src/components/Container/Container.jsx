import s from './Container.module.css';

const Container = ({ children, modClass }) => {
  return <div className={`${s.container} ${modClass}`}>{children}</div>;
};

export default Container;
