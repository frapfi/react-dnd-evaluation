import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DropBox extends Component {

	render() {
		return (
			<div className="col-sm-8" style={{
				height: '500px',
				border: '5px solid',
				width: '55%',
				marginRight: '50px'
			}}>
				DropBox
			</div>
		)
	}

}

export default DragDropContext(HTML5Backend)(DropBox);