import React, { Component } from 'react';
import DropBox from './DropBox';
import DraggableZone from './DraggableZone';

import LittleDragBox from './LittleDragBox';

export default class App extends Component {
	render() {
		return (
			<div className="row">
				<DropBox />
				<DraggableZone>
					<LittleDragBox color="black" />
					<LittleDragBox color="grey" />
					<LittleDragBox color="orange" />
					<LittleDragBox color="blue" />
				</DraggableZone>
			</div>
		);
	}
}
