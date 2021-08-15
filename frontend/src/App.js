import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

import { Header } from './componentes/Header';
import { Cards } from './componentes/Cards';
import{Footer} from './componentes/Footer'
import {Jumbotron} from './componentes/Jumbotron'
function App() {
    return (
        <div>
            <Header/>
            <Jumbotron/>
            <Cards/>
            <Footer/>
        </div>

    );


}

export default App;
