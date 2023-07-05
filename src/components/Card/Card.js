import React, { useState } from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  const [dispInfo, setDispInfo] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isHoverable, setIsHoverable] = useState(true);

  const dispInfoClick = () => {
    setDispInfo((prevDispInfo) => !prevDispInfo);
  };

  const handleImageClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
    setIsHoverable(!isHoverable);
  };

  return (
    <>
      {/* <div className="cardHover"></div> */}
      <div className={`card ${isHoverable ? "hoverable" : ""}`}>
        <div className="cardImage">
          <img
            src={pokemon.sprites.front_default}
            alt="pokemon"
            onClick={handleImageClick}
          ></img>
        </div>
        <h3 className="cardName">
          {pokemon.name} <button onClick={dispInfoClick}>▼</button>
        </h3>

        {dispInfo ? (
          <>
            <div className="cardTypes">
              <div>タイプ</div>
              {pokemon.types.map((type) => {
                return (
                  <div key={type.type.name}>
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
                      <span className="abilityName">
                        {ability.ability.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {showModal ? (
          <>
            <div className="modal">
              <span className="close" onClick={handleImageClick}>
                &times;
              </span>
              <img
                className="modal-content"
                src={pokemon.sprites.front_default}
              ></img>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Card;
