import React from 'react';
import styled from 'styled-components';
import MainLayout from '../components/main-layout';

import { Menus } from '../components/Navbar/navbar';

import MainTitle from '../components/MainTitle';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import CardBG from '../components/CardBG';
import SubHeader from '../components/SubHeader';
import Paragragh from '../components/Paragragh';
import Row from '../components/Row';
import ProgBar from '../components/ProgBar';
import { useContract } from '../context/ContractContext';
import { useCustomWallet } from '../context/CustomWalletContext';

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Checkbox,
    HStack,
    FormLabel,
    FormControl,
    Flex,
    Box,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    Spinner
} from '@chakra-ui/react'
import BigNumber from 'bignumber.js';

export const TokenImg = ({ tokenId, obj, selected, onClick }) => {

    return <img
        src={obj.image}
        width={'50px'}
        style={{
            display: 'inline',
            border: selected ? '2px solid black' : '0px',
            margin: '5px',
            cursor: 'pointer'
        }}
        onClick={() => {
            if (onClick) {
                onClick(tokenId)
            }
        }}
    />
}

export const WhitePaperLink = styled.a`
    font-family: 'broken-console';
    text-transform: uppercase;
    color: #b11d18;    
    @media (max-width: 760px) {
        
    }
`;

export const ImgPubDomain = styled.img`
    width: 180px;
`

const GamePage = ({ menu }) => {

    const {
        DAILY_WOOL_RATE,
        getBarnAddressOfWoolf,
        totalSheepStaked,
        maxTokens,
        mintedCount,
        totalWoolEarned,
        totalWoolfStaked,
        mintedSheeps,
        stolenSheeps,
        stolenWoolfs,
        paused,
        MintPrice,
        mintToken,
        paidTokens,
        isInitBarnLoading,
        isInitWoolfLoading,
        loadBasicData,
        balance,
        myTokenByIndex,
        myBalanceOfToken,
        getNrOfStakedTokenIds,
        getStakedTokenIdOfOwner,
        barnCont,
        woolfCont,
        woolCont,
        nrOfStakedTokenIds,
        woolBalance,
        getWoolBalance,
        tokenTraits,
        tokenURI,
        addManyToBarnAndPack,
        claimManyFromBarnAndPack,
        getBarn
    } = useContract();

    const cancelRef = React.useRef()

    const [mintAmount, setMintAmount] = React.useState(1);
    const [isStake, setIsStake] = React.useState(false);
    const [isUnstakeClaim, setIsUnstakeClaim] = React.useState(false);

    const [isOpenDlg, setIsOpenDlg] = React.useState(false)
    const [alertMsg, setAlertMsg] = React.useState('')
    const [isMinting, setIsMinting] = React.useState(false)
    const [isStaking, setIsStaking] = React.useState(false)
    const [isClaiming, setIsClaiming] = React.useState(false)

    const [myTokens, setMyTokens] = React.useState([]);
    const [myStakedTokens, setMyStakedTokens] = React.useState([]);

    const [selMyTokens, setSelMyTokens] = React.useState([]);
    const [selStakedTokens, setSelStakedTokens] = React.useState([]);


    const {
        connectMetamask,
        address,
        shortAddr
    } = useCustomWallet();

    const onOkAlertDlg = () => {
        setIsOpenDlg(false);
    }

    const openAlert = (msg) => {
        setAlertMsg(msg);
        setIsOpenDlg(true)
    }

    React.useEffect(() => {

    }, [address, barnCont])

    React.useEffect(() => {
        (async () => {
            if (balance > 0) {
                let tokens = []
                for (let i = 0; i < balance; i++) {
                    const tokenId = await myTokenByIndex(i);

                    tokens.push({
                        tokenId,
                        uri: await tokenURI(tokenId)
                    });
                }
                setMyTokens(tokens);


            } else {
                setMyTokens([]);
            }
        })();
        return () => { }
    }, [balance])

    React.useEffect(() => {
        (async () => {
            if (nrOfStakedTokenIds > 0) {
                let staked_tokens = []
                for (let i = 0; i < nrOfStakedTokenIds; i++) {
                    const tokenId = await getStakedTokenIdOfOwner(i);

                    staked_tokens.push(
                        {
                            tokenId: tokenId,
                            uri: await tokenURI(tokenId)
                        }
                    );
                }
                setMyStakedTokens(staked_tokens);

            } else {
                setMyStakedTokens([]);
            }
        })();
        return () => { }
    }, [nrOfStakedTokenIds])


    const onConect = () => {
        connectMetamask();
    }

    const loadData = async () => {
        await myBalanceOfToken();
        await loadBasicData();
        await getNrOfStakedTokenIds();
        await getWoolBalance();
    }
    const onMint = async () => {
        if (!address) {
            openAlert('Please connect metamask first');
            connectMetamask();
            return;
        }

        const remainingPaidTokens = paidTokens - mintedCount;
        console.log({ remainingPaidTokens });

        if (remainingPaidTokens < mintAmount && remainingPaidTokens > 0) {
            const msg = `All tokens on-sale already sold, Only ${remainingPaidTokens} are remaining.`;
            openAlert(msg);
            return;
        }

        let msgValue;
        if (remainingPaidTokens > 0) {
            //* paid tokens
            console.log({ MintPrice })
            msgValue = new BigNumber(MintPrice + '').multipliedBy(mintAmount);
        }

        if (remainingPaidTokens < 0) {
            // no paid tokens
            msgValue = undefined;
        }

        try {
            console.log({
                mintAmount, isStake, msgValue: msgValue ? msgValue.toString() : undefined
            })
            setIsMinting(true)
            const res = await mintToken(mintAmount, isStake, msgValue ? msgValue.toString() : undefined, (hash) => {

            });
            await loadData();
            setIsMinting(false)
        } catch (ex) {
            console.log(ex);
            openAlert(ex.error ? ex.error.message : ex.message);
            setIsMinting(false)
        }
    }

    const onStake = async () => {
        if (selMyTokens.length == 0) {
            openAlert('Please select your tokens to stake!');
            return;
        }
        setIsStaking(true)
        try {
            const res = await addManyToBarnAndPack(selMyTokens, (hash) => { });
            await loadData();

        } catch (ex) {
            console.log(ex);
        }
        setIsStaking(false)

    }

    const checkClaimable = async(tokenId)=>{
        try{
            const barn = await getBarn(tokenId);
            const nowSecs = Date.now() / 1000;
            const diff = nowSecs - barn.value;
            console.log({diff});
            return diff > 172800
        }catch(ex){
            console.log(ex);
            return null;
        }
        
    }


    const onClaim = async () => {
        if (selStakedTokens.length == 0) {
            openAlert('Please select your staked tokens to claim!');
            return;
        }
        setIsClaiming(true)
        let claimableTokens = [];

        if (isUnstakeClaim) {
            for(let i=0; i<selStakedTokens.length; i++){
                const res = await checkClaimable(selStakedTokens[i]);
                if(res){
                    claimableTokens.push(selStakedTokens[i])
                }
            }
            
    
            console.log({claimableTokens});
            if(claimableTokens.length == 0) {
                openAlert('There is no claimable tokens, please wait 2 days to claim tokens.')
                setIsClaiming(false);
                return 
            } else if(claimableTokens.length != selStakedTokens.length) {
                openAlert(`Some staked tokens are no claimable, ${claimableTokens.length} staked tokens will be claimed.`)
                
            }
            setSelStakedTokens(claimableTokens);
        }
        
        try {
            const res = await claimManyFromBarnAndPack(claimableTokens, isUnstakeClaim, (hash) => { });
            await loadData();

        } catch (ex) {
            console.log(ex);
        }
        setIsClaiming(false)
    }

    let mintProg = maxTokens ? Math.floor(mintedCount * 100 / maxTokens) : 0;

    return (
        <MainLayout menu={menu}>
            <MainTitle>WOLF GAME</MainTitle>
            <SectionContainer>
                <Card>
                    <CardBG />
                    <Paragragh>
                        Sheep and Wolves competing for $WOOL on a farm in the metaverse. Nothing but blockchain. No roadmap. Fully in the Public Domain.
                    </Paragragh>
                    <Row>
                        <Card p={1} w={'50%'} style={{ textAlign: 'center' }}>
                            <CardBG />
                            <WhitePaperLink href={Menus.WhitePaper.link}>WhitePaper</WhitePaperLink>
                        </Card>
                        <ImgPubDomain src={'/images/public-domain.png'} />
                    </Row>
                    <Row>
                        <WhitePaperLink href={Menus.WhitePaper.link}>Terms of service</WhitePaperLink>
                    </Row>

                </Card>
            </SectionContainer>

            <SectionContainer>
                <Box width={{ md: '50%', sm: '100%' }}>
                    <Card fillParent>
                        <CardBG />

                        <SubHeader variant='h1' center>
                            Minting
                        </SubHeader>
                        <ProgBar value={mintProg} />
                        <Paragragh color='black' center>
                            {mintedCount} / {maxTokens} minted
                        </Paragragh>
                        {
                            paused && <Paragragh center fontSize={'20px'}>
                                Minting paused
                            </Paragragh>
                        }

                        {
                            !paused && <React.Fragment>
                                <Box gap={10}>
                                    <FormControl flex={1}>
                                        <FormLabel
                                            htmlFor='amount'
                                            fontFamily={'broken-console'}
                                        >Amount</FormLabel>
                                        <NumberInput
                                            id="amount"
                                            fontFamily={'broken-console'}
                                            min={1}
                                            max={10}
                                            size='lg'
                                            defaultValue={1}
                                            keepWithinRange={true}
                                            value={mintAmount}
                                            onChange={(valStr, valNum) => {
                                                setMintAmount(valNum > 10 ? 10 : valNum)
                                            }}
                                        >
                                            <NumberInputField
                                                borderWidth={6}
                                                borderColor={'black'}
                                                borderRadius={0}

                                            />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </FormControl>
                                    <FormControl flex={1}>
                                        <Checkbox

                                            colorScheme={'black'}
                                            fontFamily={'broken-console'}
                                            color={'black'}
                                            size='lg'
                                            iconColor='black'
                                            borderColor={'black'}
                                            isChecked={isStake}
                                            mt={5}
                                            onChange={e => {
                                                console.log('isStake: ', e.target.checked)
                                                setIsStake(e.target.checked)
                                            }}
                                        >
                                            I will stake tokens.
                                        </Checkbox>
                                    </FormControl>

                                </Box>

                                {
                                    (isInitWoolfLoading || isInitBarnLoading || isMinting) ?
                                        <Box mt={4} w={'100%'} textAlign={'center'}>
                                            <Spinner size={'lg'} />
                                            {isMinting && <Paragragh color='black' center>Minting...</Paragragh>}
                                        </Box> :
                                        <Button
                                            size='lg'
                                            w={'100%'}
                                            _hover={{ bg: '#0000' }}
                                            fontFamily={'broken-console'}
                                            bg={'#0000'}
                                            onClick={onMint}
                                            borderColor={'black'}
                                            height={50}
                                            mt={5}
                                            borderWidth={6}
                                        >
                                            Mint
                                        </Button>

                                }


                            </React.Fragment>
                        }

                    </Card>
                    <Card fillParent>
                        <CardBG />
                        <SubHeader variant='h3'>
                            Game Status
                        </SubHeader>
                        <Row w={'100%'}>
                            <div style={{ width: '50%' }}>
                                <Paragragh color='black'>
                                    Sheep Minted: {mintedSheeps || 0}
                                </Paragragh>
                                <Paragragh color='black'>
                                    Sheep Staked: {totalSheepStaked || 0}
                                </Paragragh>
                                <Paragragh color='black'>
                                    Wolves Minted: {mintedCount !== undefined && mintedSheeps !== undefined ? mintedCount - mintedSheeps : 0}
                                </Paragragh>
                                <Paragragh color='black'>
                                    Wolves Staked: {totalWoolfStaked || 0}
                                </Paragragh>
                                <Paragragh color='black'>
                                    Owned Tokens: {balance || 0}
                                </Paragragh>
                                <Paragragh color='black'>
                                    My Staked Tokens: {nrOfStakedTokenIds || 0}
                                </Paragragh>

                            </div>
                            <div style={{ width: '50%' }}>
                                <Paragragh color='black'>
                                    Sheep Stolen: {stolenSheeps || 0}
                                </Paragragh>
                                <Paragragh color='black'>
                                    Wolves Stolen: {stolenWoolfs || 0}
                                </Paragragh>
                                <Paragragh color='black'>
                                    $WOOL Claimed: {totalWoolEarned || 0}
                                </Paragragh>

                            </div>
                        </Row>
                    </Card>
                </Box>
                <Box width={{ md: '50%', sm: '100%' }}>
                    <Card fillParent>
                        <Paragragh color='black' center>
                            $WOOL in your wallet: ? ${woolBalance}
                        </Paragragh>
                        <Paragragh center>
                            NOTICE: WOOL ACCUMULATION STOPPED WHEN MIGRATION BEGAN
                        </Paragragh>
                        <SubHeader variant='h1' center>
                            Staked
                        </SubHeader>
                        {
                            address ?
                                <Button
                                    size='lg'
                                    w={'100%'}
                                    fontFamily={'broken-console'}
                                    bg={'#0000'}
                                    _hover={{ bg: '#0000' }}
                                    borderColor={'black'}
                                    height={50}
                                    mt={5}
                                    borderWidth={6}
                                >
                                    {shortAddr}
                                </Button> :
                                <Button
                                    size='lg'
                                    w={'100%'}
                                    fontFamily={'broken-console'}
                                    bg={'#0000'}
                                    onClick={() => { alert('asdc') }}
                                    borderColor={'black'}
                                    // height={50}
                                    mt={5}
                                    borderWidth={6}
                                    wordBreak={'break-word'}
                                    onClick={onConect}
                                >
                                    Connect metamask
                                </Button>
                        }



                    </Card>

                    <Card fillParent>
                        <Paragragh color='black' center>
                            My Tokens
                        </Paragragh>

                        <React.Fragment>
                            {
                                myTokens.map((token) => {
                                    const { tokenId, uri } = token;
                                    const obj = JSON.parse(Buffer.from(uri.replace('data:application/json;base64,', ''), "base64").toString())
                                    return <TokenImg
                                        obj={obj}
                                        tokenId={tokenId}
                                        onClick={(_tokenId) => {
                                            if (selMyTokens.includes(_tokenId)) {
                                                setSelMyTokens(selMyTokens.filter(one => one != _tokenId))
                                            } else {
                                                setSelMyTokens([...selMyTokens, _tokenId])
                                            }
                                        }}
                                        selected={selMyTokens.includes(tokenId)}
                                    />

                                })
                            }
                        </React.Fragment>


                        {
                            address && (
                                <React.Fragment>
                                    {
                                        isStaking ? <Box w={'100%'} textAlign={'center'}>
                                            <Spinner size={'lg'} />
                                        </Box> : <Button
                                            size='lg'
                                            w={'100%'}
                                            fontFamily={'broken-console'}
                                            bg={'#0000'}
                                            onClick={() => { alert('asdc') }}
                                            borderColor={'black'}
                                            mt={5}
                                            borderWidth={6}
                                            wordBreak={'break-word'}
                                            onClick={onStake}
                                        >
                                            Stake Tokens
                                        </Button>
                                    }


                                    <Box mt={5}>
                                        {
                                            myStakedTokens.map(token => {
                                                const { tokenId, uri } = token;
                                                const obj = JSON.parse(Buffer.from(uri.replace('data:application/json;base64,', ''), "base64").toString())
                                                return <TokenImg
                                                    obj={obj}
                                                    tokenId={tokenId}
                                                    onClick={(_tokenId) => {
                                                        if (selStakedTokens.includes(_tokenId)) {
                                                            setSelStakedTokens(selStakedTokens.filter(one => one != _tokenId))
                                                        } else {
                                                            setSelStakedTokens([...selStakedTokens, _tokenId])
                                                        }
                                                    }}
                                                    selected={selStakedTokens.includes(tokenId)}
                                                />
                                            })
                                        }
                                    </Box>

                                    {
                                        isClaiming ? <Box w={'100%'} textAlign={'center'}>
                                            <Spinner size={'lg'} />
                                        </Box> :
                                            <>
                                                <FormControl flex={1}>
                                                    <Checkbox

                                                        colorScheme={'black'}
                                                        fontFamily={'broken-console'}
                                                        color={'black'}
                                                        size='lg'
                                                        iconColor='black'
                                                        borderColor={'black'}
                                                        isChecked={isUnstakeClaim}
                                                        mt={5}
                                                        onChange={e => {
                                                            console.log('isUnstakeClaim: ', e.target.checked)
                                                            setIsUnstakeClaim(e.target.checked)
                                                        }}
                                                    >
                                                        I will unstake.
                                                    </Checkbox>
                                                </FormControl>
                                                <Button
                                                    size='lg'
                                                    w={'100%'}
                                                    fontFamily={'broken-console'}
                                                    bg={'#0000'}
                                                    onClick={() => { alert('asdc') }}
                                                    borderColor={'black'}
                                                    // height={50}
                                                    mt={5}
                                                    borderWidth={6}
                                                    wordBreak={'break-word'}
                                                    onClick={onClaim}
                                                >
                                                    Claim
                                                </Button>
                                            </>
                                    }


                                </React.Fragment>
                            )
                        }

                    </Card>

                </Box>

            </SectionContainer>

            <AlertDialog
                isOpen={isOpenDlg}
                leastDestructiveRef={cancelRef}
                onClose={() => { setIsOpenDlg(false) }}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Woolf Game Notification
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            {alertMsg}
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button colorScheme='red' onClick={onOkAlertDlg} ml={3}>
                                Ok
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

        </MainLayout>

    )
}

export default GamePage;
