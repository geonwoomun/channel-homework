import React from 'react';
import useCountryHeaderItem from './hooks/useCountryHeaderItem';
import styled from 'styled-components';

const Li = styled.li`
  width: 18%;
  text-align: center;

  button {
    background: none;
    border: none;
    transition: 0.25s;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      color: skyblue;
    }
    &::after {
      content: ${props =>
        !props.isSelected ? '' : props.order === 'desc' ? `'↓'` : `'↑'`};
    }
  }
`;

function CountryHeaderItem({ item, onSort, isSelected, order }) {
  const { onClick } = useCountryHeaderItem({ item, order, onSort });

  return (
    <Li isSelected={isSelected} order={order} onClick={onClick}>
      <button>{item.display}</button>
    </Li>
  );
}

export default React.memo(CountryHeaderItem);
