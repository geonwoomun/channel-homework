import React from 'react';
import CountryHeader from './CountryHeader';
import CountryList from './CountryList';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Country() {
  return (
    <Section>
      <CountryHeader />
      <CountryList />
    </Section>
  );
}

export default Country;
