/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Web3TunesMarketplace } from "../Web3TunesMarketplace";

export class Web3TunesMarketplace__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nftContract: string,
    overrides?: Overrides
  ): Promise<Web3TunesMarketplace> {
    return super.deploy(_nftContract, overrides || {}) as Promise<
      Web3TunesMarketplace
    >;
  }
  getDeployTransaction(
    _nftContract: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_nftContract, overrides || {});
  }
  attach(address: string): Web3TunesMarketplace {
    return super.attach(address) as Web3TunesMarketplace;
  }
  connect(signer: Signer): Web3TunesMarketplace__factory {
    return super.connect(signer) as Web3TunesMarketplace__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Web3TunesMarketplace {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Web3TunesMarketplace;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "listNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listings",
    outputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "soldAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setPlatformFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_royalty",
        type: "uint256",
      },
    ],
    name: "setRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052601960045560646005556103e860065534801561002057600080fd5b50604051610d89380380610d8983398101604081905261003f916100bd565b6100483361006d565b600380546001600160a01b0319166001600160a01b03929092169190911790556100eb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ce578081fd5b81516001600160a01b03811681146100e4578182fd5b9392505050565b610c8f806100fa6000396000f3fe60806040526004361061008c5760003560e01c806301ffc9a71461009157806312e8e2c3146100c65780631d85bf03146100e85780634209a2e1146100fb578063601fccd01461011b578063715018a61461013b5780638da5cb5b14610150578063bc197c811461017d578063de74e57b146101c2578063f23a6e611461027c578063f2fde38b1461029c575b600080fd5b34801561009d57600080fd5b506100b16100ac366004610acb565b6102bc565b60405190151581526020015b60405180910390f35b3480156100d257600080fd5b506100e66100e1366004610af3565b6102f3565b005b6100e66100f6366004610b0b565b610300565b34801561010757600080fd5b506100e6610116366004610af3565b6105ca565b34801561012757600080fd5b506100e6610136366004610b2c565b6105d7565b34801561014757600080fd5b506100e661073f565b34801561015c57600080fd5b50610165610753565b6040516001600160a01b0390911681526020016100bd565b34801561018957600080fd5b506101a96101983660046109c4565b63bc197c8160e01b95945050505050565b6040516001600160e01b031990911681526020016100bd565b3480156101ce57600080fd5b506102336101dd366004610af3565b6007602052600090815260409020805460018201546002830154600384015460048501546005860154600690960154949593949293919290916001600160a01b039081169190811690600160a01b900460ff1688565b60408051988952602089019790975295870194909452606086019290925260808501526001600160a01b0390811660a08501521660c0830152151560e0820152610100016100bd565b34801561028857600080fd5b506101a9610297366004610a69565b610762565b3480156102a857600080fd5b506100e66102b73660046109a3565b610773565b60006001600160e01b03198216630271189760e51b14806102ed57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6102fb6107ec565b600455565b6000828152600760205260408120600401546006546005549192916103259084610bf7565b61032f9190610bd7565b90506000600654600454846103449190610bf7565b61034e9190610bd7565b6000868152600760205260409020600201549091508411156103a65760405162461bcd60e51b815260206004820152600c60248201526b4f7574206f662073746f636b60a01b60448201526064015b60405180910390fd5b806103b18584610bf7565b6103bb8686610bf7565b6103c59190610bbf565b6103cf9190610bbf565b341461041d5760405162461bcd60e51b815260206004820152601e60248201527f506c65617365207375626d6974207468652061736b696e672070726963650000604482015260640161039d565b6000858152600760205260409020600501546001600160a01b03166108fc6104458686610bf7565b6040518115909202916000818181858888f1935050505015801561046d573d6000803e3d6000fd5b50610476610753565b6001600160a01b03166108fc61048c8685610bf7565b6040518115909202916000818181858888f193505050501580156104b4573d6000803e3d6000fd5b506000858152600760205260409020600201546104d2908590610c16565b60008681526007602052604090206002810191909155600301546104f7908590610bbf565b600086815260076020526040902060030155610517600280546001019055565b60035460008681526007602052604090819020600101549051637921219560e11b81526001600160a01b039092169163f242432a9161055e91309133918a90600401610b57565b600060405180830381600087803b15801561057857600080fd5b505af115801561058c573d6000803e3d6000fd5b505050506105c2303360076000898152602001908152602001600020600101548760405180602001604052806000815250610762565b505050505050565b6105d26107ec565b600555565b6105e5600180546001019055565b60006105f060015490565b905060405180610100016040528082815260200185815260200184815260200160008152602001838152602001336001600160a01b03168152602001610634610753565b6001600160a01b0390811682526000602092830181905284815260078352604090819020845181559284015160018401558381015160028401556060840151600380850191909155608085015160048086019190915560a08601516005860180549186166001600160a01b031990921691909117905560c08601516006909501805460e0909701511515600160a01b026001600160a81b0319909716958516959095179590951790935591549151637921219560e11b815291169163f242432a9161070791339130918a918a9101610b57565b600060405180830381600087803b15801561072157600080fd5b505af1158015610735573d6000803e3d6000fd5b5050505050505050565b6107476107ec565b610751600061084b565b565b6000546001600160a01b031690565b63f23a6e6160e01b95945050505050565b61077b6107ec565b6001600160a01b0381166107e05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161039d565b6107e98161084b565b50565b336107f5610753565b6001600160a01b0316146107515760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161039d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146108b257600080fd5b919050565b600082601f8301126108c7578081fd5b813560206001600160401b038211156108e2576108e2610c43565b8160051b6108f1828201610b8f565b83815282810190868401838801850189101561090b578687fd5b8693505b8584101561092d57803583526001939093019291840191840161090f565b50979650505050505050565b600082601f830112610949578081fd5b81356001600160401b0381111561096257610962610c43565b610975601f8201601f1916602001610b8f565b818152846020838601011115610989578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156109b4578081fd5b6109bd8261089b565b9392505050565b600080600080600060a086880312156109db578081fd5b6109e48661089b565b94506109f26020870161089b565b935060408601356001600160401b0380821115610a0d578283fd5b610a1989838a016108b7565b94506060880135915080821115610a2e578283fd5b610a3a89838a016108b7565b93506080880135915080821115610a4f578283fd5b50610a5c88828901610939565b9150509295509295909350565b600080600080600060a08688031215610a80578081fd5b610a898661089b565b9450610a976020870161089b565b9350604086013592506060860135915060808601356001600160401b03811115610abf578182fd5b610a5c88828901610939565b600060208284031215610adc578081fd5b81356001600160e01b0319811681146109bd578182fd5b600060208284031215610b04578081fd5b5035919050565b60008060408385031215610b1d578182fd5b50508035926020909101359150565b600080600060608486031215610b40578283fd5b505081359360208301359350604090920135919050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b604051601f8201601f191681016001600160401b0381118282101715610bb757610bb7610c43565b604052919050565b60008219821115610bd257610bd2610c2d565b500190565b600082610bf257634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610c1157610c11610c2d565b500290565b600082821015610c2857610c28610c2d565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122017eb19845ae2da34f34b11a99e9a486651edf3b1b527c6a73da24eafd6f2fefd64736f6c63430008040033";