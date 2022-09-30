import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ handleSearchNote }) {
	const [search, setSearch] = useState("");
	const handleSearch = (e) => {
		setSearch(e.target.value);
		handleSearchNote(search);
	};
	return (
		<div className="search">
			<MdSearch size="1em" className="button-search" />
			<input
				type="text"
				value={search}
				onChange={handleSearch}
				placeholder="Type to search"
				className="search-input"
			/>
		</div>
	);
}
