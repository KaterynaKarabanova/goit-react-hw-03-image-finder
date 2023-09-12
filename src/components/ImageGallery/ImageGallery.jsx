import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { StyledGallery } from './ImageGallery.styled';
export const ImageGallery = ({ gallery, toggleModal }) => {
  return (
    <StyledGallery>
      {gallery.map(el => (
        <ImageGalleryItem
          toggleModal={toggleModal}
          key={el.id}
          id={el.id}
          webformatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
          alt={el.tags}
        />
      ))}
    </StyledGallery>
  );
};
