import React from 'react';
import CountryHeaderItem from './CountryHeaderItem';
import useCountryHeader from './hooks/useCountryHeader';
import styled from 'styled-components';

const Header = styled.header`
  width: 80%;
  border: 2px solid grey;
  margin-top: 1rem;
  padding: 0 1rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const Li = styled.li`
  text-align: center;
  width: 10%;
  font-size: 1.1rem;
  font-weight: bold;
`;

const headerList = [
  { key: 'name', display: '이름' },
  { key: 'alpha2Code', display: '국가 코드' },
  { key: 'region', display: '지역' },
  { key: 'capital', display: '수도' },
  { key: 'callingCodes', display: '국가 번호' }
];

function CountryHeader() {
  const { onSort, sortKey } = useCountryHeader();

  return (
    <Header>
      <ul>
        {headerList.map(item => (
          <CountryHeaderItem
            key={item.key}
            isSelected={sortKey.key === item.key}
            order={sortKey.key === item.key ? sortKey.order : null}
            item={item}
            onSort={onSort}
          />
        ))}
        <Li>삭제</Li>
      </ul>
    </Header>
  );
}

export default CountryHeader;
