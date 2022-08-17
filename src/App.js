import './App.css';
import FunctComp from "./Components/FunctComp";
import ClassComp from './Components/ClassComp';
import Button from './Components/Button';
import StyleComponent from './Components/stylescomponents/StyleComponent';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListsandKeys from './Components/ListsandKeys';
import Conditionalrend from './Components/Conditionalrend';
import ContactUs from './Components/Contactus/ContactUs';
import LifeCyclemethods from './Components/lifecyclemethods/LifeCyclemethods';
import Userdata from './Components/userdata/Usersdata';
import Pagination from './Components/pagination/Pagination';
import {Routes,router,Route} from "react-router-dom";
import Routing from './Components/Routing/Routing';

function App() {
  return (
    <div className="App">
        <Header />
        <Routing />
      

        {/* <LifeCyclemethods /> */}
        {/* <Userdata /> */}
        {/* <Pagination /> */}
        {/* <ContactUs /> */}
        {/* <Conditionalrend /> */}
        {/* <ListsandKeys /> */}
        {/* <FunctComp name="React" duration="3 Months" />
        <ClassComp location="Bangalore" /> */}
        {/* <Button value="Addtocart" />
        <Button value="purchase" />
        <Button value="submit" /> */}
        {/* <StyleComponent /> */}

    </div>
  );
}

export default App;
