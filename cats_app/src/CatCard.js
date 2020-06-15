import React from 'react';

function CatCard(props) {

  return (
    <div className="cat-card">
      <h3>{props.cat.name}</h3>
      <p>{props.cat.color}</p>
    </div>
  )
}

export default CatCard;