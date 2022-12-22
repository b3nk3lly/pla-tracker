import IEncounter from "./IEncounter";

class Pokemon {
	id: number;
	name: string;
	number: number;
	form: string;
	gender: string;
	isDefaultForm: boolean;
	isDefaultGender: boolean;
	canBeAlpha: boolean;
	canBeShiny: boolean;
	encounters: IEncounter[];

	constructor(
		id: number,
		name: string,
		number: number,
		form: string,
		gender: string,
		isDefaultForm: boolean,
		isDefaultGender: boolean,
		canBeAlpha: boolean,
		canBeShiny: boolean,
		encounters: IEncounter[]
	) {
		this.id = id;
		this.name = name;
		this.number = number;
		this.form = form;
		this.gender = gender;
		this.isDefaultForm = isDefaultForm;
		this.isDefaultGender = isDefaultGender;
		this.canBeAlpha = canBeAlpha;
		this.canBeShiny = canBeShiny;
		this.encounters = encounters;
	}

	public static fromJSON(json: Object): Pokemon {
		let pokemon = Object.create(Pokemon.prototype);
		return Object.assign(pokemon, json);
	}
}

export default Pokemon;
