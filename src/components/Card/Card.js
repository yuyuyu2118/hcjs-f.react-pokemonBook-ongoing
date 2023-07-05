import React, { useState } from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  const [dispInfo, setDispInfo] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isHoverable, setIsHoverable] = useState(true);

  let japaneseTypeName;

  const dispInfoClick = () => {
    setDispInfo((prevDispInfo) => !prevDispInfo);
  };

  const handleImageClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
    setIsHoverable(!isHoverable);
  };

  const typeTranslate = (t) => {
    let tName;
    if (t === "normal") {
      tName = "ノーマル";
    }else if(t === "fire"){
      tName = "ほのお";
    }else if(t === "water"){
      tName = "みず";
    }else if(t === "grass"){
      tName = "くさ";
    }else if(t === "electric"){
      tName = "でんき";
    }else if(t === "ice"){
      tName = "こおり";
    }else if(t === "fighting"){
      tName = "かくとう";
    }else if(t === "poison"){
      tName = "どく";
    }else if(t === "ground"){
      tName = "じめん";
    }else if(t === "flying"){
      tName = "ひこう";
    }else if(t === "psychic"){
      tName = "エスパー";
    }else if(t === "bug"){
      tName = "むし";
    }else if(t === "rock"){
      tName = "いわ";
    }else if(t === "ghost"){
      tName = "ゴースト";
    }else if(t === "dragon"){
      tName = "ドラゴン";
    }else if(t === "dark"){
      tName = "あく";
    }else if(t === "steel"){
      tName = "はがね";
    }else if(t === "fairy"){
      tName = "フェアリー";
    }
    return tName;
  };

  return (
    <>
      {/* <div className="cardHover"></div> */}
      <div className={`card ${isHoverable ? "hoverable" : ""}`}>
        <div className="cardImage">
          <img
            src={pokemon.sprites.front_default}
            //src={pokemon.sprites.front_shiny}
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
              <div className="cardTypesText">タイプ</div>
              {pokemon.types.map((type) => {
                return (
                  <div key={type.type.name}>
                    {/* <span className="typeName">{type.type.name}</span> */}
                    <span className="typeName">{typeTranslate(type.type.name)}</span>
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
