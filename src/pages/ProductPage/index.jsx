import s from './ProductPage.module.css';
import Button from '../../components/UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../../asyncActions/products';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../..';
import Counter from '../../components/UI/Counter';
import { addItemAction } from '../../store/cartReducer';


function ProductPage() {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const changeCount = (operation) => {
    const operations = {
      '+': () => setCount(prevCount => prevCount + 1),
      '-': () => {
        if (count > 1) setCount(prevCount => prevCount - 1);
      },
    };

    return operations[operation]();
  };



  const handleAddToCart = (elem) => {
    dispatch(addItemAction({ ...elem, count: count }));
  };

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <div>
        {products.map((elem) => (
          <div key={elem.id} className={s.product}>
            <div className={s.productImage_wrapper}>
              <img src={BASE_URL + elem.image} alt={elem.title} />
            </div>
            <div className={s.productInfo_wrapper}>
              <h2 className={s.product_title}>{elem.title}</h2>
              <div className={s.price_wrapper}>
                <p className={s.new_price}>
                  $
                  {elem.discont_price ? elem.discont_price : elem.price}
                </p>
                <p className={s.old_price}>
                  {elem.discont_price === null ? '' : '$' + elem.price}
                </p>
              </div>
              <div className={s.controls_wrapper}>
                <Counter count={count} changeCount={changeCount} />
                <Button
                  title={'Add to cart'}
                  theme={'green'}
                  size={'xl'}
                  onClick={() => handleAddToCart(elem)}
                />
              </div>
              <h3 className={s.description_title}>Description</h3>
              <p className={s.description_text}>{elem.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductPage;