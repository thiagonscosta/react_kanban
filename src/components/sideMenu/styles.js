import styled, { css } from 'styled-components';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';

export const SideMenu = styled.div`
  height: 100%;
  display: flex;
  background: #d3e4ee;

  box-shadow: 0 1px 4px 0 rgba(209, 212, 225, 1);

  position: relative;

  ${props => props.isExpanded && css`
    width: 250px;
    transition: all 1s ease
  `}

  ${props => props.isExpanded === false && css`
    width: 60px;
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
  top: 40%;
  right: -15px;
`
export const ArrowIcon = styled(ArrowIosForwardOutline)`
  ${props => props.isExpanded && css`
    transform: rotate(180deg);
    transition: all 1s ease;
  `}
`

export const Account = styled.div`
  align-self: flex-end;
  margin-left: 10px;
  bottom: 20px;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 10%;
  }
`