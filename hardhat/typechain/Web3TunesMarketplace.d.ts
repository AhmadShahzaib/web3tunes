/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Web3TunesMarketplaceInterface extends ethers.utils.Interface {
  functions: {
    "buyNFT(uint256,uint256)": FunctionFragment;
    "listNft(uint256,uint256,uint256)": FunctionFragment;
    "listings(uint256)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPlatformFee(uint256)": FunctionFragment;
    "setRoyalty(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyNFT",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listNft",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyalty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "buyNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listNft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Web3TunesMarketplace extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Web3TunesMarketplaceInterface;

  functions: {
    buyNFT(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "buyNFT(uint256,uint256)"(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    listNft(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "listNft(uint256,uint256,uint256)"(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      listingId: BigNumber;
      nftId: BigNumber;
      amount: BigNumber;
      soldAmount: BigNumber;
      price: BigNumber;
      seller: string;
      owner: string;
      sold: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: string;
      6: string;
      7: boolean;
    }>;

    "listings(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      listingId: BigNumber;
      nftId: BigNumber;
      amount: BigNumber;
      soldAmount: BigNumber;
      price: BigNumber;
      seller: string;
      owner: string;
      sold: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: string;
      6: string;
      7: boolean;
    }>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setPlatformFee(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPlatformFee(uint256)"(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRoyalty(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRoyalty(uint256)"(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  buyNFT(
    listingId: BigNumberish,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "buyNFT(uint256,uint256)"(
    listingId: BigNumberish,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  listNft(
    nftId: BigNumberish,
    amount: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "listNft(uint256,uint256,uint256)"(
    nftId: BigNumberish,
    amount: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  listings(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    listingId: BigNumber;
    nftId: BigNumber;
    amount: BigNumber;
    soldAmount: BigNumber;
    price: BigNumber;
    seller: string;
    owner: string;
    sold: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: string;
    6: string;
    7: boolean;
  }>;

  "listings(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    listingId: BigNumber;
    nftId: BigNumber;
    amount: BigNumber;
    soldAmount: BigNumber;
    price: BigNumber;
    seller: string;
    owner: string;
    sold: boolean;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: string;
    6: string;
    7: boolean;
  }>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setPlatformFee(
    _fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPlatformFee(uint256)"(
    _fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRoyalty(
    _royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRoyalty(uint256)"(
    _royalty: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    buyNFT(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "buyNFT(uint256,uint256)"(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    listNft(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "listNft(uint256,uint256,uint256)"(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      listingId: BigNumber;
      nftId: BigNumber;
      amount: BigNumber;
      soldAmount: BigNumber;
      price: BigNumber;
      seller: string;
      owner: string;
      sold: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: string;
      6: string;
      7: boolean;
    }>;

    "listings(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      listingId: BigNumber;
      nftId: BigNumber;
      amount: BigNumber;
      soldAmount: BigNumber;
      price: BigNumber;
      seller: string;
      owner: string;
      sold: boolean;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: string;
      6: string;
      7: boolean;
    }>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setPlatformFee(
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPlatformFee(uint256)"(
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyalty(
      _royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRoyalty(uint256)"(
      _royalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    buyNFT(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "buyNFT(uint256,uint256)"(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    listNft(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "listNft(uint256,uint256,uint256)"(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "listings(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setPlatformFee(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPlatformFee(uint256)"(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRoyalty(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRoyalty(uint256)"(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyNFT(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "buyNFT(uint256,uint256)"(
      listingId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    listNft(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "listNft(uint256,uint256,uint256)"(
      nftId: BigNumberish,
      amount: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    listings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "listings(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setPlatformFee(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPlatformFee(uint256)"(
      _fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRoyalty(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRoyalty(uint256)"(
      _royalty: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}