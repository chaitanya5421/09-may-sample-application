import './App.css';
import FunctComp from "./Components/FunctComp";
import ClassComp from './Components/ClassComp';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
        <FunctComp name="React" duration="3 Months" />
        <ClassComp location="Bangalore" />
        {/* <Button value="Addtocart" />
        <Button value="purchase" />
        <Button value="submit" /> */}
    </div>
  );
}

export default App;
