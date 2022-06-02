import styled, {css} from 'styled-components';
import { marginTop, marginBottom, marginLeft, marginRight } from './migrate';

export default  styled.div`
    border-bottom: 4px solid black;
    border-left:  4px solid black;
    padding: 4px;

    ${props=>marginTop(props)}
    ${props=>marginBottom(props)}
    ${props=>marginLeft(props)}
    ${props=>marginRight(props)}
`
