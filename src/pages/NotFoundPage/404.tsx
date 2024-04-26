import { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';

const NotFoundPage: FC = () => {

  return(
    <div className={s.notFound}>
      <h1 className={s.notFound__title}>404 Not Found</h1>
      <p className={s.notFound__desc}>Почему вы видите это сообщение?</p>
      <ol className={s.notFound__list}>
        <li className={s.notFound__item}>Скорее всего, у вас не включен ВПН, поэтому для использования этого веб-сайта, пожалуйста, включите ВПН</li>
        <li className={s.notFound__item}>Либо, возможно, данной страницы не существует</li>
      </ol>
      <Link className={s.notFound__link} to='/'>Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;