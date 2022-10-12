import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchApi } from 'utils/fetchApi';
import ImageGallery from './ImageGallery/ImageGallery';
import s from '../components/App.module.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    data: [],
    page: 1,
    query: '',
    isLoading: false,
    modalOpen: false,
    modalContent: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if ((query && prevState.query !== query) || page > prevState.page) {
      this.getImagesFromApi();
    }
  }

  getImagesFromApi = async () => {
    this.setState({ isLoading: true });

    try {
      const { data } = await fetchApi(this.state.query, this.state.page);
      this.setState({ data: [...this.state.data, ...data.hits] });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  searchImg = query => {
    if (query !== this.state.query) {
      this.setState({ query: query, page: 1, data: [] });
    }
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  openModal = originUrl => {
    this.setState({ modalOpen: true, modalContent: originUrl });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, modalContent: '' });
  };

  render() {
    const { modalOpen, modalContent, data, isLoading } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.searchImg} />
        {modalOpen && (
          <Modal originUrl={modalContent} closeModal={this.closeModal} />
        )}
        {!!data.length && (
          <ImageGallery
            data={data}
            openModal={this.openModal}
            // closeModal={this.closeModal}
          />
        )}

        {isLoading && <Loader />}
        {!!data.length && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}

export default App;
