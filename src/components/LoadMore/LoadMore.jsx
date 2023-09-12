import { StyledBtn } from './LoadMore.styled';

export const LoadMore = ({ loadMore }) => {
  return (
    <StyledBtn type="button" onClick={e => loadMore(e)}>
      Load More
    </StyledBtn>
  );
};
