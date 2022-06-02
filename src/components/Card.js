
import styled, {css} from 'styled-components';

export default  styled.div`
position: relative;
margin: 20px;
/* width: 100%; */
border: 30px solid transparent;
border-image: url("./images/wood-frame.svg") 30 / 1 / 0 stretch;
border-width: 30px;
background: rgba(237, 227, 209, 0.8);
padding: 30px;

@media (min-width: 760px) {
    ${props=>!props.fillParent && css `
        width: 50%;
    `}
    
}
${props=>props.w && css`
    width: ${props.w} !important;
`}
${props=>props.h && css`
    height: ${props.h} !important;
`}
${props=>props.p && css`
    padding: ${props.p}px !important;
`}
${props=>props.pt && css`
    padding-top: ${props.pt}px !important;
`}
${props=>props.pb && css`
    padding-bottom: ${props.pb}px !important;
`}
${props=>props.pl && css`
    padding-left: ${props.pl}px !important;
`}
${props=>props.pr && css`
    padding-right: ${props.pr}px !important;
`}

${props=>props.borderRed && css`
    border: 3px solid #b11d18;
`}

${props=>props.medium && css`
    @media (min-width: 760px) {
        width: 35%;
    }
`}

`