import getBitconData from './components/api.getBitcoinData';
import LineChart from './components/LineChart';

const App = async () => {
  const container = document.createElement('div');

  const data = await getBitconData();
  const lineChart = LineChart({ data: data.prices });

  container.append(lineChart);

  return container;
};

export default App;
