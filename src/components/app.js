import React, { Component } from 'react';
import DropBox from './DropBox';
import DraggableZone from './DraggableZone';
import LittleBlackBox from './LittleBlackBox';
import LittleGreyBox from './LittleGreyBox';


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

//toDo
/*
<DraggableZone>
	<BlackBox color="black">
	<GreyBox color= "white">
<DraggableZone/>
*/