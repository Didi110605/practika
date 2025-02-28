import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchAllProductsByCategories, fetchAllProductsSale } from '../../asyncActions/products';
import ProductItem from '../../components/ProductItem';
import { BASE_URL } from '../..';
import { useLocation, useParams } from 'react-router-dom';
import ProductFilter from '../../components/ProductFilter';
import { addItemAction } from '../../store/cartReducer';
import s from './ProductListPage.module.css';


function ProductListPage({ type }) {
  const { categories_name, products } = useSelector((store) => ({
    categories_name: store.products.categories_name,
    products: store.products.products.filter((elem) => elem.isShow),
  }));
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const actions = {
    all: () => dispatch(fetchAllProducts()),
    sale: () => dispatch(fetchAllProductsSale()),
    categories: () => dispatch(fetchAllProductsByCategories(id)),
  };

  useEffect(() => {
    actions[type]();
  }, [pathname]);

  return (
    <div className={s.product_list}>
        <h1 className={s.title}>{categories_name}</h1>
        <ProductFilter filterBySale={type !== 'sale'} />
        <div className={s.wrapper}>
          {products.map((elem) => (
            <ProductItem
              key={elem.id}
              id={elem.id}
              img={BASE_URL + elem.image}
              title={elem.title}
              price={elem.price}
              discont_price={elem.discont_price}
              btnClick={() => dispatch(addItemAction({ ...elem }))}
              count={elem.count}
            />
          ))}
        </div>
    </div>
  );
}

export default ProductListPage;