import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    currentData: [],
    currentPage: 1,
    loading: false,
    currentImg: '',
    modalOpen: false,
    toSearch: '',
  };
  componentDidMount() {
    setTimeout(this.getData(' '), 1000);
  }
  getData = value => {
    this.setState({ loading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=cat&page=${this.state.currentPage}&key=39007131-7339e45b97efcc367872ff842&image_type=photo&orientation=horizontal&per_page=12&q=${value}`
      )
      .then(data => this.setState({ currentData: data.data.hits }))
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => this.setState({ loading: false }));
  };
  loadMore = e => {
    e.preventDefault();
    this.setState(prev => ({ currentPage: prev.currentPage + 1 }));
    this.getData(this.state.toSearch);
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ currentPage: 1 });
    const value = e.target.elements.search.value;
    console.log(value);
    this.setState({ toSearch: value });
    this.getData(value);
  };
  toggleModal = largeImageURL => {
    if (largeImageURL) {
      this.setState({ currentImg: largeImageURL });
    }
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
    console.log(this.state.modalOpen);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.currentData && (
          <ImageGallery
            gallery={this.state.currentData}
            toggleModal={this.toggleModal}
          />
        )}

        {this.state.loading && <Loader />}

        {this.state.currentData?.length > 0 && (
          <LoadMore loadMore={this.loadMore} />
        )}
        {this.state.modalOpen && (
          <Modal
            currentImg={this.state.currentImg}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
