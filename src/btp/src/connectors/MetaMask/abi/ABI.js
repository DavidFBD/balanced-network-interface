export const ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_tokenName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_to',
        type: 'string',
      },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_to',
        type: 'string',
      },
    ],
    name: 'transferNativeCoin',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    name: 'getBalanceOf',
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_coinName',
        type: 'string',
      },
    ],
    outputs: [
      {
        internalType: 'uint256',
        name: '_usableBalance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_lockedBalance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_refundableBalance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_coinName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_to',
        type: 'string',
      },
    ],
    name: 'transferWrappedCoin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
