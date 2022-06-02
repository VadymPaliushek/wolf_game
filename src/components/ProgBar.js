
import styled, { css } from 'styled-components';
import { marginTop, marginBottom, marginLeft, marginRight } from './migrate'
export default  styled.div`
    border: 6px black solid;
    width: 100%;
    height: 52px;
    position: relative;
    z-index: 1;
    ${props => marginTop(props)}
    ${props => marginLeft(props)}
    ${props => marginRight(props)}
    ${props => marginBottom(props)}
    ::before{
        content: "";
        background-color: #b11d18;
        position: absolute;
        top: 0;
        left: 0;
        height: 40px;
        z-index: -1;
        ${props => props.value && css`
            width: ${props.value <= 100 ? props.value : 100}%;
        `}        
    }
`



