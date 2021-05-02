import styled from 'styled-components';
import mapMarker from '../../../../assets/imgs/map-marker.svg'

export const Tooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 80px;
  height: 50px;
  border-radius: 10px;
  margin-top: -70px;
  margin-left: -17px;
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.41);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.41);
  box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.41);

  &:after {
    content: "";
    position: absolute;
    left: 24%;
    bottom: 83%;
    margin-left: -5px;
    border-width: 15px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
  }
`;

export const TooltipText = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  background-image: url(${mapMarker});
  background-repeat: no-repeat;
  width: 55px;
  height: 55px;
`;
