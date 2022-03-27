// const fruit = [{ name: 'jackfruit' }, { name: 'mango' }, { name: 'orange' }]

// const election = {
//     manna: 2,
//     josim: 1,
//     sakib: 1,
//     jayed: 2
// }

const db = {}
const addTodb = item => {
    // three properties add on object dynameic
    // db.manna = 2;
    // db['sakib']=1;
    // db[item] = 1;
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('hero', JSON.stringify(db))

}