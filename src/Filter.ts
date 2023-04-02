import EncounterType from "./EncounterType";
import Location from "./Location";
import Pokemon from "./Pokemon";

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

	/**
	 * Filters a list of Pokemon based on the locations and encounter types defined in this filter.
	 * @param pokemonList the list of Pokemon to be filtered
	 * @returns the filtered list
	 */
	public apply(pokemonList: Pokemon[]): Pokemon[] {
		return (pokemonList as Pokemon[]).filter((pokemon) => {
			return this.encounterTypes.some((encounterType) => {
				return this.locations.some((location) => {
					return pokemon.isFoundIn(location, encounterType);
				});
			});
		});
	}
}

export default Filter;
