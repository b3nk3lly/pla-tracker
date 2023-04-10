import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ProgressType from "../../enums/ProgressType";

interface Props {
	pokemonId: Number;
	progressType: ProgressType;
}

function ProgressButton(props: Props) {
	const localStorageKey = `${props.pokemonId}-${props.progressType}`;

	let [clicked, setClicked] = useState(
		// check local storage for saved progress
		localStorage.getItem(localStorageKey) === "true"
	);

	let src;
	let alt;

	/**
	 * Toggles the "clicked" state of the button. Updates local storage and state.
	 */
	const handeClick = () => {
		let newClicked = !clicked;
		localStorage.setItem(localStorageKey, JSON.stringify(newClicked));
		setClicked(newClicked);
	};

	switch (props.progressType) {
		case ProgressType.REGULAR:
			src = "images/icons/pokeball.png";
			alt = "regular icon";
			break;
		case ProgressType.ALPHA:
			src = "images/icons/alpha.png";
			alt = "alpha icon";
			break;
		case ProgressType.SHINY:
			src = "images/icons/shiny.png";
			alt = "shiny icon";
			break;
		case ProgressType.PATH_OF_SOLUTIDUE:
			src = "images/icons/path_of_solitude.png";
			alt = "path of solitude icon";
			break;
		default:
			src = "";
			alt = "progress icon";
			break;
	}

	return (
		<IconButton onClick={handeClick}>
			<img
				src={src}
				alt={alt}
				style={{
					opacity: clicked ? 1.0 : 0.3
				}}
			></img>
		</IconButton>
	);
}

export default ProgressButton;
