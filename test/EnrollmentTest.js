const Enrollment = artifacts.require('Enrollment');
contract('Enrollment',() => {
it('Should be deployed', async() =>{
const enrollment = await Enrollment.deployed();
console.log(enrollment.address);
assert(enrollment.address !='');
});
});

contract('Enrollment',()=>{
it("Checking the balance", async() =>{
const enrollment = await Enrollment.deployed();
const result= await enrollment.getBalance();
assert(result != 0);
});
});

contract('Enrollment',()=>{
it("Getting the address", async()=>{
const enrollment = await Enrollment.deployed();
const result = await enrollment.getAddress();
assert(result == '0x3a38E94f0662c2407194074F9F7d69A3CDCEc479');
assert(result != '');
console.log(result);
});
});

contract('Enrollment', ()=>{
it('Checking the paytoenroll', async()=>{
const enrollment = await Enrollment.deployed();
const result = await enrollment.paytoenroll(123,'Muhammad Sameer',true,1);
assert(result != 0);
});


});