import { StyledGalleryItem, StyledGalleryImg } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  alt,
  toggleModal,
}) => {
  return (
    <StyledGalleryItem id={id} onClick={() => toggleModal(largeImageURL)}>
      <StyledGalleryImg src={webformatURL} alt={alt} />
    </StyledGalleryItem>
  );
};
