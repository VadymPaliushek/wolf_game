import { React } from 'react';
import MainLayout from '../components/main-layout';
import SubHeader from '../components/SubHeader';
import Row from '../components/Row';

import {
    PaperParagraph,
    Underline,
    MintingGif,
    MintingTable,
    MTTd,
    MTTh,
    PaperContainer,
    UnderlineSpan
} from '../components/whitepaper';

const WhitePaper2Page = ({ menu }) => {

    return (
        <MainLayout menu={menu}>
            <PaperContainer>
                <SubHeader variant="h1">
                    Wolf Game - Whitepaper v2
                </SubHeader>
                <PaperParagraph>
                    Wolf Game is evolving. Welcome to Whitepaper v2, which outlines recent updates. The Shepherd thanks you for your commitment to the game.

                </PaperParagraph>
                <PaperParagraph>
                    For details of the original Wolf Game,<UnderlineSpan>follow this link.</UnderlineSpan>
                </PaperParagraph>


                <Row>
                    <MintingGif src="/images/migration-(1).gif" />
                    <SubHeader variant="h2" center>
                        Migration
                    </SubHeader>
                    <MintingGif src="/images/migration-(1).gif" />
                </Row>
                <PaperParagraph>
                    Following an Ethereum smart contract vulnerability, we will migrate to a new smart contract to keep the game safe and maintain its integrity.
                </PaperParagraph>
                <PaperParagraph>
                    The migration will create for you an exact copy of your legacy NFT, with the same traits and metadata. It will also lock your legacy NFT containing the vulnerability. All developers we spoke with agreed that it is the safest option to retrieve your NFTs.
                </PaperParagraph>
                <PaperParagraph>
                    Holders of Sheep and Wolves will be able to migrate their NFTs through the Wolf Game website by connecting their MetaMask wallet.
                </PaperParagraph>

                <PaperParagraph bolder>
                    Target Date for the Migration: Saturday, November 27
                </PaperParagraph>
                <PaperParagraph>
                    On the website, you will simply claim your NFT from the new, official collection. If your legacy NFT is currently staked: it will burn with the barn. If it is in your wallet: it will burn when you claim.
                </PaperParagraph>
                <PaperParagraph>
                    When the migration begins, the core part of Phase 1 (shearing, staking, and unstaking) will come to a close. The Shepherd is turning his eyes to building the future of the game.
                </PaperParagraph>
                <PaperParagraph>
                    Days after the migration, you will be able to claim your WOOL, which will be inside of a WOOL Pouch (see below). Claiming your WOOL pouch NFT is tied to ownership of a Sheep or Wolf. You must hold the Sheep or Wolf to claim its WOOL Pouch.
                </PaperParagraph>

                <Row>
                    <MintingGif src="/images/shearing.gif" />
                    <SubHeader variant="h2" center>
                        Gen 0 and Gen 1 Sheep & Wolves
                    </SubHeader>
                    <MintingGif src="/images/claiming-pack.gif" />
                </Row>
                <PaperParagraph>
                    Wolf Game originally called for 10,000 Gen 0 Sheep & Wolves minted with ETH, and 40,000 Gen 1 Sheep & Wolves minted with WOOL.
                </PaperParagraph>
                <PaperParagraph>
                    Because of the vulnerability, The Shepherd paused minting and decided that there would only ever be 10,000 Gen 0 and 3,809 Gen 1. The supply of Gen 0 and Gen 1 Sheep & Wolves is locked forever, and they are 4x rarer than expected.
                </PaperParagraph>
                <PaperParagraph>
                    Gen 0 and Gen 1 Sheep & Wolves will be a core part of the full-feature game coming in 2022, with unique capabilities and tokenomics. This may relate to (and may go beyond):
                </PaperParagraph>
                <PaperParagraph>
                    <br />- breeding
                    <br />- resource accumulation
                    <br />- stealing other players’ resources
                </PaperParagraph>

                <Row>
                    <MintingGif src="/images/wool-pouch.gif" />
                    <SubHeader variant="h2" center>
                        WOOL Pouches
                    </SubHeader>
                    <MintingGif src="/images/wool-pouch.gif" />
                </Row>
                <PaperParagraph>
                    The Shepherd had intended to bring 40,000 Gen 1 Sheep & Wolves onto the farm, which would have required burning 1.8 billion WOOL. With only 3,809 minted, this left a large oversupply of an extra 1.7 billion WOOL that would have been immediately available.
                </PaperParagraph>
                <PaperParagraph>
                    He chose to leverage sensible tokenomics to maintain the game's integrity, protect all Sheep & Wolves, and keep WOOL safe.
                </PaperParagraph>
                <PaperParagraph>
                    WOOL Pouches are his invention to solve this: they are ERC-20 tokens that are stored within tradable NFTs.
                </PaperParagraph>
                <PaperParagraph>
                    All Gen 0 and Gen 1 Sheep & Wolves, whether staked or unstaked, are eligible to receive a WOOL Pouch.
                </PaperParagraph>
                <Underline>
                    Here is how they work:
                </Underline>
                <PaperParagraph>
                    1. Every WOOL Pouch starts with a finite WOOL supply.
                    <br />2. The first 10,000 WOOL are immediately accessible to the minter. This gives everyone a chance to burn 10,000 WOOL in exchange for a Farmer.
                    <br />3. The remaining WOOL in the Pouch unlocks at a constant rate over 4 years.
                    <br />4. During the 4 year period, you may claim any WOOL that has been unlocked, or trade your Pouch including the WOOL inside at anytime.
                </PaperParagraph>
                <PaperParagraph>
                    Every WOOL Pouch starts with a finite WOOL supply. Read “Risky Game” below to find out how much yours will include.
                </PaperParagraph>

                <Row>
                    <MintingGif src="/images/wool-pouch.gif" />
                    <SubHeader variant="h2" center>
                        Risky Game
                    </SubHeader>
                    <MintingGif src="/images/wool-pouch.gif" />
                </Row>
                <PaperParagraph>
                    As a Sheep aiming to leave the Barn, you are confronted by the Wolfpack. They present you with two options in a game they play for fun and WOOL, called Risky Game.
                </PaperParagraph>
                <PaperParagraph>
                    Your choices and luck in Risky Game will determine how much WOOL your WOOL Pouch will include inside.
                </PaperParagraph>
                <PaperParagraph>
                    The choice you must make is simple: No Risk or Yes Risk.
                </PaperParagraph>

                <Underline>
                    No Risk
                </Underline>
                <PaperParagraph bolder>
                    The rest of the flock may mock you, but you know exactly how much WOOL you will receive.
                </PaperParagraph>
                <PaperParagraph>
                    The amount in your WOOL Pouch will be guaranteed.
                </PaperParagraph>
                <PaperParagraph>
                    If you were staked at the time the contract was paused, it is the amount you it is the amount you accumulated in the Barn up until the migration began.
                    If you were unstaked, it is 10,000 WOOL per day from the time the contract was paused up until the migration opened.
                </PaperParagraph>
                <PaperParagraph>
                    Nothing in life is free, and this guarantee comes with a price. In this option, Wolves will receive a 20% tax.
                </PaperParagraph>

                <Underline>
                    Yes Risk
                </Underline>

                <PaperParagraph bolder>
                    You may walk away empty-handed, but you leave with your pride.
                </PaperParagraph>
                <PaperParagraph>
                    In this option, you have a 50% chance of walking away with a WOOL Pouch, and a 50% chance of the Wolves taking it all: this WOOL Pouch is guaranteed to be larger than the WOOL Pouch you would receive in the No Risk option.
                </PaperParagraph>
                <PaperParagraph>
                    Here is how to calculate the amount in each WOOL Pouch received by winning Sheep:
                </PaperParagraph>
                <PaperParagraph>
                    The total amount of WOOL allocated to the Yes Risk option is the amount leftover of the 2.4 billion WOOL originally allocated to the staking faucet and not used in the No Risk option. More specifically, it is: 2.4 billion, minus the 230 million claimed previously, minus the amount in Pouches obtained by Sheep & Wolves in the No Risk option.
                </PaperParagraph>
                <PaperParagraph>
                    The amount in each WOOL Pouch of the Yes Risk option, if you are a winning Sheep, will be: the total WOOL in the Yes Risk option divided evenly by the total number of Sheep taking part in Yes Risk.
                </PaperParagraph>
                <PaperParagraph>
                    In the Yes Risky option, Wolves will receive all WOOL that is not won by Sheep.
                </PaperParagraph>

                <Underline>
                    Outcome Table
                </Underline>

                <MintingTable frame="void" rules="all">
                    <tr>
                        <MTTh>Player</MTTh>
                        <MTTh>Staked before Pause</MTTh>
                        <MTTh>Not Staked before Pause</MTTh>
                    </tr>
                    <tr>
                        <MTTd>Not Risky Sheep</MTTd>
                        <MTTd>All your $WOOL earnings before the pause + all $WOOL earnings after the pause - 20% tax</MTTd>
                        <MTTd>All your possible $WOOL earnings if you had staked since the pause began - 20% tax</MTTd>
                    </tr>
                    <tr>
                        <MTTd>Risky Sheep</MTTd>
                        <MTTd colspan="2">50/50 chance of winning your proportional share of all the remaining 2.4 billion $WOOL</MTTd>
                    </tr>
                    <tr>
                        <MTTd>Wolves</MTTd>
                        <MTTd colspan="2">Your share (based on alpha score) of 20% taxes from Not Risky and lost $WOOL from Risky Sheep</MTTd>
                    </tr>
                </MintingTable>

                <Row>
                    <MintingGif src="/images/shepherd-background.gif" />
                    <SubHeader variant="h2" center>
                        Shepherd Lockup Period
                    </SubHeader>
                    <MintingGif src="/images/shepherd-background.gif" />
                </Row>
                <PaperParagraph>
                    The Shepherd has committed to having his 600M WOOL unlock over 4 years. His WOOL Pouch will work exactly the same way as others’ Pouches.
                </PaperParagraph>
                <PaperParagraph>
                    He is your long-term guide to the game.
                </PaperParagraph>

                <Row>
                    <MintingGif src="/images/land.gif" />
                    <SubHeader variant="h2" center>
                        Land
                    </SubHeader>
                    <MintingGif src="/images/land.gif" />
                </Row>
                <PaperParagraph>
                    The most productive, fertile lands in all of Wolf Game are the Genesis parcels. The Shepherd has cultivated these lands for centuries.
                </PaperParagraph>
                <PaperParagraph>
                    A finite resource, only 20,000 Genesis land parcels will ever exist in Wolf Game. Each is uniquely abundant and randomly assigned, with varying acreage, resources, and capabilities.
                </PaperParagraph>
                <PaperParagraph>
                    Land metadata will be randomized and released before the full game release in 2022.
                </PaperParagraph>

                <Row>
                    <MintingGif src="/images/farmer.gif" />
                    <SubHeader variant="h2" center>
                        Farmers
                    </SubHeader>
                    <MintingGif src="/images/farmer.gif" />
                </Row>
                <PaperParagraph>
                    Farmers assist you in managing your land more efficiently. You will be able to harvest more resources and get further faster with the help of farmers. Every farmer has a unique set of skills which match some plots of land better than others.
                </PaperParagraph>
                <PaperParagraph>
                    Farmers are not required to own and operate your land, but they are beneficial for optimal gameplay.
                </PaperParagraph>
                <PaperParagraph>
                    Farmer metadata will be randomized and released before the full game release in 2022.
                </PaperParagraph>


            </PaperContainer>
        </MainLayout>

    )
}

export default WhitePaper2Page;


