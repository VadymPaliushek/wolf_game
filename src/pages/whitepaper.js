import { React } from 'react';
import MainLayout from '../components/main-layout';
import SubHeader  from '../components/SubHeader';

import {
    PaperParagraph,
    Underline,
    MintingGif,
    MintingTable,
    MTTd,
    MTTh,
    PaperContainer
} from '../components/whitepaper';

import Row from '../components/Row';

const WhitePaperPage = ({ menu }) => {

    return (
        <MainLayout menu={menu}>
            <PaperContainer>
                <SubHeader variant="h1">
                    Wolf Game
                </SubHeader>
                <PaperParagraph>
                    On a quaint farm in the metaverse, a flock of Sheep congregate and produce a healthy supply of $WOOL. They huddle together in a Barn and are sheared regularly by their owners to farm the $WOOL. With more $WOOL, the farmers can purchase more Sheep! But outside lurk dangers the Sheep are terrified of… The Wolves.

                    The Wolves are on the hunt for Sheep and their precious $WOOL. They’ll take it by any means necessary. They’ll kidnap Sheep or catch them unaware and steal all of their $WOOL. So the farmers struck a deal with the Wolves: they pay the Wolves a tax on all $WOOL production. In return, the Wolves don’t attack Sheep who are safe in the Barn.

                    But when a Sheep leaves the farm or new Sheep are born… The Wolves don’t hold back.

                </PaperParagraph>
                <PaperParagraph>
                    ---------------
                </PaperParagraph>
                <PaperParagraph>
                    Wolf Game is a risk protocol for NFTs with novel tokenomics. It shows what’s possible with interactions between the ERC-20 and ERC-721 protocols.For the very first time, your NFT can steal other NFTs (ERC-721 tokens) for you. The rarer your NFT, the more tokens you'll accumulate probabilistically. Wolf Game is pioneering new types of NFT mechanics. Fully decentralized. No roadmaps or empty promises. Just a game in the metaverse that’s ready to play at launch.
                </PaperParagraph>

                <PaperParagraph>
                    <Underline>The tl;dr:</Underline>
                    - There will only ever be 10,000 Gen 0, minted for 0.069420 ETH each. The 40,000 Gen 1 are minted by farming $WOOL
                    - Sheep can be staked in the Barn to earn $WOOL and pay a tax anytime they claim their $WOOL earnings
                    - If a Sheep is unstaked from the Barn, the Wolves try to steal all of its accumulated $WOOL
                    - When a new Sheep is born, the Wolves attempt to kidnap it. If they’re successful, it’s given to a randomly selected Wolf, instead of the owner who minted it
                </PaperParagraph>

                <SubHeader variant="h2" center>
                    Contract Addresses
                </SubHeader>
                <PaperParagraph>
                    - Sheep / Wolf NFT: 0xEB834ae72B30866af20a6ce5440Fa598BfAd3a42<br />
                    - Barn / Gang Staking: 0x29205f257F9E3B78bcb27e253D0f3Fad9D7522a2<br />
                    - $WOOL Token: 0x8355dbe8b0e275abad27eb843f3eaf3fc855e525<br />
                </PaperParagraph>
                <Row>
                    <MintingGif src="/images/minting.gif" />
                    <SubHeader variant="h2" center>
                        Minting
                    </SubHeader>
                    <MintingGif src="/images/minting.gif" />
                </Row>

                <MintingTable frame="void" rules="all">
                    <tr>
                        <MTTh>Token ID</MTTh>
                        <MTTh>Minting Cost</MTTh>
                    </tr>
                    <tr>
                        <MTTd>1 to 10,000 (Gen 0)</MTTd>
                        <MTTd>0.069420 ETH</MTTd>
                    </tr>
                    <tr>
                        <MTTd>10,001 to 20,000</MTTd>
                        <MTTd>20,000 $WOOL</MTTd>
                    </tr>
                    <tr>
                        <MTTd>20,001 to 40,000</MTTd>
                        <MTTd>40,000 $WOOL</MTTd>
                    </tr>
                    <tr>
                        <MTTd>40,001 to 50,000</MTTd>
                        <MTTd>80,000 $WOOL</MTTd>
                    </tr>

                </MintingTable>
                <PaperParagraph>
                    The total cost to mint all of the Sheep and Wolves in existence will be 1,800,000,000 $WOOL.
                </PaperParagraph>
                <Row>
                    <MintingGif src="/images/unstaking-barn.gif" />
                    <SubHeader variant="h2" center>
                        Sheep
                    </SubHeader>
                    <MintingGif src="/images/staked-barn.gif" />
                </Row>
                <PaperParagraph>
                    You have a 90% chance of minting a Sheep, each with unique traits. Here are the actions they can take:
                </PaperParagraph>
                <MintingTable frame="void" rules="all">
                    <tr>
                        <MTTh>Action</MTTh>
                        <MTTh>Notes</MTTh>
                        <MTTh>Risk</MTTh>
                    </tr>
                    <tr>
                        <MTTd>Enter Barn (Stake)</MTTd>
                        <MTTd>Accumulate 10,000 $WOOL / day (prorated to the second)</MTTd>
                        <MTTd>No risk.</MTTd>
                    </tr>
                    <tr>
                        <MTTd>Shear $WOOL (Claim)</MTTd>
                        <MTTd>Receive 80% of $WOOL accumulated on your Sheep</MTTd>
                        <MTTd>Wolves take a guaranteed 20% tax on sheared $WOOL in return for not attacking the Barn. Taxed $WOOL is split among all the Wolves currently staked in the Barn, proportional to their Alpha scores.</MTTd>
                    </tr>
                    <tr>
                        <MTTd>Leave Barn (Unstake)</MTTd>
                        <MTTd>Sheep is removed from the Barn and all $WOOL is shorn. <span class="underline"> Can only be done if the Sheep has accumulated 2 days worth of $WOOL to keep it warm.</span></MTTd>
                        <MTTd>50% chance of ALL of your accumulated $WOOL being stolen by Wolves. Stolen $WOOL is split among all the Wolves currently staked in the Barn, proportional to their Alpha scores.</MTTd>
                    </tr>

                </MintingTable>
                <Row>
                    <MintingGif src="/images/shearing.gif" />
                    <SubHeader variant="h2" center>
                        $WOOL
                    </SubHeader>
                    <MintingGif src="/images/claiming-pack.gif" />
                </Row>
                <PaperParagraph>
                    The maximum $WOOL supply is 5,000,000,000 $WOOL:
                </PaperParagraph>
                <PaperParagraph>
                    When supply reaches 2,400,000,000 $WOOL earned for staking, the staking “faucet” turns off.
                    The developers will receive 600,000,000 $WOOL
                    Community Rewards will be allocated 2,000,000,000 $WOOL
                </PaperParagraph>

                <MintingTable frame="void" rules="all">
                    <tr>
                        <MTTh>Action</MTTh>
                        <MTTh>Notes</MTTh>
                        <MTTh>Risk</MTTh>
                    </tr>
                    <tr>
                        <MTTd>Mint a new Sheep using $WOOL</MTTd>
                        <MTTd>There is a 10% chance that the NFT is actually a Wolf!</MTTd>
                        <MTTd>10% chance of the new Sheep or Wolf being stolen by a staked Wolf. Each Wolf’s chance of success is proportional to their Alpha scores.</MTTd>
                    </tr>
                </MintingTable>

                <Row>
                    <MintingGif src="/images/staking-pack.gif" />
                    <SubHeader variant="h2" center>
                        Wolves
                    </SubHeader>
                    <MintingGif src="/images/unstaked-pack.gif" />
                </Row>
                <PaperParagraph>
                    You have a 10% chance of minting a Wolf, each with unique traits, including an Alpha value ranging from 5 to 8. The higher the Alpha value:
                    <br />- The higher the portion of $WOOL that the Wolf earns from taxes
                    <br />- The higher chance of stealing a newly minted Sheep or Wolf
                </PaperParagraph>
                <PaperParagraph>
                    <Underline>Example:</Underline>
                    Wolf A has an Alpha of 8 and Wolf B has an Alpha of 6, and they are staked.
                    <br />- If 70,000 $WOOL total have been accumulated as taxes, Wolf A will be able to claim 40,000 $WOOL and Wolf B will be able to claim 30,000 $WOOL
                    <br />- If a newly minted Sheep or Wolf is stolen, Wolf A has a 57% chance of receiving it and Wolf B has a 43% chance of receiving it
                    <Underline>Only staked Wolves are able to steal a sheep or earn the $WOOL tax.</Underline>
                </PaperParagraph>

                <MintingTable frame="void" rules="all">
                    <tr>
                        <MTTh>Action</MTTh>
                        <MTTh>Notes</MTTh>
                        <MTTh>Risk</MTTh>
                    </tr>
                    <tr>
                        <MTTd>Stake Wolf</MTTd>
                        <MTTd>Earn your share of the 20% tax of all $WOOL generated by Sheep in the Barn</MTTd>
                        <MTTd>No risk.</MTTd>
                    </tr>
                    <tr>
                        <MTTd>Claim $WOOL</MTTd>
                        <MTTd>Receive all $WOOL taxes accrued for the staked Wolf</MTTd>
                        <MTTd>No risk.</MTTd>
                    </tr>
                    <tr>
                        <MTTd>Unstake Wolf</MTTd>
                        <MTTd>Receive all $WOOL taxes accrued for the staked Wolf</MTTd>
                        <MTTd>No risk.</MTTd>
                    </tr>
                </MintingTable>

                <Row>
                    <MintingGif src="/images/sheared.gif" />
                    <SubHeader variant="h2" center>
                        Why this tech is novel
                    </SubHeader>
                    <MintingGif src="/images/sheared_right.gif" />
                </Row>

                <PaperParagraph>
                    Protocol-level risk is ripe for exploration in NFTs. Many projects are implementing stake-to-earn, but haven’t cracked the code on users making choices in the face of risk.
                </PaperParagraph>
                <PaperParagraph>
                    In the case of Wolf Game’s Wolf-eat-Sheep world, your NFT can steal ERC-20 and ERC-721 tokens for you. This is entirely new.
                </PaperParagraph>
                <PaperParagraph>
                    Everything in Wolf Game happens on-chain: the decisioning, the results, the generation of the NFTs themselves. It’s split between 4 different smart contracts so that anyone can read through and get a sense of how it all talks to each other.
                </PaperParagraph>
                <PaperParagraph>
                    There are a number of techniques in these contracts that make this all possible while maintaining accuracy, keeping gas costs down, and not exceeding the EVM contract size limit.
                </PaperParagraph>
                <Underline>
                    Data Packing:
                </Underline>
                <PaperParagraph>
                    Storage is expensive on the blockchain! One 256 bit integer costs 20,000 gas to save, which at today’s costs is about $7.50… for one number! Efficiently packing data types by designing around smaller max values can save users hundreds of thousands of dollars over the lifetime of the project
                </PaperParagraph>

                <Underline>
                    Constant Time Algorithms & DeFi Math:
                </Underline>
                <PaperParagraph>
                    A lot of contracts use architectures that require significant looping to accomplish tasks. Those make contracts inefficient and add to gas costs. It’s imperative to remove things like the need to search through arrays or loop through stakes. This means you can do things like unlimited simultaneous stakes while keeping things cheaper.
                </PaperParagraph>
                <PaperParagraph>
                    As an example, the minting contract uses AJ Walker’s Alias Method to efficiently select traits in constant time.
                </PaperParagraph>
                <PaperParagraph>
                    Another example: tracking Wolf $WOOL earnings (taxes) proved to be very complex, requiring math used by DeFi liquidity pool protocols.
                </PaperParagraph>

                <Underline>
                    100% On-chain:
                </Underline>
                <PaperParagraph>
                    Not the first, and certainly not the last. But as long as Ethereum is running, your Sheep and Wolves will survive. Always available and always yours. Your traits and all the pixel art reside in the contracts themselves, nowhere else.
                </PaperParagraph>

                <Underline>
                    UI at launch:
                </Underline>
                <PaperParagraph>
                    You can use the entirety of Wolf Game by directly interacting with the blockchain (like through Etherscan). But Wolf Game is launching with a custom UI to make it easy for people to enjoy the game on day 1.
                </PaperParagraph>
                <Row>
                    <MintingGif src="/images/mint-stolen.gif" />
                    <SubHeader variant="h2" center>
                        In conclusion...
                    </SubHeader>
                    <MintingGif src="/images/mint-stolen.gif" />
                </Row>

                <PaperParagraph>
                    With Wolf Game, everyone can play with their own level of risk… Pay the tax? Stay liquid on the market? Take a chance to keep all your $WOOL, but have a chance to lose it all? The choices and this game have to be engaging.
                </PaperParagraph>

                <PaperParagraph>
                    Wolves preying on Sheep feels almost like a parallel to the NFT community itself: A select few with alpha among all of us, and many others following the pack.
                </PaperParagraph>

            </PaperContainer>
        </MainLayout>

    )
}

export default WhitePaperPage;
