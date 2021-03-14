import React from 'react';
import Search from '../components/Search';
import Country from '../components/Country';
import CreateForm from '../components/CreateForm';

function Home() {
  return (
    <div>
      <CreateForm />
      <Search />
      <Country />
    </div>
  );
}

export default Home;
