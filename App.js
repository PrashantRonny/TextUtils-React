import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
     setAlert({ msg: message,
      type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 2000);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#24244a';
      showAlert("Dark mode has been anabled", "success");
      document.title = 'TextUtills - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtills is Amazing App';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtills Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been anabled", "success");
      document.title = 'TextUtills - Light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
        <NavBar title="TextUtill" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router>         */}
      
    </> 
);
}

export default App;
