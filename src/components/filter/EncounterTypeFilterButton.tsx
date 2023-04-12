import { Checkbox, FormControlLabel, Typography } from "@mui/material";
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
			label={
				<Typography variant="body2">{props.encounterType}</Typography>
			}
		/>
	);
}

export default EncounterTypeFilterButton;
