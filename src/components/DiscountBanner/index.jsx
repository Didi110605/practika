import s from './DiscountBanner.module.css';
import offImg from '../../images/offImg.png';
import Form from '../UI/Form';


function DiscountBanner(setModalState) {

    return (
      <div className={ s.offForm}>
        <h1>5% off on the first order</h1>
        <div className={s.discountForm}>
          <img src={offImg} />
          <Form
            theme={'transparent'}
            titleForBtn={'Get a discount'}
            themeForBtn={'white'}
            sizeForBtn={'xl'}
            setModalState={setModalState}
          />
        </div>
      </div>
    );
  }
  
  export default DiscountBanner;