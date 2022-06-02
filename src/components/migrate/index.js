
import styled, {css} from 'styled-components';

export const marginTop = (props)=>props.mt && css`
    margin-top: ${props.mt}em;
`

export const marginBottom = (props)=>props.mb && css`
    margin-bottom: ${props.mb}em;
`

export const marginRight = (props)=>props.mr && css`
    margin-right: ${props.mr}em;
`

export const marginLeft = (props)=>props.ml && css`
    margin-left: ${props.ml}em;
`






