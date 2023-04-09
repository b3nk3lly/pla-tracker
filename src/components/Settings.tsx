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
	const locations = [
		Location.OBSIDIAN_FIELDLANDS,
		Location.CRIMSON_MIRELANDS,
		Location.COBALT_COASTLANDS,
		Location.CORONET_HIGHLANDS,
		Location.ALABASTER_ICELANDS
	];

	const encounterTypes = [
		EncounterType.OVERWORLD,
		EncounterType.MASS_OUTBREAK,
		EncounterType.MASSIVE_MASS_OUTBREAK,
		EncounterType.SPACETIME_DISTORTION
	];

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
			{locations.map((location) => {
				return (
					<LocationFilterButton
						location={location}
						handleChange={handleLocationChange}
					/>
				);
			})}

			{encounterTypes.map((encounterType) => {
				return (
					<EncounterTypeFilterButton
						encounterType={encounterType}
						handleChange={handleEncounterTypeChange}
					/>
				);
			})}
		</FormGroup>
	);
}
