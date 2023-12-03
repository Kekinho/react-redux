


export async function fetchStockData() {
    const url = process.env.REACT_APP_STOCK_DATA_URL;
    const response = await fetch(url);
    const data = await response.json();
    return data.acoes;
  }