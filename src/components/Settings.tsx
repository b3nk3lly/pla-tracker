import React from "react";
import FormGroup from "@mui/material/FormGroup";
import EncounterType from "../enums/EncounterType";
import IFilterReducerAction from "../interfaces/IFilterReducerAction";
import FilterReducerActionType from "../enums/FilterReducerActionType";
import EncounterTypeFilterButton from "./filter/EncounterTypeFilterButton";
import HisuiMap from "./map/HisuiMap";
import { Grid, Typography } from "@mui/material";

export default function Settings({
	dispatch
}: {
	dispatch: React.Dispatch<IFilterReducerAction>;
}) {
	const encounterTypes = [
		EncounterType.OVERWORLD,
		EncounterType.MASS_OUTBREAK,
		EncounterType.MASSIVE_MASS_OUTBREAK,
		EncounterType.SPACETIME_DISTORTION
	];

	/**
	 * Adds or removes an Encounter Type.
	 * @param event
	 * @param encounterType
	 */
	const handleEncounterTypeChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		encounterType: EncounterType
	) => {
		dispatch({
			type: event.target.checked
				? FilterReducerActionType.ADD_ENCOUNTER_TYPE
				: FilterReducerActionType.REMOVE_ENCOUNTER_TYPE,
			payload: encounterType
		});
	};

	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant="h4">Filters</Typography>
			</Grid>
			<Grid item xs={12}>
				<FormGroup>
					<HisuiMap dispatch={dispatch} />

					{encounterTypes.map((encounterType) => {
						return (
							<EncounterTypeFilterButton
								encounterType={encounterType}
								handleChange={handleEncounterTypeChange}
							/>
						);
					})}
				</FormGroup>
			</Grid>
		</Grid>
	);
}
