import Categories from '../../components/Categories';
import { useLocation } from 'react-router-dom';

function CategoriesPage() {
  const { pathname } = useLocation();
  
  return (
    <div>
      <Categories length={5} navBtn={false} />
    </div>
  );
}

export default CategoriesPage;