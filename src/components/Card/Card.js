import React from 'react'
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={pokemon.sprites.front_default} alt="pokemon"></img>
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          {pokemon.weight >= 1000 ? (
            <p className="title">重さ : {pokemon.weight / 1000}t</p>
          ) : (
            <p className="title">重さ : {pokemon.weight}kg</p>
          )}
        </div>
        <div className="cardData">
          <p className="title">高さ : {pokemon.height / 10}m</p>
        </div>
        <div className="cardData">
          <div>アビリティ</div>
          {pokemon.abilities.map((ability) => {
            return (
              <div>
                <span className="abilityName">{ability.ability.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card