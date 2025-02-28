import s from './Categories.module.css'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react'; 
import NavButton from '../UI/NavButton'; 
import { fetchCategoriesList } from '../../asyncActions/categories'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { BASE_URL } from '../..'; 

function Categories({ length, navBtn }) {
  const categories = useSelector((store) => store.categories); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(fetchCategoriesList()); 
  }, [dispatch]);

  return (
    <div className={s.categories}>
        <div className={s.title_line}>
          <h2 className={s.title}>Categories</h2>
          {navBtn && (
            <NavButton
              title={'All categories'}
              onClick={() => navigate('/categories/all')}
            />
          )}
        </div>
        <ul className={s.category_list}>
          {categories.slice(0, length).map((elem) => (
            <Link
              className={s.category}
              key={elem.id}
              to={'/categories/' + elem.id}
            >
              <li>
                <div
                  style={{
                    background: `url(${BASE_URL}${elem.image}) no-repeat center center / cover`,
                  }}
                  className={s.category_image}
                ></div>
                <p className={s.category_name}>{elem.title}</p>
              </li>
            </Link>
          ))}
        </ul>
    </div>
  );
}

export default Categories;