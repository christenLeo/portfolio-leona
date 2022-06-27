import Link from 'next/link';
import React, { useState } from 'react';
import Buttons from './Buttons';
import { StyledHeader } from './style';

const Header = () => {
    const [sideBar, setSideBar] = useState(false);

    const showOrHideSideBar = () => setSideBar(!sideBar);

    return (
        <StyledHeader aria-label='Page header'>
            <div className='header_text' aria-label='Name and Title'>
                <h1>Leona Christen</h1>
                <h3>Personal portfolio</h3>
            </div>
            <nav className='header_buttons' aria-label='navigation menu'>
                <Buttons path={'/'} goTo={'home'} />
                <Buttons path={'/projects'} goTo={'projects'} />
                <Buttons path={'/contacts'} goTo={'contacts'} />

            </nav>
            {!sideBar ? <nav aria-label='menu hamburguer' className='header_hamb'>
                {/*menu hamburguer*/}
                    <button className='bars_container' onClick={showOrHideSideBar}>
                        <div className='hamb_bars'></div>
                        <div className='hamb_bars'></div>
                        <div className='hamb_bars'></div>
                    </button>
            </nav> : <nav className='side_menu' aria-label='navigation menu'>
                <button className='close_button' onClick={showOrHideSideBar}>X</button>
                <Buttons closeSideBar={showOrHideSideBar} path={'/'} goTo={'home'} />
                <Buttons closeSideBar={showOrHideSideBar} path={'/projects'} goTo={'projects'} />
                <Buttons closeSideBar={showOrHideSideBar} path={'/contacts'} goTo={'contacts'} />
            </nav>}        
        </StyledHeader>
    );
}

export default Header;