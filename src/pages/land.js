import { React } from 'react';
import MainLayout from '../components/main-layout';

import MainTitle from '../components/MainTitle';
import { MintingGif } from '../components/whitepaper';

import Row from '../components/Row';
import BackWrapper from '../components/BackWrapper';
import ProgBar from '../components/ProgBar';
import CardBG from '../components/CardBG';
import Card from '../components/Card';
import GifWrapper from '../components/GifWrapper';
import SectionContainer from '../components/SectionContainer';
import SubHeader from '../components/SubHeader';
import Paragragh from '../components/Paragragh';
import Giffer from '../components/Giffer';
import BorderdDiv from '../components/BorderdDiv';

const LandPage = ({ menu }) => {

    return (
        <MainLayout menu={menu}>
            <BackWrapper>
            </BackWrapper>
            <MainTitle>
                WOLF GAME
            </MainTitle>
            <SectionContainer>
                <Card >
                    <CardBG />

                    <GifWrapper>
                        <Giffer src={'./images/shepherd.gif'} medium />
                    </GifWrapper>

                    <SubHeader variant='h2'>
                        Friends,
                    </SubHeader>
                    <Paragragh mt={2}>
                        I introduce you to the new Wolf Game, a full-feature blockchain economy to be released in 2022.
                    </Paragragh>

                    <Paragragh>
                        Today, you may:
                    </Paragragh>
                    <Paragragh>
                        1. Begin your quest toward farm dominance by sacrificing WOOL to gain a Farmer
                    </Paragragh>
                    <Paragragh>
                        2. Lay claim to one of only 20,000 genesis Land parcels in the game
                    </Paragragh>

                    <SubHeader variant='h4'>
                        - The Shepherd
                    </SubHeader>
                </Card>
            </SectionContainer>

            <Row>
                <Card borderRed>
                    <CardBG />
                    <Row justifyContentStart>
                        <MintingGif src={'./images/land.gif'} medium borderFrame />
                        <div>
                            <SubHeader variant='h2'>
                                Land.
                            </SubHeader>
                            <SubHeader mt={2} variant='h4'>
                                Build your domain. Prosper off the land.
                            </SubHeader>
                        </div>
                    </Row>
                    <Paragragh mt={1}>
                        A finite resource, only 20,000 genesis land plots will ever exist. Each is unique, with varying acreage, and capabilities that can be multiplied with Farmers. Cultivate assets in your quest for economic dominance.
                    </Paragragh>
                </Card>
                <Card borderRed>
                    <CardBG />
                    <Row justifyContentStart>
                        <MintingGif src={'./images/wolves.gif'} medium borderFrame />
                        <div>
                            <SubHeader variant='h2'>
                                Wolves.
                            </SubHeader>
                            <SubHeader mt={2} variant='h4'>
                                Steal, thieve, kidnap. A world that’s yours for the taking.
                            </SubHeader>
                        </div>
                    </Row>
                    <Paragragh mt={1}>
                        The most aggressive actors in Wolf Game, Wolves show no mercy. They’ll capture Sheep and the most precious resources from farmers, and they’re good at it, too. Breed them to expand your personal wolfpack.
                    </Paragragh>
                </Card>
            </Row>

            <Row>
                <Card borderRed>
                    <CardBG />
                    <Row justifyContentStart>
                        <MintingGif src={'./images/sheep.gif'} medium borderFrame />
                        <div>
                            <SubHeader variant='h2'>
                                Sheep.
                            </SubHeader>
                            <SubHeader mt={2} variant='h4'>
                                Produce precious WOOL. Breed your flock.
                            </SubHeader>
                        </div>
                    </Row>
                    <Paragragh mt={1}>
                        As an owner of nature’s source of precious WOOL, you shall watch over your Sheep closely. Breed them to increase your production of WOOL and governance of the ecosystem.
                    </Paragragh>
                </Card>
                <Card borderRed>
                    <CardBG />
                    <Row justifyContentStart>
                        <MintingGif src={'./images/wool.gif'} medium borderFrame />
                        <div>
                            <SubHeader variant='h2'>
                                $WOOL.
                            </SubHeader>
                            <SubHeader mt={2} variant='h4'>
                                Govern. Breed. Cultivate.
                            </SubHeader>
                        </div>
                    </Row>
                    <Paragragh mt={1}>
                        The utility and governance token of Wolf Game, WOOL is the ecosystem’s precious resource. Use it to map the future of the game, breed your animals, and cultivate other resources.
                    </Paragragh>
                </Card>
            </Row>

            <SectionContainer>
                <Card >
                    <CardBG />
                    <Row>
                        <SubHeader variant='h2'>
                            Land Sale
                        </SubHeader>

                        <Paragragh mt={2} borderRed bonus>
                            <SubHeader variant='h4'>
                                Bonus
                            </SubHeader>
                            <Paragragh>
                                5000 $WOOL Starter Bundle at launch for minters only
                            </Paragragh>
                            <SubHeader variant='h4'>
                                --Per Plot--
                            </SubHeader>
                        </Paragragh>
                    </Row>

                    <SubHeader mt={2} center variant="h4">
                        One of only 20,000 genesis parcels
                    </SubHeader>

                    <Paragragh color="black" center>
                        Redeemable for one randomized parcel of land upon full launch of Wolf Game
                    </Paragragh>
                    <ProgBar value={80} mt={2}>
                        <Paragragh color="black" center>
                            10000 / 10000 Deeds Minted
                        </Paragragh>
                    </ProgBar>
                    <SubHeader variant='h3' center mt={1}>
                        Sold out!
                    </SubHeader>
                </Card>
                <Card >
                    <CardBG />

                    <SubHeader variant='h2' center>
                        Claim Land
                    </SubHeader>

                    <SubHeader mt={2} center variant="h4">
                        A free parcel for any Gen 0 owner
                    </SubHeader>

                    <Paragragh color="black" center>
                        Redeemable for one random parcel of land upon full launch of Wolf Game
                    </Paragragh>
                    <ProgBar value={80} mt={2}>
                        <Paragragh color="black" center>
                            9900+ Deeds Claimed
                        </Paragragh>
                    </ProgBar>
                    <BorderdDiv mt={2}>
                        <Paragragh >
                            CLAIMABLE NFTs (GEN 0)
                        </Paragragh>
                        <Paragragh fontSize={'0.8em'}>
                            no nfts
                        </Paragragh>
                    </BorderdDiv>

                    <SubHeader variant='h5' center mt={2}>
                        Select which NFTs to claim land for
                    </SubHeader>
                </Card>
            </SectionContainer>

            <SectionContainer>
                <Card >
                    <CardBG />

                    <SubHeader variant='h2' center>
                        Farmer Wool Burn
                    </SubHeader>

                    <SubHeader mt={2} center variant="h4">
                        Multiply the capabilities of your land in your quest for economic dominance.
                    </SubHeader>

                    <Paragragh color="black" center>
                        Redeemable for one random farmer upon full launch of Wolf Game
                    </Paragragh>
                    <ProgBar value={80} mt={2}>
                        <Paragragh color="black" center>
                            11738 / 20000 Farmers
                        </Paragragh>
                    </ProgBar>
                    <Paragragh color="black" center>
                        Minting has ended.
                    </Paragragh>
                </Card>
            </SectionContainer>

        </MainLayout>

    )
}

export default LandPage;
