import React from "react";

import CatForm from './CatForm';
import CatCard from './CatCard';

function CatsContainer(props) {

  const displayCats = () => {
    return props.cats.map(cat => {
      return <CatCard key={cat.id} cat={cat} />;
    });
  }

  return (
    <section className="cats-container">
      <h1>All my cats!</h1>
      <CatForm />
      {displayCats()}
    </section>
  )
}

export default CatsContainer;