import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ data }) => {
  return (
    <ul className={s.gallery}>
      {data.map(el => {
        return (
          <ImageGalleryItem
            key={el.id}
            data={el}
            originUrl={el.largeImageURL}
            image={el.webformatURL}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
