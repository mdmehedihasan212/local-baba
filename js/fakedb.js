let dataBase = {};

const addToDB = item => {

    const storedData = localStorage.getItem('fakeData');
    if (storedData) {
        dataBase = JSON.parse(storedData);
    }

    if (item in dataBase) {
        dataBase[item] = dataBase[item] + 1;
    }
    else {
        dataBase[item] = 1;
    }
    localStorage.setItem('fakeData', JSON.stringify(dataBase))
}

const removeToDB = item => {
    const storedData = localStorage.getItem('fakeData')
    if (storedData) {
        const storedObject = JSON.parse(storedData)
        delete storedObject[item]

        localStorage.setItem('fakeData', JSON.stringify(storedObject))
    }
}