import Pokemon from "../objects/Pokemon";
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
					{props.pokemonList.map((pokemon: Pokemon) => (
						<PokemonTableRow pokemon={pokemon} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
