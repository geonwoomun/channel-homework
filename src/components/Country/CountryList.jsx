import React from 'react';
import useCountryList from './hooks/useCountryList';
import CountryItem from './CountryItem';
import styled from 'styled-components';

const UL = styled.ul`
  width: 80%;
  padding: 0 1rem;
  text-align: center;
  border: 1px solid grey;
  border-top: 0px;
`;

function CountryList() {
  const { countries, error, loading } = useCountryList();

  if (error) return <div>에러가 발생했습니다.</div>;
  if (loading) return <div>loading...</div>;

  return (
    <UL>
      {countries.map(country => (
        <CountryItem key={country.alpha2Code} country={country} />
      ))}
    </UL>
  );
}

export default CountryList;
