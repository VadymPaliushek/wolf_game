
import styled, {css} from 'styled-components';
import { marginTop, marginBottom, marginLeft, marginRight } from './migrate';

export default  styled.h1`

    font-family: 'broken-console';
    text-transform: uppercase;
    color:#b11d18;

    ${props=>marginTop(props)}
    ${props=>marginBottom(props)}
    ${props=>marginLeft(props)}
    ${props=>marginRight(props)}

    ${props=>props.variant == 'h1' && css`
        font-size: 3em;
    `}
    ${props=>props.variant == 'h2' && css`
        font-size: 2em;
    `}
    ${props=>props.variant == 'h3' && css`
        font-size: 1.5em;
    `}
    ${props=>props.variant == 'h4' && css`
        font-size: 1.3em;
    `}
    ${props=>props.variant == 'h5' && css`
        font-size: 1.1em;
    `}

    ${props=>props.center && css`
        text-align: center;
    `}

`;