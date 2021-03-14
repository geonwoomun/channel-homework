import React from 'react';
import useCountryItem from './hooks/useCountryItem';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  width: 100%;
  padding: 0.2rem 0;
`;

const Div = styled.div`
  width: 18%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  width: 10%;
  background: #da5758;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function CountryItem({ country }) {
  const {
    alpha2Code,
    callingCodes,
    capital,
    name,
    region,
    onDelete
  } = useCountryItem(country);

  return (
    <Li>
      <Div title={name}>{name}</Div>
      <Div>{alpha2Code}</Div>
      <Div>{region}</Div>
      <Div>{capital}</Div>
      <Div>{callingCodes.join(', ')}</Div>
      <Button onClick={onDelete}>삭제</Button>
    </Li>
  );
}

export default React.memo(CountryItem);
