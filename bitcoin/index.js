import App from './src/App';

const root = document.getElementById('root');

(async () => {
  const app = await App();
  root.append(app);
})();
