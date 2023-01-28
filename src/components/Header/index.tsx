import moon from '../../../public/moon.svg'
import Image from 'next/image'
import {
    Name,
    Navbar,
    Navlinks,
    Item
} from '../Header/styles-header';

type HeaderProps = {
    handleLightDarkMode: any;   
    lightDark: boolean;
}

export function Header({ handleLightDarkMode, lightDark }: HeaderProps) {

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