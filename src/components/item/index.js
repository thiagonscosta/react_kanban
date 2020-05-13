import React, { useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BoardItem, Avatar } from './styles';
import { MdEvent } from 'react-icons/md';

function Item(props) {
    return (
        <Draggable
            draggableId={props.item.id} 
            index={props.index}
        >
            {(provided, snapshot) => (
                <BoardItem
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <span>
                        <MdEvent size={14}/>
                        {props.item.date}
                    </span>
                    <p>{props.item.content}</p>
                    <Avatar>{props.item.user}</Avatar>
                </BoardItem>
            )}
        </Draggable>
    );
};

export default Item;