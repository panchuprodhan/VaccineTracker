const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_type",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "entityEvent",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_entityType",
        type: "uint256"
      }
    ],
    name: "EntityRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_lat",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_long",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_vaccineId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "transitEvent",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vaccineId",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "_status",
        type: "uint8"
      }
    ],
    name: "vaccineAdminister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lat",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_long",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_vaccineId",
        type: "uint256"
      }
    ],
    name: "vaccineLocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_mrp",
        type: "uint256"
      }
    ],
    name: "VaccineRegister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_mfd",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_exp",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_mrp",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "vacineEvent",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "entityCheck",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "enum VaccineTrack.EntityType",
        name: "entityType",
        type: "uint8"
      },
      {
        internalType: "bool",
        name: "existence",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "entityID",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_entityName",
        type: "string"
      }
    ],
    name: "EntityDetailsCheck",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "transitCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "lat",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "long",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "vaccineID",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "transitID",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "vaccineCheck",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "manufacturingDate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "expiryDate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "vaccineID",
        type: "uint256"
      },
      {
        internalType: "enum VaccineTrack.Status",
        name: "status",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vaccineId",
        type: "uint256"
      }
    ],
    name: "vaccineStatus",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const contractInstance = "0xe2B5c9Bccb0b896f78fD9dA95628152ef8c53854";

export { abi, contractInstance };
