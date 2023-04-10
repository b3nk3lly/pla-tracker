import { Grid } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import "../App.css";
import Filter from "../objects/Filter";
import filterReducer from "../reducers/FilterReducer";
import PokemonTable from "./table/PokemonTable";
import Settings from "./Settings";
import pokemonJSON from "../data/pokemon.json";
import Pokemon from "../objects/Pokemon";
import SearchBar from "./filter/SearchBar";

function App() {
	let [pokemonList, setPokemonList] = useState([] as Pokemon[]);
	let [filter, filterDispatch] = useReducer(filterReducer, new Filter());

	// fetch Pokemon from JSON when page loads
	useEffect(() => {
		setPokemonList(
			pokemonJSON.map((pokemon) => {
				return Pokemon.fromJSON(pokemon);
			})
		);
	}, [setPokemonList]);

	return (
		<div className="App">
			<Grid container>
				<Grid item xs={9}>
					<SearchBar />
					<PokemonTable pokemonList={filter.apply(pokemonList)} />
				</Grid>
				<Grid item xs={3}>
					<Settings dispatch={filterDispatch} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
