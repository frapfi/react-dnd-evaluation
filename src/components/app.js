import React, { Component } from 'react';
import DropBox from './DropBox';
import DraggableZone from './DraggableZone';
import LittleBox from './LittleBox';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
	render() {
		return (
			<div className="row" >
				<DropBox />
				<DraggableZone>
					<LittleBox color="orange" />
				</DraggableZone>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);