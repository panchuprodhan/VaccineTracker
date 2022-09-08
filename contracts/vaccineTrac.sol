// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

contract VaccineTrack {
    using Counters for Counters.Counter;
    Counters.Counter private _entityID;
    Counters.Counter private _vaccineID;
    Counters.Counter private _transitID;

    struct EntityDetails {
        string name;
        EntityType entityType;
        bool existence;
        uint entityID;
    }
    EntityDetails entity;

    enum EntityType {Suppliers, Manufacturers, Logistics, Distributors, Hospitals}

    struct VaccineDetails {
        string name;
        uint manufacturingDate;
        uint expiryDate;
        uint price;
        uint vaccineID;
        Status status;
    }
    VaccineDetails vaccine;

    enum Status {PACKAGED, APPROVED, DISPATCHED, INTRANSIT, UNFIT, FITFORUSE}

    struct TransitDetails {
        uint lat;
        uint long;
        uint vaccineID;
        uint transitID;
    }
    TransitDetails transit;

    mapping (string => EntityDetails) public entityCheck;
    mapping (uint => VaccineDetails) public vaccineCheck;
    mapping (uint => TransitDetails) public transitCheck;

    event entityEvent(string _name, uint _type, uint _id);
    event vacineEvent(string _name, uint _mfd, uint _exp, uint _mrp, uint _id);
    event transitEvent(uint _lat, uint _long, uint _vaccineId, uint _id);

    function EntityRegister(string memory _name, uint _entityType) public {
        _entityID.increment();
        require(!entityCheck[_name].existence, "The entity name already exists, try with a differeent name");
        require(uint(EntityType.Hospitals) >= _entityType, "Please select a lower entityType value");
        entity = EntityDetails(_name, EntityType(_entityType), true, _entityID.current());
        entityCheck[_name] = entity;
        emit entityEvent(_name, _entityType, _entityID.current());
    }

    function EntityDetailsCheck(string memory _entityName) public view returns (string memory, string memory, bool, uint) {
        string memory _entityType;
        if (entityCheck[_entityName].entityType == EntityType.Suppliers) _entityType = "Suppliers";
        if (entityCheck[_entityName].entityType == EntityType.Manufacturers) _entityType = "Manufacturers";
        if (entityCheck[_entityName].entityType == EntityType.Logistics) _entityType = "Logistics";
        if (entityCheck[_entityName].entityType == EntityType.Hospitals) _entityType = "Hospitals";
        if (entityCheck[_entityName].entityType == EntityType.Distributors) _entityType = "Distributors";
        return (
            entityCheck[_entityName].name,
            _entityType,
            entityCheck[_entityName].existence,
            entityCheck[_entityName].entityID
        );
    }

    function VaccineRegister(string memory _name, uint _mrp) public  {
        _vaccineID.increment();
        vaccine = VaccineDetails(_name, block.timestamp, block.timestamp + 700 days, _mrp, _vaccineID.current(), Status.PACKAGED);
        vaccineCheck[_vaccineID.current()] = vaccine;
        emit vacineEvent(_name, block.timestamp, block.timestamp +700 days, _mrp, _vaccineID.current());
    }

    function vaccineLocation(uint _lat, uint _long, uint _vaccineId) public {
        _transitID.increment();
        require(vaccineCheck[_vaccineId].status == Status.INTRANSIT, "Vaccine not in transit");
        transit = TransitDetails(_lat, _long, _vaccineId, _transitID.current());
        transitCheck[_transitID.current()] = transit;
        emit transitEvent(_lat, _long, _vaccineId, _transitID.current());
    }

    function vaccineStatus(uint _vaccineId) public view returns (string memory) {
        if(vaccineCheck[_vaccineId].status == Status.APPROVED) return "APPROVED";
        if(vaccineCheck[_vaccineId].status == Status.DISPATCHED) return "DISPATCHED";
        if(vaccineCheck[_vaccineId].status == Status.FITFORUSE) return "FITFORUSE";
        if(vaccineCheck[_vaccineId].status == Status.INTRANSIT) return "INTRANSIT";
        if(vaccineCheck[_vaccineId].status == Status.PACKAGED) return "PACKAGED";
        if(vaccineCheck[_vaccineId].status == Status.UNFIT) return "UNFIT";
        return "";
    }

    function vaccineAdminister(uint _vaccineId, uint8 _status) public  {
        require(uint(Status.FITFORUSE) >= _status, "Please select a lower status value");
        require(vaccineCheck[_vaccineId].vaccineID != 0, "No vaccine with this id");
        vaccineCheck[_vaccineId].status = Status(_status);
    }
}