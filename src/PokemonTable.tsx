import Pokemon from "./Pokemon";
import pokemonJSON from "./data/pokemon.json";
import { Table } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function getPokemon(): Pokemon[] {
	return pokemonJSON.map((pokemon) => {
		return Pokemon.fromJSON(pokemon);
	});
}

export default function PokemonTable() {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Form</TableCell>
						<TableCell>Gender</TableCell>
						<TableCell>Regular</TableCell>
						<TableCell>Alpha</TableCell>
						<TableCell>Shiny</TableCell>
						<TableCell>Path of Solitude</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{getPokemon().map((pokemon: Pokemon) => (
						<TableRow key={pokemon.id}>
							<TableCell>{pokemon.number}</TableCell>
							<TableCell>{pokemon.name}</TableCell>
							<TableCell>{pokemon.form}</TableCell>
							<TableCell>{pokemon.gender}</TableCell>
							<TableCell>
								<button></button>
							</TableCell>
							<TableCell>
								<button></button>
							</TableCell>
							<TableCell>
								<button></button>
							</TableCell>
							<TableCell>
								<button></button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
