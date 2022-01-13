import getBitconData from './components/api.getBitcoinData';
import Dropdown from './components/Dropdown/Dropdown';
import LineChart from './components/LineChart';
import Currencies from './constants/Currencies';
// import ImgSrc from './img.jpg';
const creatChart = async (currency = Currencies.AmericanDollars) => {
  const data = await getBitconData(currency);

  const lineChart = LineChart({ data: data.prices });

  return lineChart;
};
const App = async () => {
  const container = document.createElement('div');
  let lineChart = await creatChart();
  const dropdown = Dropdown();

  dropdown.onchange = async (event) => {
    const carrency = event.target.selectedOptions[0].value;
    container.removeChild(lineChart);
    lineChart = await creatChart(carrency);
    container.append(lineChart);
  };

  container.append(dropdown, lineChart);

  // const img = document.createElement('img');
  // img.src = ImgSrc;

  // container.append(img);

  return container;
};

export default App;
