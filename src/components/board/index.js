import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import { initialBoardData } from '../../data/initial-data';
import { BoardContainer } from './styles';
import Column from '../column/index';

class Board extends Component {
    state = initialBoardData;
    
    onDragEnd = (result) => {
        const {
            source,
            destination,
            draggableId
        } = result;

        if(!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        console.log(destination)
        const columnStart = (this.state.columns)[source.droppableId];
        const columnFinish = (this.state.columns)[destination.droppableId];

        if(columnStart === columnFinish) {
            const newItemsIds = Array.from(columnStart.itemsIds);
            newItemsIds.splice(source.index, 1);
            newItemsIds.splice(destination.index, 0, draggableId);

            const newColumnStart = {
                ...columnStart,
                itemsIds: newItemsIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumnStart.id]: newColumnStart
                }
            }

            this.setState(newState);
        } else {
            const newStartItemsIds = Array.from(columnStart.itemsIds);

            newStartItemsIds.splice(source.index, 1);

            const newColumnStart = {
                ...columnStart,
                itemsIds: newStartItemsIds
            }

            const newFinishItemsIds = Array.from(columnFinish.itemsIds);

            newFinishItemsIds.splice(destination.index, 0, draggableId);

            const newColumnFinish = {
                ...columnFinish,
                itemsIds: newFinishItemsIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumnStart.id]: newColumnStart,
                    [newColumnFinish.id]: newColumnFinish
                }
            }

            this.setState(newState);
        }       
    }

    render () {
        return (
            <BoardContainer>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    {this.state.columnsOrder.map(columnId => {
                        const column = this.state.columns[columnId]
                        const items = column.itemsIds.map(itemId => (this.state.items)[itemId])
                        const size = items.lenght;

                        return <Column key={column.id} column={column} items={items} size={size}/>
                    })}
                </DragDropContext> 
            </BoardContainer>
        );
    }
    
};

export default Board;