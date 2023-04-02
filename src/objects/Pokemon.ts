import EncounterType from "../enums/EncounterType";
import IEncounter from "../interfaces/IEncounter";
import Location from "../enums/Location";

class Pokemon {
	id: number;
	name: string;
	number: number;
	form: string;
	gender: string;
	canBeAlpha: boolean;
	canBeShiny: boolean;
	encounters: IEncounter[];

	constructor(
		id: number,
		name: string,
		number: number,
		form: string,
		gender: string,
		canBeAlpha: boolean,
		canBeShiny: boolean,
		encounters: IEncounter[]
	) {
		this.id = id;
		this.name = name;
		this.number = number;
		this.form = form;
		this.gender = gender;
		this.canBeAlpha = canBeAlpha;
		this.canBeShiny = canBeShiny;
		this.encounters = encounters;
	}

	public isFoundIn(
		location: Location,
		encounterType: EncounterType
	): boolean {
		return (
			this.isFoundInLocation(location) &&
			this.isFoundInEncounterType(encounterType)
		);
	}

	public isFoundInLocation(location: Location): boolean {
		return this.encounters.some((encounter) => {
			return encounter.location === location;
		});
	}

	public isFoundInEncounterType(encounterType: EncounterType): boolean {
		return this.encounters.some((encounter) => {
			return encounter.type === encounterType;
		});
	}

	public isDefaultForm(): boolean {
		return ["", "A", "Hisuian", "Altered", "Incarnate", "Land"].includes(
			this.form
		);
	}

	public isDefaultGender(): boolean {
		return this.gender !== "Female";
	}

	public static fromJSON(json: Object): Pokemon {
		let pokemon = Object.create(Pokemon.prototype);
		return Object.assign(pokemon, json);
	}
}

export default Pokemon;
