import './styles/style.scss'
import './cabecalho'
import Cabecalho from './cabecalho'
import { Outlet } from 'react-router-dom'




function App() {
    return(
        <>
            <Cabecalho />
            <Outlet />
        </>
    )
}

export default App