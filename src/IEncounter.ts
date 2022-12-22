import Location from "./Location";
import EncounterType from "./EncounterType";

interface IEncounter {
	location: Location;
	types: EncounterType[];
}

export default IEncounter;
