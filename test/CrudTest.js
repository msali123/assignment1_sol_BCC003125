const Crud = artifacts.require('Crud');

contract('Crud', ()=>{
it('Testing the create function',async() =>{
    const crud = await Crud.deployed();
    await crud.create("Sameer");
    await crud.create("Anas");
    await crud.create("Mudassir");


    const user = await crud.read(2);
    assert(user[0].toNumber() === 2);
    assert(user[1] === "Anas");
});

it("Testing the update function", async()=>{
    const crud = await Crud.deployed();
    await crud.create("Sameer");
    await crud.update(1,"Anas");
    const up = await crud.read(1);
    assert(up[0].toNumber() === 1);
    assert(up[1]==="Anas");
});

it("Testing the remove function", async()=>{
    const crud = await Crud.deployed();
    await crud.create("Sameer");
    await crud.remove(11);
    try {
        await crud.read(1);
    } catch (error) {
        assert(error.message.includes("User doesnt exists"));
        return;
    }
    assert(false);
});
});