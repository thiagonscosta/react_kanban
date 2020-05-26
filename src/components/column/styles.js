import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  flex: 1;
  justify-content: center;
  /* padding: 8px; */
  height: 100%;
  flex: 0 0 290px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  & + & {
    margin-left: 12px;
  }

  /* & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  } */
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
  min-height: 60px;
`
