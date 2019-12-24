pragma solidity ^0.5.0;


contract Address{
    uint public numOfstd = 0;
    address payable private myAddress = 0xaD335c3c503aBd738Af9a7690FB41f9fadcBE91A;
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
