import moon from '../../../public/moon.svg'
import Image from 'next/image'
import {
    Name,
    Navbar,
    Navlinks,
    Item
} from '../Header/styles-header';
import { useState } from 'react';

export function Header() {
    
    const [lightDark, setLightDark] = useState(true);

    function handleLightDarkMode() {
        if (lightDark) {
            console.log('escuro');
            setLightDark(false);
        } else {
            console.log('claro');
            setLightDark(true);
        }
    }


    return (
        <>
            <Navbar isLight={lightDark}>
                <Name isLight={lightDark}>Tiago</Name>
                <Navlinks>
                    <li>
                        <Item isLight={lightDark} href='/'>
                            <span>
                                Home
                            </span>
                        </Item>
                    </li>
                    <li>
                        <Item isLight={lightDark} href='/'>
                            <span>
                                About
                            </span>
                        </Item>
                    </li>
                    <li>
                        <Item isLight={lightDark} href='/'>
                            <span>
                                Skills
                            </span>
                        </Item>
                    </li>
                    <li>
                        <Item isLight={lightDark} href='/'>
                            <span>
                                Services
                            </span>
                        </Item>
                    </li>
                    <li>
                        <Item isLight={lightDark} href='/'>
                            <span>
                                Contact
                            </span>
                        </Item>
                    </li>
                    <li onClick={handleLightDarkMode}>
                        <Image src={moon} alt='Lua'/>
                    </li>
                </Navlinks>
            </Navbar>
        </>
    )
}