import Pokemon from "../../objects/Pokemon";
import { Table } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import PokemonTableRow from "./PokemonTableRow";

interface Props {
	pokemonList: Pokemon[];
}

export default function PokemonTable(props: Props) {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell align="center">#</TableCell>
						<TableCell align="center">Name</TableCell>
						<TableCell align="center">Form</TableCell>
						<TableCell align="center">Gender</TableCell>
						<TableCell align="center">Regular</TableCell>
						<TableCell align="center">Alpha</TableCell>
						<TableCell align="center">Shiny</TableCell>
						<TableCell align="center">Path of Solitude</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.pokemonList.map((pokemon: Pokemon) => (
						<PokemonTableRow pokemon={pokemon} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
