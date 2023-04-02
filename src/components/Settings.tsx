import React from "react";
import FormGroup from "@mui/material/FormGroup";
import Location from "../enums/Location";
import EncounterType from "../enums/EncounterType";
import IFilterReducerAction from "../interfaces/IFilterReducerAction";
import FilterReducerActionType from "../enums/FilterReducerActionType";
import LocationFilterButton from "./filter/LocationFilterButton";
import EncounterTypeFilterButton from "./filter/EncounterTypeFilterButton";

export default function Settings({
	dispatch
}: {
	dispatch: React.Dispatch<IFilterReducerAction>;
}) {
	/**
	 * Adds or removes a Location.
	 * @param event
	 * @param location
	 */
	const handleLocationChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		location: Location
	) => {
		dispatch({
			type: event.target.checked
				? FilterReducerActionType.ADD_LOCATION
				: FilterReducerActionType.REMOVE_LOCATION,
			payload: location
		});
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
		dispatch({
			type: event.target.checked
				? FilterReducerActionType.ADD_ENCOUNTER_TYPE
				: FilterReducerActionType.REMOVE_ENCOUNTER_TYPE,
			payload: encounterType
		});
	};

	return (
		<FormGroup>
			<LocationFilterButton
				location={Location.OBSIDIAN_FIELDLANDS}
				handleChange={handleLocationChange}
			/>
			<LocationFilterButton
				location={Location.CRIMSON_MIRELANDS}
				handleChange={handleLocationChange}
			/>
			<LocationFilterButton
				location={Location.COBALT_COASTLANDS}
				handleChange={handleLocationChange}
			/>
			<LocationFilterButton
				location={Location.CORONET_HIGHLANDS}
				handleChange={handleLocationChange}
			/>
			<LocationFilterButton
				location={Location.ALABASTER_ICELANDS}
				handleChange={handleLocationChange}
			/>

			<EncounterTypeFilterButton
				encounterType={EncounterType.OVERWORLD}
				handleChange={handleEncounterTypeChange}
			/>
			<EncounterTypeFilterButton
				encounterType={EncounterType.MASS_OUTBREAK}
				handleChange={handleEncounterTypeChange}
			/>
			<EncounterTypeFilterButton
				encounterType={EncounterType.MASSIVE_MASS_OUTBREAK}
				handleChange={handleEncounterTypeChange}
			/>
			<EncounterTypeFilterButton
				encounterType={EncounterType.SPACETIME_DISTORTION}
				handleChange={handleEncounterTypeChange}
			/>
		</FormGroup>
	);
}
