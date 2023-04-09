import { TableCell, TableRow } from "@mui/material";
import ProgressType from "../enums/ProgressType";
import Pokemon from "../objects/Pokemon";
import ProgressButton from "./ProgressButton";

interface Props {
	pokemon: Pokemon;
}

function PokemonTableRow(props: Props) {
	return (
		<TableRow key={props.pokemon.id}>
			<TableCell>{props.pokemon.number}</TableCell>
			<TableCell>{props.pokemon.name}</TableCell>
			<TableCell>{props.pokemon.form}</TableCell>
			<TableCell>{props.pokemon.gender}</TableCell>
			<TableCell>
				<ProgressButton
					pokemonId={props.pokemon.id}
					progressType={ProgressType.REGULAR}
				/>
			</TableCell>
			<TableCell>
				<ProgressButton
					pokemonId={props.pokemon.id}
					progressType={ProgressType.ALPHA}
				/>
			</TableCell>
			<TableCell>
				<ProgressButton
					pokemonId={props.pokemon.id}
					progressType={ProgressType.SHINY}
				/>
			</TableCell>
			<TableCell>
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
