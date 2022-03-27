const fruit = [{ name: 'jackfruit' }, { name: 'mango' }, { name: 'orange' }]

const election = {
    manna: 2,
    josim: 1,
    sakib: 1,
    jayed: 2
}

const db = {}
const addTodb = item => {
    // db.manna = 2;
    // db['sakib']=1;
    db[item] = 1;
    console.log(db);

}