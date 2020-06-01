import styled, { css } from 'styled-components';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';
import { Exit } from '@styled-icons/icomoon';

export const SideMenu = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  background: #d3e4ee;

  box-shadow: 0 1px 4px 0 rgba(209, 212, 225, 1);

  position: relative;

  ${props => props.isExpanded && css`
    width: 250px;
    transition: all 1s ease
  `}

  ${props => props.isExpanded === false && css`
    width: 80px;
    transition: all 1s ease
  `}
`
export const ButtonExpand = styled.button`
  border: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  background: #f0f0f0;
  font-weight: bold;

  position: absolute;
  top: 45%;
  right: -15px;
`
export const ArrowIcon = styled(ArrowIosForwardOutline)`
  ${props => props.isExpanded && css`
    transform: rotate(180deg);
    transition: all 1s ease;
  `}

   ${props => props.isExpanded === false && css`
    transform: rotate(0);
    transition: all 1s ease;
  `}
`
export const Account = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85%;
  height: 40px;
  margin-bottom: 20px;
 
  border: .5px solid #A5B9D2;
  border-radius: 5px;
    
  img {
    width: auto;
    height: 100%;
    border-radius: 5px;
    margin-right: 5px;

    border-right: .5px solid #A5B9D2;
  }

  span {
    font-size: 12px;

    ${props => props.isExpanded && css`
      font-size: 12px;
      opacity: 1;
      transition: all 1s ease;
    `}

    ${props => props.isExpanded === false && css`
      font-size: 0;
      opacity: 0;
      transition: all 1s ease;
    `}
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    margin-right: 4px;
    border: 0;
  }

 
`
export const ExitIcon = styled(Exit)``;