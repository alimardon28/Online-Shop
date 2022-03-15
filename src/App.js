import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import Card from './Pages/Card';
import Contacts from './Pages/Contacts';
import Ordered from './Pages/Ordered';
import Ordering from './Pages/Ordering';
import Products from './Pages/Products';
import Selected from './Pages/Selected';
import ServiceRequirements from './Pages/ServiceRequirements';
import Singleproducts from './Pages/SingleProducts';


function App() {

  return (
    <>

          <Header/>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/selected' element={<Selected/>} />
            <Route path='/singleproducts/:userId' element={ <Singleproducts/>}/>
            <Route path='/card' element={ <Card/>} />
            <Route path='/servicesrequirements' element={ <ServiceRequirements/>} />
            <Route path='/cantacts' element={<Contacts/>} />
            <Route path='/ordering' element={<Ordering/>} />
            <Route path='/ordered' element={<Ordered/>} />
          </Routes>

          <Footer/>

    </>
  );
}

export default App;
