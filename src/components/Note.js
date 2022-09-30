import React, { Component } from "react";
import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, note, date, handleDeleteNote }) => {
	const handleDelete = () => {
		handleDeleteNote(id);
	};
	return (
		<div>
			<div className="note">
				<span>{note}</span>
				<div className="note__footer">
					<small>{date}</small>
					<MdDeleteForever onClick={handleDelete} className="button-del" />
				</div>
			</div>
		</div>
	);
};
export default Note;
