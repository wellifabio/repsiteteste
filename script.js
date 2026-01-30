async function dolar(bt) {
    const api = fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    const json = await (await api).json();
    bt.innerHTML = `R$ ${Number(json.USDBRL.bid).toFixed(2).replace('.',',')}`;
}