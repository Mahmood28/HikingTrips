import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color: #dedbd2;
}
`;
export const SearchBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const ChangeUnit = styled.div`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
export const Difficulty = styled.div`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: flex;

  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.tripname {
      font-weight: bold;
    }
  }
`;

export const DetailWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  width: 80%;
  img {
    width: 40%;
  }
  p {
    vertical-align: middle;
  }
  &.row {
    text-align: center;
  }
`;
