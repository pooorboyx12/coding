import React, { Component, useState } from "react";
import NoteLists from "./components/NoteLists";
import { nanoid } from "nanoid";
import AddNote from "./components/AddNote";
import Search from "./components/Search";

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "This is my first note!",
			date: "15/04/2021",
		},
		{
			id: nanoid(),
			text: "This is my second note!",
			date: "21/04/2021",
		},
		{
			id: nanoid(),
			text: "This is my third note!",
			date: "28/04/2021",
		},
		{
			id: nanoid(),
			text: "This is my new note!",
			date: "30/04/2021",
		},
	]);
	const [searchText, setSearchText] = useState("");

	const addNote = (text) => {
		// console.log({ text });
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const takeText = (text) => {
		setSearchText(text);
		console.log(text);
	};

	return (
		<div className="container">
			<Search handleSearchNote={takeText} />
			<NoteLists
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText)
				)}
				handleDeleteNote={deleteNote}
			/>
			<AddNote handleAddNote={addNote} />
		</div>
	);
};

export default App;
