import styled from 'styled-components';

// Styled Components
const SearchForm = styled.form`
  display: flex;
  margin: auto;
  padding: 1.5em;
  justify-content: center;
  max-width: 30em;
`;

const SearchInput = styled.input`
  background: transparent;
  border-radius: 1.5em;
  box-shadow: 0 0 0 0.4em #171717 inset;
  padding: 0.75em;
  transform: translate(0.5em, 0.5em) scale(0.5);
  transform-origin: 100% 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.25s ease-out;

  &:invalid:not(:focus),
  + .search-btn {
    cursor: pointer;
  }

  &:focus,
  &:valid {
    background: #fff;
    border-radius: 0.375em 0 0 0.375em;
    box-shadow: 0 0 0 0.1em #d9d9d9 inset;
    transform: scale(1);
  }
`;

const SearchButton = styled.button`
  background: #171717;
  border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
  padding: 0.75em;
  position: relative;
  transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);
  transform-origin: 0 50%;
  cursor: pointer;
  transition: all 0.25s ease-out;

  &:before,
  &:after {
    content: "";
    display: block;
    opacity: 0;
    position: absolute;
  }

  &:before {
    border-radius: 50%;
    box-shadow: 0 0 0 0.2em #f1f1f1 inset;
    top: 0.75em;
    left: 0.75em;
    width: 1.2em;
    height: 1.2em;
  }

  &:after {
    background: #f1f1f1;
    border-radius: 0 0.25em 0.25em 0;
    top: 51%;
    left: 51%;
    width: 0.75em;
    height: 0.25em;
    transform: translate(0.2em, 0) rotate(45deg);
    transform-origin: 0 50%;
  }

  span {
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
  }

  &:focus,
  &:hover,
  &:active {
    background: #2762f3;
    border-radius: 0 0.375em 0.375em 0;
    transform: scale(1);
  }

  &:focus:before,
  &:focus:after,
  &:hover:before,
  &:hover:after,
  &:active:before,
  &:active:after {
    opacity: 1;
  }

  &:active {
    transform: translateY(1px);
  }
`;

// React Component
const SearchBar = () => {
  return (
    <SearchForm className="search-bar">
      <SearchInput type="search" name="search" pattern=".*\S.*" required />
      <SearchButton className="search-btn" type="submit">
        <span>Search</span>
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
