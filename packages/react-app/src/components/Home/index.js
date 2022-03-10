import React, { useState } from "react";
import { parseEther } from "@ethersproject/units";
import { ETH_VAL } from "../../constants";
import { Account } from "../../components";

import {
  Container,
  InnerContainer,
  TextWrapper,
  NFTContainer,
  ProgressBarContainer,
  ButtonWrapper,
  ButtonOpensea,
  ImgWrapper,
  PointWrapper,
} from "./styles"; //k-k

export const Home = ({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  contract,
  signer,
  remainTokenCount,
  remainMintCount
}) => {
  const [amount, setAmount] = useState(ETH_VAL);
  const [minting, setMinting] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [mintCount, setMintCount] = useState(1);

  const _decreaseMintCount = () => {
    if (mintCount == 1) return;
    setMintCount(mintCount - 1);
  };

  const _increaseMintCount = () => {
    if(remainMintCount < 1) {
      setMintCount(1);
      return
    }
    if (mintCount >= remainMintCount) {
      setMintCount(remainMintCount);
      return;
    }
    setMintCount(mintCount + 1);
  };

  return (
    <Container>
      <InnerContainer>
        <TextWrapper>
          <h1>GOLD BAR</h1>
          <h2>{2112 - remainTokenCount}/2112</h2>
          <NFTContainer>
            {/* <p>NFT Count {cnt > 0 && <span>{cnt}</span>}</p> */}
            {/* <ProgressBarContainer>
              <PointWrapper active={true} onClick={() => setCnt(1)} />
              <PointWrapper active={true} onClick={() => setCnt(1)} />
              <PointWrapper active={cnt > 1} onClick={() => setCnt(2)} />
            </ProgressBarContainer> */}
            <button onClick={_decreaseMintCount}>-</button>
            <a className="mint_count">{mintCount}</a>
            <button className="add" onClick={_increaseMintCount}>
              +
            </button>
          </NFTContainer>
          <ButtonWrapper>
            <a href="https://www.shovelhub.net/" className="back">
              Back
            </a>
            <Account
              address={address}
              localProvider={localProvider}
              userSigner={userSigner}
              mainnetProvider={mainnetProvider}
              price={price}
              web3Modal={web3Modal}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
              blockExplorer={blockExplorer}
              contract={contract}
              signer={userSigner}
              remainTokenCount={remainTokenCount}
              mintCount={mintCount}
              remainMintCount={remainMintCount}
            />
          </ButtonWrapper>
          <ButtonOpensea>
            <a href="https://opensea.io/collection/UndergroundNFT-v2" className="opensea"> 
              See in Opensea
            </a>
          </ButtonOpensea>
        </TextWrapper>
        <ImgWrapper>
          <img className="banner_img" src="/112.png" alt="" />
          <img className="hero_img" src="/home-hero2.png" alt="" />
        </ImgWrapper>
      </InnerContainer>
    </Container>
  );
};
