import Location from "./enums/Location";
import EncounterType from "./enums/EncounterType";

interface IEncounter {
	location: Location;
	type: EncounterType;
}

export default IEncounter;
