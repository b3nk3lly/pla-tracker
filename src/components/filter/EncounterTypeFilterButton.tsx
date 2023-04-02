import { Checkbox, FormControlLabel } from "@mui/material";
import EncounterType from "../../enums/EncounterType";

interface Props {
	encounterType: EncounterType;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement>,
		encounterType: EncounterType
	) => void;
}

function EncounterTypeFilterButton(props: Props) {
	return (
		<FormControlLabel
			control={
				<Checkbox
					defaultChecked
					onChange={(e) => props.handleChange(e, props.encounterType)}
				/>
			}
			label={props.encounterType}
		/>
	);
}

export default EncounterTypeFilterButton;
