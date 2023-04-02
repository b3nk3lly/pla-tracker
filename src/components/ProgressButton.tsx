import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ProgressType from "../enums/ProgressType";

function ProgressButton({ progressType }: { progressType: ProgressType }) {
	let [clicked, setClicked] = useState(false);

	let src;
	let alt;

	switch (progressType) {
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
		<IconButton
			onClick={(e) => setClicked(!clicked)}
			style={{
				opacity: clicked ? 1.0 : 0.3
			}}
		>
			<img src={src} alt={alt}></img>
		</IconButton>
	);
}

export default ProgressButton;
