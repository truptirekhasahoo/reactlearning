import logo from './logo.svg';
import './App.css';
//import MyFirstcomp from './components/MyFirstcomp'
//import ClassComp from './components/ClassComp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import HeaderComp from './components/HeaderComp/HeaderComp'
// import MainComp from './components/MainComp/MainComp'
// import FooterComp from './components/FooterComp'
// import StateComp from './components/Personcomp/PersonComp'
// import PersonComp from './components/Personcomp/PersonComp'
// import AComponent from './components/ChlidParent/AComponent'
// import Acomponent from './components/Taskcomp/Acomponent'
// import Parent from './components/ChildToParent/Parent'

//import A from './components/ContextApi/A'
// import MyForm from './components/Form/MyForm'
//import RegisterForm from './components/RegisterForm/RegisterForm'
import Homepage from './components/Routing/Home'
function App() {
  return (
    <div className="App">
      {/* <HeaderComp />
      <MainComp />
      <FooterComp /> */}
     {/* <MyFirstcomp />
     <h2>Welcome to first react app</h2><br />

     <ClassComp /> 
     <button className="btn btn-dark">click me</button> */}
     {/* < PersonComp /> */}
      {/* <Acomponent />  */}
     {/* <Parent /> */}
     {/* <A />  */}
     {/* <MyForm /> */}
     {/* <RegisterForm /> */}
     
     <Homepage />
    </div>
  );
}

export default App;
