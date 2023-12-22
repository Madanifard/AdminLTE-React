import ReactDOM from 'react-dom/client'
import AppRoute from './App-Route.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>,
)
