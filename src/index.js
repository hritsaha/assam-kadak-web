import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


const el = document.getElementById('root')
const root = ReactDom.createRoot(el)

root.render(
      <BrowserRouter>
                <App></App>
      </BrowserRouter>

)