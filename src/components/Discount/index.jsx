import s from './Discount.module.css';
import Button from '../../components/UI/Button';
import HomeImg from '../../images/home.jpg';

function Discount() {
  return (
    <div className={s.discounts} style={{background: `url(${HomeImg})`}}>
        <h1 className={s.title}>
          Amazing Discounts on Garden Products!
        </h1>
        <Button title={'Check out'} theme={'green'} size={'small'} />
    </div>
  );
}

export default Discount;