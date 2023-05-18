export const CUSTOMER_CONTRACT_ADDRESS = '0x693d7F72edD085F31926454b383820c7C94e9a2C';
export const CUSTOMER_CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_origin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_destination",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_dist",
        "type": "uint256"
      }
    ],
    "name": "addRider",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "availableRides",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "origin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "destination",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "distance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fare",
            "type": "uint256"
          }
        ],
        "internalType": "struct Customer.Rider[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_origin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_destination",
        "type": "string"
      }
    ],
    "name": "shareBookRidefromlist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "shareRiders",
    "outputs": [
      {
        "internalType": "string",
        "name": "origin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "destination",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_origin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_destination",
        "type": "string"
      }
    ],
    "name": "showRidesSameLocation",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "origin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "destination",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "distance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fare",
            "type": "uint256"
          }
        ],
        "internalType": "struct Customer.Rider[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "showSharedRide",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address[]",
            "name": "s_riders",
            "type": "address[]"
          },
          {
            "internalType": "string",
            "name": "origin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "destination",
            "type": "string"
          }
        ],
        "internalType": "struct Customer.shareRider[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]