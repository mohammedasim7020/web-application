import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent'
import SecondComp from './components/SecondComp';
import BasicProps from './Props/BasicProps';
import CustomBtn from './Props/Button';
import Card from './Props/Card';
import SecondProps from './Props/SecondProps';
import Todo from './Todo/Todo';
import SimpleTodoApp from './Todo/SimpleTodo';


function App() {
  return (
    <div>
       {/* <FirstComponent /> */}
       {/* <SecondComp/> */}
       {/* <CustomBtn title="FROM APP.js" /> */}
       {/* <BasicProps/> */}
       {/* <Card firstName="Mohammed" lastName="Aasim" email="aasim@gmail.com" /> */}
       {/* <SecondProps/> */}
       {/* <Todo/> */}
       <SimpleTodoApp/>
    </div>
  );
}

export default App;
