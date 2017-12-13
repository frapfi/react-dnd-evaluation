import React, { Component } from 'react';
import DropBox from './DropBox';
import DraggableZone from './DraggableZone';

export default class App extends Component {
  render() {
    return (
      <div className="row">
		  <DropBox/>
		  <DraggableZone/>
	  </div>
    );
  }
}
