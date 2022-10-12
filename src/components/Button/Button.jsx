import PropTypes from 'prop-types';
import s from '../Button/ButtonLoad.module.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={s.buttonLoad}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
