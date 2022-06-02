import { React } from 'react';
import MainLayout from '../components/main-layout';

import { Underline,  } from '../components/whitepaper';
import MainTitle from '../components/MainTitle';
import CardBG from '../components/CardBG';
import Card from '../components/Card';
import GifWrapper from '../components/GifWrapper';
import SectionContainer from '../components/SectionContainer';
import SubHeader from '../components/SubHeader';
import Paragragh from '../components/Paragragh';
import Giffer from '../components/Giffer';
import BorderdDiv from '../components/BorderdDiv';
import Row from '../components/Row';

const RiskyGamePage = ({ menu }) => {
    return (
        <MainLayout menu={menu}>
            <MainTitle>
                Risky Game
            </MainTitle>

            <SectionContainer>
                <Card>
                    <CardBG />
                    <SubHeader variant='h2' center>
                        The choice is yours.
                        Claim your wool or try your luck with the wolves.
                    </SubHeader>
                    <Underline
                        uppercase
                        color='black'
                        center
                        fontFamily='broken-console'
                    >
                        terms of service
                    </Underline>
                </Card>
            </SectionContainer>

            <SectionContainer>
                <Card medium>
                    <CardBG />
                    <SubHeader variant='h2' center>
                        No Risk
                    </SubHeader>
                    <GifWrapper>
                        <Giffer src={'./images/sheep-safegame-static.gif'} medium />
                    </GifWrapper>
                    <Paragragh color='black' center mt={2}>
                        Play it safe. You're guaranteed to get your WOOL in a WOOL Pouch, but you'll pay the Wolves a 20% tax.
                    </Paragragh>
                    <BorderdDiv>
                        <Paragragh >
                            Available to claim
                        </Paragragh>
                        <Paragragh fontSize={'0.8em'}>
                            no nfts
                        </Paragragh>
                    </BorderdDiv>
                    <Paragragh center mt={2}>
                        Select NFTs to play it safe
                    </Paragragh>
                    <Paragragh color='black' center mt={2}>
                        Any Sheep that have already played will no longer show up in Risky Game
                    </Paragragh>
                </Card>
                <Card medium>
                    <CardBG />
                    <SubHeader variant='h2' center>
                        Yes Risk
                    </SubHeader>
                    <GifWrapper>
                        <Giffer src={'./images/choose-yes-risk-static.gif'} medium />
                    </GifWrapper>

                    <Row mt={0.5}>
                        <div>
                            <Paragragh variant='h4' center>
                                Sheep committed
                            </Paragragh>
                            <Paragragh color='black' center>
                                7,760
                            </Paragragh>
                        </div>
                        <div style={{ marginLeft: 30 }}>
                            <Paragragh variant='h4' center>
                                Prize Pool
                            </Paragragh>
                            <Paragragh color='black' center>
                                1,879,510,788 $WOOL
                            </Paragragh>
                        </div>
                    </Row>
                    <BorderdDiv>
                        <Paragragh >
                            playable
                        </Paragragh>
                        <Paragragh fontSize={'0.8em'}>
                            no nfts
                        </Paragragh>
                    </BorderdDiv>
                </Card>

            </SectionContainer>

            <SectionContainer>
                <Card>
                    <CardBG />
                    <SubHeader variant='h2' center>
                        Wolves
                    </SubHeader>
                    <GifWrapper>
                        <Giffer src={'./images/wolf-static-page.gif'} medium />
                    </GifWrapper>
                    <Paragragh center color="black" w={'100%'}>
                        Wolves will be able to claim $WOOL pouches after the risk opt-in period ends
                    </Paragragh>
                    <BorderdDiv>
                        <Paragragh >
                            Available to claim
                        </Paragragh>
                        <Paragragh fontSize={'0.8em'}>
                            no nfts
                        </Paragragh>
                    </BorderdDiv>
                    <Paragragh center mt={3}>
                        Select NFTs to claim
                    </Paragragh>
                </Card>
            </SectionContainer>


        </MainLayout>
    )
}

export default RiskyGamePage;
