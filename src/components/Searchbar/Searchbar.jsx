import {
  StyledHeader,
  StyledSearchBtn,
  StyledInput,
  StyledForm,
} from './Searchbar.styled.js';
export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledHeader>
      <StyledForm>
        <StyledSearchBtn type="submit" class="button">
          <span>Search</span>
        </StyledSearchBtn>

        <StyledInput
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
