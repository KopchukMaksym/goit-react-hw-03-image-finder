import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import s from './ImageGallery.module.css';

class ImageGalleryItem extends Component {
  state = { modalOpen: false, modalContent: '' };

  openModal = () => {
    this.setState({ modalOpen: true, modalContent: this.props.originUrl });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, modalContent: '' });
  };

  render() {
    const { modalContent } = this.state;
    const { originUrl, image } = this.props;
    return (
      <>
        {this.state.modalOpen && (
          <Modal originUrl={modalContent} closeModal={this.closeModal} />
        )}
        <li onClick={() => this.openModal(originUrl)} className={s.galleryItem}>
          <img src={image} alt="" className={s.imageItem} />
        </li>
      </>
    );
  }
}

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
