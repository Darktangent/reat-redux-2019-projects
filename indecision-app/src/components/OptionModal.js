import React from 'react';
import Modal from 'react-modal';
export default function OptionModal(props) {
	return (
		<Modal
			isOpen={!!props.selectedOption}
			contentLabel='Selected Option'
			onRequestClose={props.clearSelectedOption}>
			<h3>Selected Option</h3>
			{props.selectedOption && <p>{props.selectedOption}</p>}
			<button onClick={props.clearSelectedOption}>Okay</button>
		</Modal>
	);
}
