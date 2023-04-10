import { TableCell, TableRow } from "@mui/material";
import ProgressType from "../../enums/ProgressType";
import Pokemon from "../../objects/Pokemon";
import ProgressButton from "./ProgressButton";

interface Props {
	pokemon: Pokemon;
}

function PokemonTableRow(props: Props) {
	return (
		<TableRow key={props.pokemon.id}>
			<TableCell align="center">{props.pokemon.number}</TableCell>
			<TableCell align="center">{props.pokemon.name}</TableCell>
			<TableCell align="center">{props.pokemon.form}</TableCell>
			<TableCell align="center">{props.pokemon.gender}</TableCell>
			<TableCell align="center">
				<ProgressButton
					pokemonId={props.pokemon.id}
					progressType={ProgressType.REGULAR}
				/>
			</TableCell>
			<TableCell align="center">
				<ProgressButton
					pokemonId={props.pokemon.id}
					progressType={ProgressType.ALPHA}
				/>
			</TableCell>
			<TableCell align="center">
				<ProgressButton
					pokemonId={props.pokemon.id}
					progressType={ProgressType.SHINY}
				/>
			</TableCell>
			<TableCell align="center">
				{
					// POS can only be completed once per Pokemon,
					// so don't show a button for each form/gender
					props.pokemon.isDefaultForm() &&
					props.pokemon.isDefaultGender() ? (
						<ProgressButton
							pokemonId={props.pokemon.id}
							progressType={ProgressType.PATH_OF_SOLUTIDUE}
						/>
					) : null
				}
			</TableCell>
		</TableRow>
	);
}

export default PokemonTableRow;
