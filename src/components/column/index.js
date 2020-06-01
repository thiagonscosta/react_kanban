import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import {
    ColumnWrapper,
    ColumnTitle,
    ColumnContent,
} from './styles';

import Item from '../item';

function Column(props) {

    return (
      <ColumnWrapper>
        <ColumnTitle>
          <h3>{props.column.title}</h3>
          <span>{props.items.length}</span>
        </ColumnTitle>

        <Droppable droppableId={props.column.id}>
          {(provided, snapshot) => (
            <ColumnContent
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {props.items.map((item, index) => (
                <Item key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </ColumnContent>
          )}
        </Droppable>
      </ColumnWrapper>
    );
};

export default Column;