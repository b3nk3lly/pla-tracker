import React, { useReducer } from "react";
import "../App.css";
import Filter from "../Filter";
import filterReducer from "../FilterReducer";
import PokemonTable from "./PokemonTable";
import Settings from "./Settings";

function App() {
	let [filter, filterDispatch] = useReducer(filterReducer, new Filter());

	return (
		<div className="App">
			<PokemonTable filter={filter} />
			<Settings dispatch={filterDispatch} />
		</div>
	);
}

export default App;
