import EncounterType from "./EncounterType";
import Location from "./Location";

class Filter {
	locations: Location[];
	encounterTypes: EncounterType[];

	constructor() {
		this.locations = [
			Location.OBSIDIAN_FIELDLANDS,
			Location.CRIMSON_MIRELANDS,
			Location.COBALT_COASTLANDS,
			Location.CORONET_HIGHLANDS,
			Location.ALABASTER_ICELANDS
		];

		this.encounterTypes = [
			EncounterType.OVERWORLD,
			EncounterType.MASS_OUTBREAK,
			EncounterType.MASSIVE_MASS_OUTBREAK,
			EncounterType.SPACETIME_DISTORTION
		];
	}
}

export default Filter;
