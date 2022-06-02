

import styled, {css} from 'styled-components';

export default  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 40px 0;

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`
