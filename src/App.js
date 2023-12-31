import { useEffect, useState } from "react";
import "./App.css";
import {
  getAllPokemonJ,
  getAllPokemon,
  getPokemon,
  getPokemonJ,
} from "./utils/pokemon";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=30";
  const japaneseURL = "https://pokeapi.co/api/v2/pokemon-species?limit=30";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [pokemonDataJ, setPokemonDataJ] = useState([]);
  const [nextURLJ, setNextURLJ] = useState("");
  const [prevURLJ, setPrevURLJ] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      //すべてのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      let nameData = await getAllPokemonJ(japaneseURL);
      //各ポケモンの詳細データを取得
      loadPokemon(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous);
      loadPokemonJ(nameData.results);
      setNextURLJ(nameData.next);
      setPrevURLJ(nameData.previous);
      setLoading(false);
      // console.log(nameData.names[0])
      // console.log(nameData.results)
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const loadPokemonJ = async (data) => {
    let _pokemonDataJ = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemonJ(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonDataJ(_pokemonDataJ);
  };

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;

    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handleNextPageJ = async () => {
    setLoading(true);
    let data = await getAllPokemonJ(nextURLJ);
    await loadPokemonJ(data.results);
    setNextURLJ(data.next);
    setPrevURLJ(data.previous);
    setLoading(false);
  };

  const handlePrevPageJ = async () => {
    if (!prevURL) return;

    setLoading(true);
    let data = await getAllPokemonJ(prevURLJ);
    await loadPokemonJ(data.results);
    setNextURLJ(data.next);
    setPrevURLJ(data.previous);
    setLoading(false);
  };

  return (
    <>
      <NavBar />
      <div className="App">
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div className="btn">
              <button onClick={handlePrevPage,handlePrevPageJ}>前へ</button>
              <button onClick={handleNextPage,handleNextPageJ}>次へ</button>
            </div>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>

            <div className="btn">
              <button onClick={handlePrevPage,handlePrevPageJ}>前へ</button>
              <button onClick={handleNextPage,handleNextPageJ}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
