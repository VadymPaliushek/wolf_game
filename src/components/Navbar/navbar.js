import styled, { css } from "styled-components";
import MainWrapper from "../main-wrapper";

const NavContainer = styled.div`
    background: #655041;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
`

const LogoTitle = styled.span`
    font-size: 30px;
    font-family: "pixel-craft";
    color: transparent;
    background: linear-gradient(180deg,#b11d18 65%,#862227 65% 100%);
    background-clip: text;
    margin-right: 50px;
    -webkit-background-clip: text;
    filter: drop-shadow(5px 5px 0 #000000);
`

const MenuItem = styled.a`
    font-weight: 500;
    color: white;
    font-family: 'broken-console';
    text-transform: uppercase;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;    
    height: 30px;
    text-decoration: none;  

    ${props => props.actived && css`
        border-bottom: 2px solid white;
    `}    

`


export const Menus = {
    Game: {
        label: 'game',
        link: '/game'
    },
    Migrate: {
        label: 'migrate',
        link: '/migrate'
    },
    RiskyGame: {
        label: 'risky game',
        link: '/risky_game'
    },
    WoolPouches: {
        label: 'wool pouches',
        link: '/wool_pouches'
    },
    Land: {
        label: 'land',
        link: '/land'
    },
    WhitePaper: {
        label: 'white paper',
        link: '/whitepaper'
    },
    WhitePaper2: {
        label: 'whitepaper v2',
        link: '/whitepaper2'
    }
}



const Navbar = ({ menu }) => {


    return (
        <NavContainer>
            <MainWrapper>
                <MenuContainer>
                    <LogoTitle>WOLF GAME</LogoTitle>
                    <MenuItem href={Menus.Game.link} actived={menu == Menus.Game.label}>{Menus.Game.label}</MenuItem>
                    <MenuItem href={Menus.Migrate.link} actived={menu == Menus.Migrate.label}>{Menus.Migrate.label}</MenuItem>
                    <MenuItem href={Menus.RiskyGame.link} actived={menu == Menus.RiskyGame.label}>{Menus.RiskyGame.label}</MenuItem>
                    <MenuItem href={Menus.WoolPouches.link} actived={menu == Menus.WoolPouches.label}> {Menus.WoolPouches.label}</MenuItem>
                    <MenuItem href={Menus.Land.link} actived={menu == Menus.Land.label}>{Menus.Land.label}</MenuItem>
                    <MenuItem href={Menus.WhitePaper.link} actived={menu == Menus.WhitePaper.label}>{Menus.WhitePaper.label}</MenuItem>
                    <MenuItem href={Menus.WhitePaper2.link} actived={menu == Menus.WhitePaper2.label}>{Menus.WhitePaper2.label}</MenuItem>
                </MenuContainer>
            </MainWrapper>
        </NavContainer>
    )
}

export default Navbar;