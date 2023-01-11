import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Location from "../Location";
import EncounterType from "../EncounterType";

export default function Settings() {
	return (
		<FormGroup>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={Location.OBSIDIAN_FIELDLANDS}
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={Location.CRIMSON_MIRELANDS}
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={Location.COBALT_COASTLANDS}
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={Location.CORONET_HIGHLANDS}
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={Location.ALABASTER_ICELANDS}
			/>

			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={EncounterType.OVERWORLD}
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={EncounterType.MASS_OUTBREAK}
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={EncounterType.MASSIVE_MASS_OUTBREAK}
			/>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label={EncounterType.SPACETIME_DISTORTION}
			/>
		</FormGroup>
	);
}
