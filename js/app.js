// const fruit = [{ name: 'jackfruit' }, { name: 'mango' }, { name: 'orange' }]

// const election = {
//     manna: 2,
//     josim: 1,
//     sakib: 1,
//     jayed: 2
// }

let db = {}
const addTodb = item => {
    // three properties add on object dynameic
    // db.manna = 2;
    // db['sakib']=1;
    // db[item] = 1;
    const storedData = localStorage.getItem('hero')
    if (storedData) {
        console.log(typeof storedData);
        db = JSON.parse(storedData);
    }
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('hero', JSON.stringify(db))

}

const removeItem = item => {
    // get read local storage
    const stroedData = localStorage.getItem('hero')
    // convert string to js object
    const storageObject = JSON.parse(stroedData);
    // delete item local storage
    delete storageObject[item];
    // again set local storage 
    localStorage.setItem('hero', JSON.stringify(storageObject))
}