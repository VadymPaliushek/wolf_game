import { React } from 'react';
import MainLayout from '../components/main-layout';

import SectionContainer from '../components/SectionContainer';
import MainTitle from '../components/MainTitle';
import SubHeader from '../components/SubHeader';
import Paragragh from '../components/Paragragh';
import Card from '../components/Card';
import CardBG from '../components/CardBG';
import GifWrapper from '../components/GifWrapper';
import Giffer from '../components/Giffer';



const IndexPage = ({ menu }) => {

    return (
        <MainLayout menu={menu}>
            <MainTitle>WOLF GAME</MainTitle>
            <SectionContainer>
                <Card>
                    <CardBG />
                    <GifWrapper>
                        <Giffer src={'./images/migration.gif'} />
                    </GifWrapper>
                    <SubHeader  variant='h2'>
                        Frineds,
                    </SubHeader>
                    <Paragragh>
                        Today begins the Great Rescue of 13,809 Sheep and Wolves.

                        Next week come precious WOOL Pouches, tied to ownership of Sheep and Wolves.

                        The game has much in store for you. May the best players prosper.

                        - The Shepherd
                    </Paragragh>
                </Card>
            </SectionContainer>

            <SectionContainer>
                <Card medium>
                    <CardBG />
                    <Paragragh color='black'>
                        NFTs you already migrated
                    </Paragragh>
                    <SubHeader variant='h1'>
                        Legacy NFTs
                    </SubHeader>

                    <Paragragh color='black'>
                        You have not migrated your NFTs yet
                    </Paragragh>
                </Card>
                <Card medium>
                    <CardBG />
                    <Paragragh color='black'>
                        NFTs you already migrated
                    </Paragragh>
                    <SubHeader variant='h1'>
                        Migrated NFTs
                    </SubHeader>

                    <Paragragh color='black'>
                        You have not migrated your NFTs yet
                    </Paragragh>
                </Card>

            </SectionContainer>

        </MainLayout>

    )
}

export default IndexPage;
