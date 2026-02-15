function beverage(name, drank) {
    console.log("Consuming " + name);
    let prom = new Promise(function (resolve, reject) {
        let err = false;
        if (err)
            reject("Did not drinkall of the " + name);
        else
            resolve("Finished drinking " + name);
    });
    prom.then((res) => {
        console.log(res);
    }).catch((res) => {
        console.log(res);
    });
    return prom;
}
let x = beverage("Coke", true);
//console.log(x);
console.log("Finished Program");
