import s from './Sale.module.css';
import NavButton from '../UI/NavButton';
import { useDispatch, useSelector } from 'react-redux';
import { forwardRef, useEffect } from 'react';
import { fetchAllProducts } from '../../asyncActions/products';
import { BASE_URL } from '../..';
import ProductItem from '../ProductItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { addItemAction } from '../../store/cartReducer';

export const Sale = forwardRef((props, ref) => {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [pathname]);

  return (
    <div className={s.sale} ref={ref}>
        <div className={s.title_line}>
          <h2 className={s.title}>Sale</h2>
          <NavButton
            title={'All sales'}
            onClick={() => navigate('/products/sales')}
          />
        </div>
        <div className={s.wrapper_list}>
          {products
            .sort((a, b) => b.discont_price - a.discont_price)
            .slice(0, 4)
            .map((elem) => (
              <ProductItem
                key={elem.id}
                id={elem.id}
                img={BASE_URL + elem.image}
                title={elem.title}
                price={elem.price}
                discont_price={elem.discont_price}
                btnClick={() => dispatch(addItemAction({ ...elem }))}
              />
            ))}
        </div>
    </div>
  );
});