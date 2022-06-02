
import MainWrapper from "./main-wrapper";
import Navbar, { Menus } from "./Navbar/navbar";
import PaperBG from "./PaperBG";
import LayoutContainer from "./LayoutContainer";

const MainLayout = (props) => {

    return (
        <LayoutContainer {...props}>
            {
                (props.menu == Menus.WhitePaper.label || props.menu == Menus.WhitePaper2.label) ? (
                    <PaperBG>
                        <Navbar menu={props.menu} />
                        <MainWrapper>
                            {props.children}
                        </MainWrapper>
                    </PaperBG>
                ) : (<>
                    <Navbar menu={props.menu} />
                    <MainWrapper>
                        {props.children}
                    </MainWrapper>
                </>
                )
            }


        </LayoutContainer>
    )
}

export default MainLayout;