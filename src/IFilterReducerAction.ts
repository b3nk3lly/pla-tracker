import EncounterType from "./enums/EncounterType";
import FilterReducerActionType from "./enums/FilterReducerActionType";
import Location from "./enums/Location";

interface IFilterReducerAction {
	type: FilterReducerActionType;
	payload: Location | EncounterType;
}

export default IFilterReducerAction;
