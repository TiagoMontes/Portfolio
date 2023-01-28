import styled from 'styled-components';

type Condition = {
    isLight: boolean;
}

export const Main = styled.div<Condition>`
    padding-top: 90px;
    color: white;

    background-color: ${props =>
        props.isLight
            ?
            `rgba(255, 255, 255, 0.650)`
            :
            `black`
    };
    color: ${props =>
        props.isLight
            ?
        `#232323`
            :
        `#fff`
    }
`;