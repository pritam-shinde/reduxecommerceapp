import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/global.css'

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<><Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider></>)