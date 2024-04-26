import ReactDOM from 'react-dom/client';
import App from '../app/App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider theme={{
        components: {
          Pagination: {
            itemBg: '#ffffff',
            colorBgTextHover: '#fa6801',
            colorText: '#ffffff',
            itemLinkBg: '#ffffff',
            colorLink: 'red',
          }
        }
      }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);
