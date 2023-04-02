import { Checkbox, FormControlLabel } from "@mui/material";
import Location from "../../Location";

interface Props {
	location: Location;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement>,
		location: Location
	) => void;
}

function LocationFilterButton(props: Props) {
	return (
		<FormControlLabel
			control={
				<Checkbox
					defaultChecked
					onChange={(e) => props.handleChange(e, props.location)}
				/>
			}
			label={props.location}
		/>
	);
}

export default LocationFilterButton;
