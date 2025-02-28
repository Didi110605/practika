import Discount from '../../components/Discount';
import Categories from '../../components/Categories';
import DiscountBanner from '../../components/DiscountBanner';
import { Sale } from '../../components/Sale';
import { useRef } from 'react';

function HomePage({ setModalState }) {
  const scrollRef = useRef();

  return (
    <div>
      <Discount/>
      <Categories length={4} navBtn={true} />
      <DiscountBanner setModalState={setModalState} />
      <Sale ref={scrollRef} />
    </div>
  );
}

export default HomePage;