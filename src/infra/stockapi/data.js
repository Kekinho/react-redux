


export async function fetchStockData() {
    const url = process.env.REACT_APP_STOCK_DATA_URL;
    //const url = 'https://script.google.com/macros/s/AKfycbwkLlFuLdRJi9lxl67VABmTNC-zyvAQXp93cAeEVQT1TEyPw2YVfFMVQ2NaEijqlAI3fA/exec';
    const response = await fetch(url);
    const data = await response.json();
    return data.acoes;
  }