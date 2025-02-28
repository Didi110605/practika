import s from './NavButton.module.css';

function NavButton({ title, ...otherProps }) {
  return (
    <button className={s.btn} {...otherProps}>
      {title}
    </button>
  );
}

export default NavButton; 