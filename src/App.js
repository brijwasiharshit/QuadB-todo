import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import AboutPage from './components/About.js';
import ContactPage from './components/ContactPage.js';
import appStore from './utils/AppStore.js';
import AppStore from './utils/AppStore';
import { Provider } from 'react-redux';

function App() {
 
  return (
   
      <div className="App bg-blue-500">
       <Provider store = {appStore} >
       <Header />
    <Outlet />
       </Provider>
 

    </div>
   
    
  );
}

export default App;
