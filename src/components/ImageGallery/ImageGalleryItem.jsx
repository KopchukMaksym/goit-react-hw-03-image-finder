import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGalleryItem = ({ image, originUrl, onClick }) => {
  return (
    <li onClick={() => onClick(originUrl)} className={s.galleryItem}>
      <img src={image} alt="" className={s.imageItem} />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  props: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      originUrl: PropTypes.string.isRequired,
    })
  ),
};
