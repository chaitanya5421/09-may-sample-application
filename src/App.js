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

function App() {
  return (
    <div className="App">
        <Header />
        <ContactUs />
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
