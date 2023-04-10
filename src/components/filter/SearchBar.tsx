import React, { useState } from "react";
import { Input } from "@mui/material";

function SearchBar() {
	let [searchString, setSearchString] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchString(event.target.value);
	};

	return <Input value={searchString} onChange={handleChange} fullWidth />;
}

export default SearchBar;
