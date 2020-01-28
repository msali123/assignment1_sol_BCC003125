const ArrayStorage = artifacts.require('ArrayStorage'); //Artifacts is an object injected by the truffle inside the test file .require(NameofSC);
//in the contract block we can access all the mocha testing functions
contract('ArrayStorage', () =>{
//it() is a functoin that first accepts a description of test & then accepts a callback
it("Testing the add function to add elements", async() =>{
//Our contracts instance that is an object that points to the deployed 
const arrayStorage = await ArrayStorage.deployed(); //await is used so that we can use a promise
await arrayStorage.add(20); //accessing the add function in our smart contract
const res = await arrayStorage.id(0); //storing the 0th index of our array to a const
assert(res.toNumber() === 20); //assert is a comparison,.toNumber isused to convert a Big Number to a JS number.
});

it("Get an element from array by index", async()=>{
const arrayStorage = await ArrayStorage.deployed();
await arrayStorage.add(30);
const result = await arrayStorage.get(0);
assert(result.toNumber() == 20);
});

it("Get all the elements", async()=>{
const arrayStorage = await ArrayStorage.deployed();
const result = await arrayStorage.getall();
const arr = result.map(id => id.toNumber());
assert.deepEqual(arr, [20,30]);
});

it("Get the length of an array", async()=>{
    const arrayStorage = await ArrayStorage.deployed();
    const length = await arrayStorage.returnlength();
    assert(length.toNumber() ===2);
    });
});