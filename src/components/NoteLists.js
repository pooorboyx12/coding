import React, { Component } from "react";
import Note from "./Note";

const NoteLists = ({ notes, handleDeleteNote }) => {
	return (
		<div className="notes">
			{notes.map(({ id, text, date }) => (
				<Note
					id={id}
					note={text}
					date={date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
		</div>
	);
};

export default NoteLists;
