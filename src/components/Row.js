import styled, {css} from 'styled-components';


export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${props=>props.justifyContentStart && css`
        justify-content: flex-start;   
    `}
    ${props=>props.w && css`
        width: ${props.w};        
    `}
    ${props=>props.mt && css`
        margin-top: ${props.mt}em;        
    `}
    ${props=>props.mb && css`
        margin-bottom: ${props.mb}em;
    `}
    ${props=>props.ml && css`
        margin-left: ${props.ml}em;      
    `}
    ${props=>props.mr && css`
        margin-right: ${props.mr}em;      
    `}

`