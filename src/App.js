
import React from 'react';
import Mainpage from './components/Mainpage';
import MotoDisplay from './components/MotoDisplay';
import MotoStore from './components/MotoStore';

function App() {
  const motoList = MotoStore.map((prop) => (
    <MotoDisplay
      key={prop.id}
      image={prop.image}
      name={prop.name}
      details={prop.details}
    />
  ));

  return (
    <div className="">
      <Mainpage />
      {motoList}
    </div>
  );
}

export default App;
