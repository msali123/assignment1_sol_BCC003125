pragma solidity ^0.5.12;

contract ArrayStorage{

uint[] public id;
function add(uint _id) public  returns(uint){
return id.push(_id);

}

function get(uint i) public view returns(uint) {
    return id[i];
}

function getall() public view returns(uint[] memory){
    return id;
}

function returnlength() public view returns(uint){
return id.length;
}
}