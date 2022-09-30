import React, { useState } from "react";

export default function AddNote({ handleAddNote }) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		if (200 - input.length >= 0) setInput(e.target.value.slice(0, 200));
	};

	const handleSaveClick = () => {
		if (input.trim().length > 0) {
			console.log(input);
			handleAddNote(input);
			setInput("");
		}
	};

	

	return (
		<div className="note new">
			<textarea
				cols="10"
				rows="5"
				placeholder="Type to add đi"
				value={input}
				onChange={handleChange}
			></textarea>
			<div className="note__footer">
				<small>{200 - input.length} Remaining</small>
				<button className="button" onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
}
