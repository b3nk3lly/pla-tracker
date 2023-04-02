import Pokemon from "../objects/Pokemon";
import { Table } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ProgressButton from "./ProgressButton";
import ProgressType from "../enums/ProgressType";

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
						<TableRow key={pokemon.id}>
							<TableCell>{pokemon.number}</TableCell>
							<TableCell>{pokemon.name}</TableCell>
							<TableCell>{pokemon.form}</TableCell>
							<TableCell>{pokemon.gender}</TableCell>
							<TableCell>
								<ProgressButton
									progressType={ProgressType.REGULAR}
								/>
							</TableCell>
							<TableCell>
								<ProgressButton
									progressType={ProgressType.ALPHA}
								/>
							</TableCell>
							<TableCell>
								<ProgressButton
									progressType={ProgressType.SHINY}
								/>
							</TableCell>
							<TableCell>
								{
									// POS can only be completed once per Pokemon,
									// so don't show a button for each form/gender
									pokemon.isDefaultForm() &&
									pokemon.isDefaultGender() ? (
										<ProgressButton
											progressType={
												ProgressType.PATH_OF_SOLUTIDUE
											}
										/>
									) : null
								}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
