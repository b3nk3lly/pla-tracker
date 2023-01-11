import React from "react";
import "../App.css";
import PokemonTable from "./PokemonTable";
import Settings from "./Settings";

function App() {
	return (
		<div className="App">
			<PokemonTable />
			<Settings />
		</div>
	);
}

export default App;
