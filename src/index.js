import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux ToolKit/Store';
// import ComponentA from './Context/ComponentA';
// import Myserver from './Myserver';
// import Myserveredit from './Myserveredit';
// import Axios from './Axios';
// import ParentComp from './Component/ParentComp';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from './ParentChild/NavBar';
// import Parent from "./ParentChild/Parent";
// import Child from "./ParentChild/Child";
// import Home from './Home';

// import AppointmentForm from './AppointmentForm';
// import Home from "./QuizApp/Home";
// import One from "./QuizApp/One";
// import Two from './QuizApp/Two';
// import Three from './QuizApp/Three';
// import Four from './QuizApp/Four';
// import Five from './QuizApp/Five';
// import Thankyou from './QuizApp/Thankyou';
// import Home from './Pages/Home';
// import  About from "./Pages/About"
// import Blogs from "./Pages/Blogs";
// import Contact from "./Pages/Contact";
// import Layout from './Pages/Layout';
// import Nopage from "./Pages/Nopage";

// import Render from './Render';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>

{/* <Render/> */}

<Provider store={store}>
<App/>
</Provider>
 
    </div>

);


