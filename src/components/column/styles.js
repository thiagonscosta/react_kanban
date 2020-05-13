import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  flex: 1;
  justify-content: center;
  padding: 8px;
  height: 100%;
  /* background-color: #e5eff5; */
  /* border-radius: 4px; */

  & + & {
    margin-left: 12px;
  }

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`

export const ColumnTitle = styled.div`
  font-family: sans-serif;
  margin: 12px 14px;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 6px;
    font-size: 14px;
    color: #565557;
  }
`

export const ColumnContent = styled.div`
  min-height: 20px;
  /* background-color: ${props => props.isDraggingOver ? '#aecde0' : null}; */
  border-radius: 4px;
`

export const ButtonAddItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0;
  width: 90%;
  height: 40px;
  border-radius: 4px;
  margin: 0 14px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  border: 0;
  border-radius: 50%;
  padding: 5px;
  float: right;
`
