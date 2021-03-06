async function fetchBalance(){
    var url = `https://server.duinocoin.com/balances?username=DucoCommunistGov`;
    var data = await fetch(url).then(x=>x.json()).then(data=>data);
    var price = data.result[0].balance * await fetch("https://server.duinocoin.com/api.json").then(x=>x.json()).then(data=>data).then(price=>price["Duco price"])
    var string = `${data.result[0].balance.toFixed(5)} DUCO ~ $${price.toFixed(5)} USD`;
    return string;
}

async function fireFetchBal(){
    document.getElementById("BalShower").innerHTML = await fetchBalance();
    setTimeout(fireFetchBal(), 7500)
}