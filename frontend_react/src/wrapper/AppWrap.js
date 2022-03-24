import React from 'react'
import { NavigationDots, SocialMedia, Logo } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <Logo className="copyright__logoSVG"/>
                    <p className="p-text">© {new Date().getFullYear()} Zayn Ejaz</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap;