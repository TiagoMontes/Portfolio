import styled from 'styled-components';
import Link from "next/link";
import Image from 'next/image';

type Condition = {
    isLight: boolean;
}
// colors
// $color-primary: #747474;
// $color-secundary: #232323;

// // background Color
// $background-light: #fff;


export const Navbar = styled.nav<Condition>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 16px;
    font-style: normal;

    padding: 20px 170px;
    min-width: 100%;
    top: 0;

    margin-bottom: 300px;

    background-color: ${props =>
        props.isLight
            ?
            `rgba(255, 255, 255, 0.650)`
            :
            `black`
    };
    position: fixed;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(9px);
    border: 1px solid rgba(255, 255, 255, 0.18);
`;


export const Name = styled.h3<Condition>`
    display: flex;
    font-weight: 500;

    color: ${props =>
        props.isLight
            ?
            `#232323`
            :
            `#fff`
        }
`;

export const Navlinks = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;


    gap: 32px;
    list-style: none;
    font-weight: 500;
`;

export const Item = styled(Link)<Condition>`
    text-decoration: none;
    color: #747474;

    color: ${props =>
        props.isLight
            ?
            `#747474`
            :
            `#fff`
    };
    

    span:hover{
        color: ${props =>
            props.isLight
            ?
            `#000`
            :
            `grey`
        }
    }
`;

// @include mobile(){
//     .navLinks{
//         a{
//             color: #000;
//         }
        
//     }
// }