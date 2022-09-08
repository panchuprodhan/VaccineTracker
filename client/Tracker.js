console.log("hi kala");

// Change the HttpProvider from Infura to localhost for testing on local environment
web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://eth-rinkeby.alchemyapi.io/v2/ewypHJD4eUPcjq06hvHn-hhwBrZfcJks"
  )
);
console.log(web3.currentProvider);

// Abi of the solidity file
abi = [
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

// Instance of the deployed contract
contractInstance = "0xd8041Fb94fCFc8519eCCE8B6eAE38Bf837D68AfF";
var TracContract = new web3.eth.Contract(abi, contractInstance);

var accounts;
web3.eth.getAccounts().then(function(acc) {
  // Change accounts to acc for local
  accounts = ["0xb9e82046273Db770b7913686afBe75f67354E390"];
  $(document).ready(function() {
    // Private key of the signer
    const signer = web3.eth.accounts.privateKeyToAccount(
      "0x9a18fe8362870ec8eb960f3e7f734a8772912f0abb50a53eb4145e2ee4704b52"
    );
    web3.eth.accounts.wallet.add(signer);

    console.log(TracContract.methods);
    console.log(signer);

    $("#button1").click(function() {
      var entityName = $("#entityName").val();
      var entityType = $("#entityType").val();
      console.log(entityName);
      console.log(entityType);
      TracContract.methods
        .EntityRegister(entityName, entityType)
        .send({ from: accounts[0], gas: 300000 }, function(error, result) {
          console.log(result);
          console.log(error);
        });
    });

    $("#button2").click(function() {
      var entityDetailsCheck = $("#entityDetailsCheck").val();
      TracContract.methods
        .EntityDetailsCheck(entityDetailsCheck)
        .call(function(error, result) {
          console.log(JSON.stringify(result));
          alert(
            "Entity Name: " +
              result[0] +
              "\nEntity Type: " +
              result[1] +
              "\nEntity existence: " +
              result[2] +
              "\nEntity ID: " +
              result[3]
          );
          console.log(error);
        });
    });

    $("#button3").click(function() {
      var vaccineName = $("#vaccineName").val();
      var mrp = $("#mrp").val();
      TracContract.methods
        .VaccineRegister(vaccineName, mrp)
        .send({ from: accounts[0], gas: 300000 }, function(error, result) {
          console.log(result);
          console.log(error);
        });
    });

    $("#button4").click(function() {
      var lat = $("#lat").val();
      var long = $("#long").val();
      var vaccineID = $("#vaccineID").val();
      TracContract.methods
        .vaccineLocation(lat, long, vaccineID)
        .send({ from: accounts[0], gas: 300000 }, function(error, result) {
          console.log(result);
          console.log(error);
        });
    });

    $("#button5").click(function() {
      var idVaccine = $("#idVaccine").val();
      TracContract.methods
        .vaccineStatus(idVaccine)
        .call(function(error, result) {
          console.log(result);
          alert("The vaccine is: " + result);
          console.log(error);
        });
    });

    $("#button6").click(function() {
      var vaccineId = $("#vaccineId").val();
      var vaccineStatus = $("#vaccineStatus").val();
      TracContract.methods
        .vaccineAdminister(vaccineId, vaccineStatus)
        .send({ from: accounts[0] }, function(error, result) {
          console.log(result);
          console.log(error);
        });
    });
  });
});
