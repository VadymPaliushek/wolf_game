import { React } from 'react';
import MainLayout from '../components/main-layout';

import MainTitle from '../components/MainTitle';
import CardBG from '../components/CardBG';
import Card from '../components/Card';
import SectionContainer from '../components/SectionContainer';
import Paragragh from '../components/Paragragh';
import BorderdDiv from '../components/BorderdDiv';



const WoolPouchesPage = ({ menu }) => {

    return (
        <MainLayout menu={menu}>

            <MainTitle>
                WOOL Pouches
            </MainTitle>
            <SectionContainer>
                <Card>
                    <CardBG />
                    <BorderdDiv>
                        <Paragragh >
                            WOOL Pouches
                        </Paragragh>
                        <Paragragh fontSize={'0.8em'}>
                            no nfts
                        </Paragragh>
                    </BorderdDiv>
                    <Paragragh center mt={2}>
                        Select a WOOL Pouch to claim from
                    </Paragragh>
                </Card>
            </SectionContainer>

        </MainLayout>

    )
}

export default WoolPouchesPage;
