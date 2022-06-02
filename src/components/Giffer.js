
import styled, {css} from 'styled-components';

export default styled.img`
width: 300px;    
margin-left: auto;
margin-right: auto;
${props=>props.medium && css`
    width: 200px !important;
    height: 200px !important;
`}
`