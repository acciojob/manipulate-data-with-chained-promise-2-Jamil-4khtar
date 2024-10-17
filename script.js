// const { promises } = require("supertest/lib/test");

//your JS code here. If required.
function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = [1, 2, 3, 4]
            resolve(data)
        }, 3000);
    })
}
function filterOut(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredData = data.filter(t => t%2 == 0);
            resolve(filteredData);
        }, 1000);        
    })
}
function multiply(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const multipliedNumber = data.map(t => t*2)
            resolve(multipliedNumber);
        }, 2000);
    })
}

processData()
.then((res) => {
    console.log(res);
    return filterOut(res)
})
.then((res) => {
    const div = document.getElementById("output")
    div.innerText = res
    return multiply(res)
})
.then((res) => {
    const div = document.getElementById("output")
    div.innerText = res
})