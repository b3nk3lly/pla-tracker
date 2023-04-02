import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Location from "../Location";
import EncounterType from "../EncounterType";

export default function Settings() {
	const [locations, setLocations] = useState([
		Location.OBSIDIAN_FIELDLANDS,
		Location.CRIMSON_MIRELANDS,
		Location.COBALT_COASTLANDS,
		Location.CORONET_HIGHLANDS,
		Location.ALABASTER_ICELANDS
	]);

	const [encounterTypes, setEncounterTypes] = useState([
		EncounterType.OVERWORLD,
		EncounterType.MASS_OUTBREAK,
		EncounterType.MASSIVE_MASS_OUTBREAK,
		EncounterType.SPACETIME_DISTORTION
	]);

	/**
	 * Adds or removes a Location.
	 * @param event
	 * @param location
	 */
	const handleLocationChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		location: Location
	) => {
		if (event.target.checked) {
			setLocations([...locations, location]);
		} else {
			setLocations(locations.filter((loc) => loc !== location));
		}
	};

	/**
	 * Adds or removes an Encounter Type.
	 * @param event
	 * @param encounterType
	 */
	const handleEncounterTypeChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		encounterType: EncounterType
	) => {
		if (event.target.checked) {
			setEncounterTypes([...encounterTypes, encounterType]);
		} else {
			setEncounterTypes(
				encounterTypes.filter((type) => type !== encounterType)
			);
		}
	};

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleLocationChange(
								e,
								Location.OBSIDIAN_FIELDLANDS
							)
						}
					/>
				}
				label={Location.OBSIDIAN_FIELDLANDS}
			/>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleLocationChange(e, Location.CRIMSON_MIRELANDS)
						}
					/>
				}
				label={Location.CRIMSON_MIRELANDS}
			/>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleLocationChange(e, Location.COBALT_COASTLANDS)
						}
					/>
				}
				label={Location.COBALT_COASTLANDS}
			/>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleLocationChange(e, Location.CORONET_HIGHLANDS)
						}
					/>
				}
				label={Location.CORONET_HIGHLANDS}
			/>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleLocationChange(e, Location.ALABASTER_ICELANDS)
						}
					/>
				}
				label={Location.ALABASTER_ICELANDS}
			/>

			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleEncounterTypeChange(
								e,
								EncounterType.OVERWORLD
							)
						}
					/>
				}
				label={EncounterType.OVERWORLD}
			/>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleEncounterTypeChange(
								e,
								EncounterType.MASS_OUTBREAK
							)
						}
					/>
				}
				label={EncounterType.MASS_OUTBREAK}
			/>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleEncounterTypeChange(
								e,
								EncounterType.MASSIVE_MASS_OUTBREAK
							)
						}
					/>
				}
				label={EncounterType.MASSIVE_MASS_OUTBREAK}
			/>
			<FormControlLabel
				control={
					<Checkbox
						defaultChecked
						onChange={(e) =>
							handleEncounterTypeChange(
								e,
								EncounterType.SPACETIME_DISTORTION
							)
						}
					/>
				}
				label={EncounterType.SPACETIME_DISTORTION}
			/>
		</FormGroup>
	);
}
