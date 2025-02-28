import s from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logoImg from '../../images/logo.png';
import cartImg from '../../images/emptyCart.png';

function Header() {
  const { totalCount } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  return (
    <div className={s.header}>
      <div className={s.logo}><img onClick={() => navigate('/')} width={40} src={logoImg} alt="Logo" /></div>
      <ul className={s.menu_wrapper}>
        <NavLink className={({ isActive }) => isActive ? s.active : ''} to={'/'}>
          <li>Main Page</li>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? s.active : ''} to={'/categories/all'}>
          <li>Categories</li>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? s.active : ''} to={'/products/all'}>
          <li>All products</li>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? s.active : ''} to={'/products/sales'}>
          <li>All sales</li>
        </NavLink>
      </ul>
     <div className={s.cart}><img onClick={() => navigate('/cart')} width={30} src={cartImg} alt="Cart" /></div> 
    </div>
  );
}

export default Header;