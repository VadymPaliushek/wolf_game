import { BigNumber } from "bignumber.js";
import React, { createContext, useContext, useEffect } from "react";

import Barn from "../abis/Barn";
import WOOL from "../abis/WOOL";
import Woolf from "../abis/Woolf";
import getWeb3 from "./getWeb3";
import { shortenNumber } from "../utils";
import { useCustomWallet } from "./CustomWalletContext";
const { ethers } = require("ethers");
const Web3 = require('web3');
export const ZERO_ADDR = "0x0000000000000000000000000000000000000000";
const GasMultiple = 2;

function ContractConfig() {

  const {
    address
  } = useCustomWallet();

  const [isInitBarnLoading, setIsInitBarnLoading] = React.useState(true);
  const [isInitWoolfLoading, setIsInitWoolfLoading] = React.useState(true);

  const [barnCont, setBarnCont] = React.useState();
  const [woolCont, setWoolCont] = React.useState();
  const [woolfCont, setWoolfCont] = React.useState();

  const [barnSignedCont, setBarnSignedCont] = React.useState();
  const [woolSignedCont, setWoolSignedCont] = React.useState();
  const [woolfSignedCont, setWoolfSignedCont] = React.useState();

  const [totalSheepStaked, setTotalSheepStaked] = React.useState();
  const [totalWoolfStaked, setTotalWoolfStaked] = React.useState();

  const [totalWoolEarned, setTotalWoolEarned] = React.useState();
  const [maxTokens, setMaxTokens] = React.useState();
  const [mintedCount, setMintedCount] = React.useState();
  const [mintedSheeps, setMintedSheeps] = React.useState();
  const [stolenSheeps, setStolenSheeps] = React.useState();
  const [stolenWoolfs, setStolenWoolfs] = React.useState();
  const [paused, setPaused] = React.useState();
  const [paidTokens, setPaidTokens] = React.useState();
  const [MintPrice, setMintPrice] = React.useState();
  const [balance, setBalance] = React.useState();
  const [woolBalance, setWoolBalance] = React.useState();
  const [nrOfStakedTokenIds, setNrOfStakedTokenIds] = React.useState();


  const [web3, setWeb3] = React.useState();


  const _getProviderUrls = () => {
    return process.env.REACT_APP_NETWORK !== 'live' ?
      [
        process.env.REACT_APP_MUMBAI_ALCHEMY_HTTP,
        process.env.REACT_APP_MUMBAI_ALCHEMY_WEBSOCKET
      ] : [
        process.env.REACT_APP_POLYGON_ALCHEMY_HTTP,
        process.env.REACT_APP_POLYGON_ALCHEMY_WEBSOCKET
      ];
  }

  const myBalanceOfToken = async () => {
    try {
      const res = await woolfCont.methods.balanceOf(address).call();
      console.log('balance of :', res)
      setBalance(res + '');
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  const myTokenByIndex = async (index) => {


    try {
      const res = await woolfCont.methods.tokenOfOwnerByIndex(address, index).call();
      console.log('myTokenByIndex :', res)

      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  const tokenTraits = async(tokenId)=>{

    try {
      const res = await woolfCont.methods.tokenTraits(tokenId).call();
      console.log('tokenTraits :', res)

      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }
  const tokenURI = async(tokenId)=>{

    try {
      const res = await woolfCont.methods.tokenURI(tokenId).call();
      console.log('tokenURI :', res)

      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  const initContracts = async () => {
    let web3Default;
    // if (web3) {
    //   web3Default = web3;
    // } else {
    console.log('_getProviderUrls()[0]:', _getProviderUrls()[0])
    web3Default = new Web3(new Web3.providers.HttpProvider(_getProviderUrls()[0]));
    // }
    const _barn = new web3Default.eth.Contract(Barn.abi, Barn.address);
    const _wool = new web3Default.eth.Contract(WOOL.abi, WOOL.address);
    const _woolf = new web3Default.eth.Contract(Woolf.abi, Woolf.address);


    setBarnCont(_barn);
    setWoolCont(_wool);
    setWoolfCont(_woolf);
  }


  const mintToken = async (amount, stake, msgValue, transactionHashCallback) => {

    return new Promise((resolve, reject) => {
      let option = { from: address, }

      if (msgValue) {
        option.value = msgValue;
      }
      woolfSignedCont.methods
        .mint(
          amount,
          stake
        )
        .send(option)
        .on("transactionHash", function (hash) {
          if (transactionHashCallback) {
            transactionHashCallback(hash);
          }
        })
        .on("error", function (error, receipt) {
          reject({ error, receipt });
        })
        .then((receipt) => {

          resolve(receipt);
        });

    })

  }
  const addManyToBarnAndPack = async (tokenIds, transactionHashCallback) => {

    return new Promise((resolve, reject) => {
      let option = { from: address, }

      // if (msgValue) {
      //   option.value = msgValue;
      // }
      barnSignedCont.methods
        .addManyToBarnAndPack(
          address,
          tokenIds
        )
        .send(option)
        .on("transactionHash", function (hash) {
          if (transactionHashCallback) {
            transactionHashCallback(hash);
          }
        })
        .on("error", function (error, receipt) {
          reject({ error, receipt });
        })
        .then((receipt) => {
          resolve(receipt);
        });

    })

  }
  const claimManyFromBarnAndPack = async (tokenIds, unStake, transactionHashCallback) => {

    return new Promise((resolve, reject) => {
      let option = { from: address, }

      // if (msgValue) {
      //   option.value = msgValue;
      // }
      barnSignedCont.methods
        .claimManyFromBarnAndPack(
          tokenIds,
          unStake
        )
        .send(option)
        .on("transactionHash", function (hash) {
          if (transactionHashCallback) {
            transactionHashCallback(hash);
          }
        })
        .on("error", function (error, receipt) {
          reject({ error, receipt });
        })
        .then((receipt) => {
          resolve(receipt);
        });

    })

  }

  const getWoolBalance = async()=>{
    try {
      const res = await woolCont.methods.balanceOf(address).call();
      console.log('getWoolBalance:', res);

      setWoolBalance(new BigNumber(res).dividedBy(10**18).toString());
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  const initSignedContract = async () => {

    try {
      const _web3 = await getWeb3();
      setWeb3(_web3);
      const _barn = new _web3.eth.Contract(
        Barn.abi,
        Barn.address
      );
      setBarnSignedCont(_barn);

      const _woolCont = new _web3.eth.Contract(
        WOOL.abi,
        WOOL.address
      );

      setWoolSignedCont(_woolCont);

      const _woolf = new _web3.eth.Contract(
        Woolf.abi,
        Woolf.address
      );
      setWoolfSignedCont(_woolf);

      return true;
    } catch (ex) {
      return false;
    }
  };

  const DAILY_WOOL_RATE = async () => {

    try {
      const res = await barnCont.methods.DAILY_WOOL_RATE().call();
      console.log('DAILY_WOOL_RATE:', res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };


  const getNrOfStakedTokenIds = async () => {
    try {
      const res = await barnCont.methods.getNrOfStakedTokenIds(address).call();
      console.log('getNrOfStakedTokenIds:', res);
      setNrOfStakedTokenIds(res)
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }

  const getStakedTokenIdOfOwner = async (index) => {
    try {
      const res = await barnCont.methods.getStakedTokenIdOfOwner(address, index).call();
      console.log('getStakedTokenIdOfOwner:', res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }



  const MAX_TOKENS = async () => {

    try {
      const res = await woolfCont.methods.MAX_TOKENS().call();
      console.log('MAX_TOKENS:', res);
      setMaxTokens(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };


  const getMintedCount = async () => {

    try {
      const res = await woolfCont.methods.minted().call();
      console.log('getMintedCount:', res);
      setMintedCount(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };

  const getPaidTokensCount = async () => {

    try {
      const res = await woolfCont.methods.PAID_TOKENS().call();
      console.log('getPaidTokensCount:', res);
      setPaidTokens(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };

  const getPaused = async () => {

    try {
      const res = await woolfCont.methods.paused().call();
      console.log('getPaused:', res);
      setPaused(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };

  const getMintedSheeps = async () => {

    try {
      const res = await woolfCont.methods.mintedSheeps().call();
      console.log('getMintedSheeps:', res);
      setMintedSheeps(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };

  const getStolenSheeps = async () => {

    try {
      const res = await woolfCont.methods.stolenSheeps().call();
      console.log('getStolenSheeps:', res);
      setStolenSheeps(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };
  const getStolenWoolfs = async () => {

    try {
      const res = await woolfCont.methods.stolenWoolfs().call();
      console.log('getStolenWoolfs:', res);
      setStolenWoolfs(res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };

  const getBarnAddressOfWoolf = async () => {

    try {
      const res = await woolfCont.methods.barn().call();
      return res;
    } catch (ex) {
      console.log('ex:, ', ex);
      return null;
    }
  }



  const getTotalSheepStaked = async () => {

    try {
      const res = await barnCont.methods.totalSheepStaked().call();
      console.log('totalSheepStaked:', res.toString());
      setTotalSheepStaked(res.toString());
    } catch (ex) {
      console.error('getTotalSheepStaked', ex);
    }
  }

  const getTotalWoolfStaked = async () => {

    try {
      const res = await barnCont.methods.totalWoolfStaked().call();
      console.log('totalWoolfStaked:', res.toString());
      setTotalWoolfStaked(res.toString());
    } catch (ex) {
      console.error('getTotalWoolfStaked', ex);
    }
  }
  const getMintPrice = async () => {

    try {
      const res = await woolfCont.methods.MINT_PRICE().call();
      console.log('getMintPrice:', res.toString());
      setMintPrice(res.toString());
    } catch (ex) {
      console.error('getTotalWoolfStaked', ex);
    }
  }


  const getTotalWoolEarned = async () => {

    try {
      const res = await barnCont.methods.totalWoolEarned().call();
      console.log('totalWoolEarned:', res);

      let val = new BigNumber(res + '').dividedBy(10 ** 18).toNumber().toLocaleString("en-US");
      setTotalWoolEarned(val);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };

  const getBarn = async (tokenId) => {

    try {
      const res = await barnCont.methods.barn(tokenId).call();
      console.log('getBarn:', res);
      return res;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };


  useEffect(() => {
    (async () => {
      await initContracts();
    })();

    return () => { }
  }, []);

  useEffect(() => {
    if (!address) return;
    (async () => {
      await initSignedContract();
    })();
  }, [address])

  const loadingBarnData = async () => {
    await getTotalSheepStaked();
    await getTotalWoolEarned();
    await getTotalWoolfStaked();
  }

  useEffect(() => {
    if (!barnCont) return;
    (async () => {

      await loadingBarnData();
      setIsInitBarnLoading(false)
      
    })();

  }, [barnCont])

  useEffect(()=>{
    if(barnCont && address) {
      (async()=>{
        await getNrOfStakedTokenIds(address);
      })();
    }
  }, [barnCont, address])

  const loadingWoolfData = async () => {
    await getPaused();
    await MAX_TOKENS();
    await getMintedCount();
    await getMintedSheeps();
    await getStolenSheeps();
    await getStolenWoolfs();
    await getPaidTokensCount();
    await getMintPrice();
  }

  useEffect(() => {
    if (!woolfCont) return;
    (async () => {
      await loadingWoolfData();
      setIsInitWoolfLoading(false)
    })();

  }, [woolfCont])

  useEffect(() => {
    if (address && woolfCont) {

      (async () => {

        await myBalanceOfToken();
      })()
    }

  }, [address, woolfCont])

  useEffect(()=>{
    if(woolCont && address) {
      (async()=>{
        await getWoolBalance();
      })();
    }
  }, [woolCont, address])


  const loadBasicData = async () => {
    await loadingBarnData();
    await loadingWoolfData();

  }

  return {
    web3,
    barnCont,
    woolfCont,
    woolCont,
    DAILY_WOOL_RATE,
    totalSheepStaked,
    getBarnAddressOfWoolf,
    maxTokens,
    getMintedCount,
    mintedCount,
    totalWoolEarned,
    totalWoolfStaked,
    mintedSheeps,
    stolenSheeps,
    stolenWoolfs,
    paused,
    paidTokens,
    MintPrice,
    mintToken,
    isInitBarnLoading,
    isInitWoolfLoading,
    loadBasicData,
    myBalanceOfToken,
    balance,
    myTokenByIndex,
    getNrOfStakedTokenIds,
    getStakedTokenIdOfOwner,
    nrOfStakedTokenIds,
    woolBalance,
    getWoolBalance,
    tokenTraits,
    tokenURI,
    addManyToBarnAndPack,
    claimManyFromBarnAndPack,
    getBarn
  };
}

const contractContext = createContext({
  web3: undefined,
  barnCont: undefined,
  woolfCont: undefined,
  woolCont: undefined,
  DAILY_WOOL_RATE: undefined,
  totalSheepStaked: undefined,
  totalWoolEarned: undefined,
  getBarnAddressOfWoolf: undefined,
  maxTokens: undefined,
  mintedCount: undefined,
  getMintedCount: undefined,
  totalWoolEarned: undefined,
  totalWoolfStaked: undefined,
  mintedSheeps: undefined,
  stolenSheeps: undefined,
  stolenWoolfs: undefined,
  paused: undefined,
  paidTokens: undefined,
  MintPrice: undefined,
  mintToken: undefined,
  isInitBarnLoading: undefined,
  isInitWoolfLoading: undefined,
  loadBasicData: undefined,
  myBalanceOfToken: undefined,
  balance: undefined,
  myTokenByIndex: undefined,
  getNrOfStakedTokenIds: undefined,
  getStakedTokenIdOfOwner: undefined,
  nrOfStakedTokenIds: undefined,
  woolBalance: undefined,
  getWoolBalance: undefined,
  tokenTraits: undefined,
  tokenURI: undefined,
  addManyToBarnAndPack: undefined,
  claimManyFromBarnAndPack: undefined,
  getBarn: undefined,
});

export const ContractProvider = ({ children }) => {
  const value = ContractConfig();
  return (
    <contractContext.Provider value={value}>
      {children}
    </contractContext.Provider>
  );
};

export const useContract = () => useContext(contractContext);
