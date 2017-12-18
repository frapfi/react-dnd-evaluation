import React, { Component } from 'react';

import { ItemTypes } from './ItemTypes';
import { DragSource } from 'react-dnd';

/**
 * Generate 'unique box id'
 * @returns {number}
 */
function generateItemId () {
	return Math.floor(Math.random() * 1000)
}

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
//DRAG SOURCE SPECIFICATION
//object with one required and few optional methods
//describes how the drag source reacts to the drag and drop events
const boxSource = {
	//required; when dragging starts
	beginDrag(props) {
		return {
			color: props.color,
		}
	},

	endDrag(props, monitor) {
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()

		if (dropResult) {
			//alert(`You dropped ${item.color} into ${dropResult.name}!`) // eslint-disable-line no-alert
		}
	}


};

/**
 * Specifies which props to inject into your component.
 */
//COLLECTING FUNCTION
//should return a plain object of the props to inject into your component
//receives receives connect and monitor parameter
//In the component's render method, we are then able to access both
//the data obtained from the monitor, and the function obtained from the connector
function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
		itemColor: monitor.getItem(),
	};
}

class LittleBox extends Component {
	render() {
		//fetch defined props from "collect" function
		const { itemColor, connectDragSource, isDragging } = this.props;
		const { color } = this.props;

		const bBStyle = {
			width: '75px',
			height: '75px',
			backgroundColor: color,
			opacity: isDragging ? 0.5 : 1
		};

		//Displays ItemId
		console.log(itemColor);

		//wrap return element in connectDragSource function
		return connectDragSource(<div className="col-sm-6" style={bBStyle} />);
	}
}

//The DragSource higher-order component accepts three parameters:
//type, spec, and collect
export default DragSource(ItemTypes.LITTlE_BOX, boxSource, collect)(LittleBox);
