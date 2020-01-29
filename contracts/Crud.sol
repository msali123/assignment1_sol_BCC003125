pragma solidity ^0.5.12;


contract Crud{
struct user{
    uint id;
    string name;
}

user[] public users;

uint public _id = 1;

function create(string memory _name) public {
users.push(user(_id,_name));
_id ++;
}

function read(uint id) public view returns(uint, string memory) {
     for(uint i = 0; i < users.length; i++) {
      if(users[i].id == id) {
    return(users[i].id,users[i].name);
      }
    }
}

function update(uint id,string memory name) public  {
for(uint i = 0; i < users.length; i++) {
      if(users[i].id == id) {
              users[i].name = name;
              }
          }
        }

function remove(uint id) public{
for(uint i = 0; i < users.length; i++) {
      if(users[i].id == id) {
             delete users[i];
              }
          }
}
}