import { Component } from 'react';
import { fetchApi } from 'api/fetchApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import s from '../components/App.module.css';

class App extends Component {
  state = {
    data: [],
    page: 1,
    query: '',
    isLoading: false,
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

  render() {
    const { data, isLoading } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.searchImg} />
        {!!data.length && <ImageGallery data={data} />}
        {isLoading && <Loader />}
        {!!data.length && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}

export default App;
