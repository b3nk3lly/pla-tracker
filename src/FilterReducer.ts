import EncounterType from "./EncounterType";
import Filter from "./Filter";
import FilterReducerActionType from "./FilterReducerActionType";
import IFilterReducerAction from "./IFilterReducerAction";
import Location from "./Location";

const filterReducer = (
	filter: Filter,
	action: IFilterReducerAction
): Filter => {
	switch (action.type) {
		case FilterReducerActionType.ADD_LOCATION:
			filter.locations.push(action.payload as Location);
			break;

		case FilterReducerActionType.REMOVE_LOCATION:
			filter.locations = filter.locations.filter(
				(location) => location !== (action.payload as Location)
			);
			break;

		case FilterReducerActionType.ADD_ENCOUNTER_TYPE:
			filter.encounterTypes.push(action.payload as EncounterType);
			break;

		case FilterReducerActionType.REMOVE_ENCOUNTER_TYPE:
			filter.encounterTypes = filter.encounterTypes.filter(
				(encounterType) =>
					encounterType !== (action.payload as EncounterType)
			);
			break;

		default:
		// do nothing
	}

	/*
	  Here we make a clone of the Filter so components will re-render.
	  Need to specify the "apply" function as it's not copied over automatically.
	*/
	return { ...filter, apply: filter.apply };
};

export default filterReducer;
