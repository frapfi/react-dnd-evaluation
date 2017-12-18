# DragZone

1. Identify top level component and
    - wrap the root component of your application
        - with *DragDropContext* as HTML backend
        - **export default DragDropContext(HTML5Backend)(App);**
2. Create a type constant for the draggable item
    - **"ItemTypes.js"**
3. Wrap your component in a higher order component with *DragSource* to make it draggable:
    - **export default DragSource(type, spec, collect)(MyComponent);**
    - three required parameters
        - type
            - "ItemTypes.js"
        - spec
            - *Drag source specification* object with several specification methods
            - **beginDrag(props, monitor, component)**: Required
                - When the dragging starts, beginDrag is called. You must return a plain
                JavaScript object describing the data being dragged.
                What you return is the only information available to the drop targets
                about the drag source so it's important to pick the minimal data they
                need to know
        - collect
            - *Collecting function*
                - connects the React DnD event handlers to some node in the component
                - pass some knowledge about the dragging state to our component

                Note: ll communication between the React components happens via props,
                so it makes sense that React DnD injects special props into your component.
                However it gives you the freedom to name them and decide what props your
                component will receive.

                Your collecting function will be called by React DnD with a connector
                that lets you connect nodes to the DnD backend, and a monitor to query
                information about the drag state. It should return a plain object of
                props to inject into your component

                - Parameters
                    - connect:
                    - monitor:
                - **collect(connect, monitor) {
                  	return {
                  		connectDragSource: connect.dragSource(),
                  		isDragging: monitor.isDragging()
                  	};**
4. Fetch defined props from "collect" function
    - **const { connectDragSource, isDragging } = this.props;**
5. Wrap returned element of the render function in connectDragSource function
    - **return connectDragSource( ...  )**


# Drop Zone

import { DropTarget } from 'react-dnd';

export default DropTarget(ItemTypes.LITTlE_BOX, boxTarget, collect)(DropBox);