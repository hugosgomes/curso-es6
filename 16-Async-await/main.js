const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

//ES6
// minhaPromise().then(response => {
//     console.log(response);
// }).catch(err => {

// });

//A partir do ES8
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();