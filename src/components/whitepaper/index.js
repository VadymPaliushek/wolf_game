import styled, {css} from 'styled-components';

export const PaperParagraph = styled.p`
    font-family:  Courier;
    font-weight: bold;    
    line-height: 1.5em;
    color: rgb(36, 211, 54);
    ${props=>props.bolder && css`
        font-size: 1.3em;
        font-weight: bolder;
    `}
`

export const PaperContainer = styled.div`
    width: 60%;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
`

export const UnderlineSpan = styled.span`
    font-family:  Courier;
    font-weight: bolder;
    text-decoration: underline;
    margin-top: 6px;
    margin-bottom: 6px;
    color: rgb(36, 211, 54);
    font-size: 1.1em;
`
export const Underline = styled.div`
    font-family:  Courier;
    font-weight: bolder;
    text-decoration: underline;
    margin-top: 6px;
    margin-bottom: 6px;
    color: rgb(36, 211, 54);
    font-size: 1.4em;
    ${props=>props.uppercase && css`
        text-transform: uppercase;
    `}
    ${props=>props.color && css`
        color: ${props.color} !important;
    `}
    ${props=>props.fontFamily && css`
        font-family: ${props.fontFamily} !important;
    `}
    ${props=>props.center && css`
        text-align: center;
    `}

`


export const MintingGif = styled.img`
    width: 100px;
    height: 100px;
    margin: 20px;
    ${props=>props.borderFrame && css`
        border: 10px solid transparent;
        border-image: url("./images/wood-frame.svg") 10 / 1 / 0 stretch;
        border-width: 10px;
    `}
`
export const MintingTable = styled.table`
    width: 100%;
    text-align: left;
    border: 3px solid #24d336;
    border-collapse: collapse;
    
`

export const MTTh = styled.th`
    padding: 6px;
    font-size: 1em;
    color: #24d336;
    font-family:  Courier;
`
export const MTTd = styled.td`
    padding: 6px;
    font-size: 1em;
    color: #24d336;
    font-family:  Courier;
`
