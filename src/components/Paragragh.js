import styled, { css } from 'styled-components';
import { marginTop, marginBottom, marginRight, marginLeft } from './migrate';


export default styled.p`
font-family: 'broken-console';
text-transform: uppercase;
color:#b11d18;
margin:0.5em;
margin-block-start: 0.8em;
margin-block-end: 0.4em;

${props => marginTop(props)}
${props => marginBottom(props)}
${props => marginLeft(props)}
${props => marginRight(props)}

${props => props.borderRed && css`
    border: 3px solid #b11d18;
`}

${props => props.bonus && css`
    border: 8px solid #b11d18;
    max-width: 150px;
    padding: 10px;
    margin-left: 20px;
`}


${props => props.w && css`
    width: ${props.w};
`}
${props => props.color && css`
    color: ${props.color};
`}
${props => props.center && css`
    text-align: center;
`}
${props => props.fontSize && css`
    font-size: ${props.fontSize};        
`}

${props => props.mt && css`
    margin-top: ${props.mt}em;        
`}
${props => props.mb && css`
    margin-bottom: ${props.mb}em;
`}
${props => props.ml && css`
    margin-left: ${props.ml}em;      
`}
${props => props.mr && css`
    margin-right: ${props.mr}em;      
`}

`