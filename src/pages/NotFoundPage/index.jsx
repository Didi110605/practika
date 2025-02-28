import s from './NotFoundPage.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import NotFound from '../../images/404.png';
   

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
        <div className={s.info}>
          <img src={NotFound} alt="Not found page" />
          <h1>Page Not Found</h1>
          <p>
            We’re sorry, the page you requested could not be found.
            Please go back to the homepage.
          </p>
          <Button
            title={'Go Home'}
            theme={'green'}
            size={'small'}
            onClick={() => navigate('/')}
          />
        </div>
    </div>
  );
}

export default NotFoundPage;