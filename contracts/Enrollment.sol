pragma solidity ^0.5.0;


contract Enrollment{
    uint public numOfstd = 0;
    address payable private myAddress = 0x3a38E94f0662c2407194074F9F7d69A3CDCEc479;
    enum regType{
     onSite, //0
     onLine //1
        }
    struct Student{
       uint rollNo;
       string name;
       bool degree;
       regType registype;
    }
    modifier minAmount(){
        if(msg.value >= 2 ether){
            _;
        }
        }
    mapping (uint => Student) public students;
    function getBalance() public view returns(uint){
    return myAddress.balance;
    }
    function paytoenroll(uint  _rollNo,string memory _name,bool  _degree, regType  _registype) public payable minAmount(){
    students[_rollNo] = Student(_rollNo,_name,_degree,_registype);
    numOfstd = numOfstd+1;
    myAddress.transfer(msg.value);
    }

    function getAddress() public view returns(address){
    return myAddress;
}

}
