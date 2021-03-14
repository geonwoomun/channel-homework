import React from 'react';
import useSearch from './hooks/Search';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  & label {
    margin-right: 10px;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  width: 30%;
  height: 1.2rem;
  padding: 0 0.5rem;
`;

function Search() {
  const { onChange } = useSearch();

  return (
    <Div>
      <label htmlFor='search'>검색</label>
      <Input id='search' onChange={onChange} />
    </Div>
  );
}

export default Search;
