import s from './BtnList.module.css';

const BtnList = () => {
  return (
    <ul className={s.btn_list}>
      <li>
        <button type="button" className={s.button_modal_btn}>
          add to Watched
        </button>
      </li>
      <li>
        <button type="button" className={s.button_modal_btn}>
          add to queue
        </button>
      </li>
    </ul>
  );
};

export default BtnList;
