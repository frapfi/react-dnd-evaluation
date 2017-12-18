import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import DraggedBox from './LittleBox';

const boxTarget = {
	drop(props, monitor, component) {
		const item = monitor.getItem();
		console.log(item, 'Item of dropped box');

		component.setState({ item: item });

		return { name: 'DropBox' };
	}
};

function renderBox() {}

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
}

class DropBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item: {}
		};
	}

	renderBox() {
		const color = this.state.item.color;

		return <DraggedBox color={color} />;
	}

	render() {
		const { connectDropTarget, isOver, canDrop } = this.props;
		const isActive = canDrop && isOver;

		let backgroundColor = 'white';

		if (isActive) {
			backgroundColor = 'darkgreen';
		} else if (canDrop) {
			backgroundColor = 'darkkhaki';
		}

		return connectDropTarget(
			<div
				className="col-sm-8"
				style={{
					backgroundColor: backgroundColor,
					height: '120px',
					border: '5px solid',
					width: '30%',
					marginRight: '50px'
				}}
			>
				{isActive ? 'Release to drop' : 'Drag a box here:'}
				<div>{this.renderBox()}</div>
			</div>
		);
	}
}

export default DropTarget(ItemTypes.LITTlE_BOX, boxTarget, collect)(DropBox);
