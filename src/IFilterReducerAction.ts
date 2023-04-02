import EncounterType from "./EncounterType";
import FilterReducerActionType from "./FilterReducerActionType";
import Location from "./Location";

interface IFilterReducerAction {
	type: FilterReducerActionType;
	payload: Location | EncounterType;
}

export default IFilterReducerAction;
