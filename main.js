const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
const quoteLine = document.querySelector('.quote')
const queryButton = document.querySelector('.query')

queryButton.addEventListener('click', getQuote)


async function getQuote(){
    try{
        let res = await fetch(url)
        let data = await res.json()
        quoteLine.innerHTML = data

    }
    catch (err) {
        console.log(err)
    }
}