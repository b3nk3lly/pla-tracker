import { Grid } from "@mui/material";
import React, { useReducer } from "react";
import "../App.css";
import Filter from "../objects/Filter";
import filterReducer from "../FilterReducer";
import PokemonTable from "./PokemonTable";
import Settings from "./Settings";

function App() {
	let [filter, filterDispatch] = useReducer(filterReducer, new Filter());

	return (
		<div className="App">
			<Grid container>
				<Grid item xs={9}>
					<PokemonTable filter={filter} />
				</Grid>
				<Grid item xs={3}>
					<Settings dispatch={filterDispatch} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
