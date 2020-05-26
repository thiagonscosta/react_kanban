import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import {
    ColumnWrapper,
    ColumnTitle,
    ColumnContent,
    ButtonAddItem,
    CloseButton
} from './styles';

import { MdControlPoint } from 'react-icons/md';
import { MdClear } from 'react-icons/md';
// import Modal from '../modal';
import Modal from "react-modal";
import Item from '../item';

const customStyles = {
  content: {
    width: "40%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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