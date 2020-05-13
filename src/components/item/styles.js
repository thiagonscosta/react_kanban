import styled, { css } from 'styled-components'

export const BoardItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  margin: 14px;

  box-shadow: 0 1px 4px 0 rgba(209, 212, 225, 1);

  background-color: ${(props) => props.isDragging ? '#d3e4ee' : '#fff'};

  border-radius: 4px;
  transition: background-color .25s ease-out;

  span {
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 12px;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 15px 0;
  }

  
  /* &:hover {
    background-color: #f7fafc;
  } */

  /* & + & {
    margin-top: 4px;
  } */
`

export const Avatar = styled.div`
    background: #F4F7F9;
    padding: 4px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    border-radius: 50%;
`;
