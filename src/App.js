// import React from "react";
// let x = React.createElement("div" ,{className:"App"} ,
//   React.createElement("h1" ,null, "Welcome to React")
// )


// function App() {
//   return (
    // <div className="App">
    //   <h1>Welcome to React</h1>
    //   <img />
    //   </div>

    //   x

//     <div> 
//     <h1>Excler</h1>
//     <p>para</p>
//     {username}
//     {100*100}
//     </div>
//   );
           
// }

// export default App;
  

// import React from "react";
// class App extends React.Component{
//   render(){
//     return(){
//       <div>
//       <h1>Class Component</h1>
//       </div>
//     }
//   }
// }
// export default App;


// function App(){
//   return {
//     <div>
//     <h1>Functional component</h1>
//     </div>
//   }
// } 
// export default App;

// const App=()=>{
//   return(
//     <h1>Arrow functional component</h1>
//   )
// }
// export default App;


//! component composition examples

// import React from "react";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// function App(){
//   return( 
//     <div className="app">
//       <Navbar/>
//       <Main/>
//       <Sidebar1/>
//       <Sidebar2/>
//       <Footer/>
//     </div> 
//   )
// }
// export default App;



// ! props
//  import React, { Component } from 'react'
//  import CBCPropEx1 from './propexample/CBCPropEx1';
 
//  export default class App extends Component {
//    render() {
//      return (
//        <div>
//         App
//         <CBCPropEx1
//         username="Nithin"
//         age={20}
//         hobbies={["studying , sleeping, reeding"]}
//         address={{city:"Hyd" , area:"maisammaguda"}}
//         isMarried={false}
//         sendFun={function(){alert("hi nithin")}}
//         />
//        </div>
//      )
//    }
//  }
 


// import React from 'react'
// import FBCPropex1 from './propexample/FBCPropex1';

// const App = () => {

//   return (
//     <div>
//         <FBCPropex1
//         username = "nithin"
//         IsLoggedIn={true}
//         Profile={["instagram","snapchat","facebook","x"]}
//         />
//       </div>
//   )
// }

// export default App;



///! props.children


  // import React from 'react'
  // import PropsChildrenex from './propexample/PropsChildrenex'
  // import SubChildProps from './propexample/SubChildProps'
  
  // const App = () =>{
  //     return (
  //       <div>
  //         <PropsChildrenex username="nithin" company="Google">
  //         <h1>This data is passing as a props to child components</h1>
  //         <SubChildProps/>
  //         </PropsChildrenex>
          
  //       </div>
  //     )
  //   }
  //  export default App;

   //CBCStateExample

// import React from 'react'
// import CBCStateEx from './Stateexamples/CBCStateEx'
// const App = () => {
//   return (
//     <div>
//       <h1>APP</h1>
//       <CBCStateEx />
//     </div>
//   )
// }

// export default App;
  
// import React from 'react'
// import MyForm from './components/myForm'



// function App() {
//   return (
//     <div className="App">
//      <MyForm></MyForm>
//      </div>
//   );
// }

// export default App;

// import React from 'react'
// import UseEffectEx from './HookExample/UseEffectEx'

// export const App = () => {
//   return (
//     <div>
//       <UseEffectEx />
//     </div>
//   )
// }
// export default App;


// import React from 'react'
// import RefExample from './HookExample/RefExample'

// export const App = () => {
//   return (
//     <div>
//       <RefExample />
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// import Task from './HookExample/Task'
// export const App = () => {
//   return (
//     <div><h2>Bahubali-1</h2>
//               <Task/>
//     </div>
//   )
// }
// export default App




// import React from 'react'
// import Navbar from './components/Navbar'
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Classroom from './pages/Classroom';
// import Assessment from './pages/Assessment';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile  from './pages/Profile';
// import MyAccount from './pages/MyAccount';
// import MySetting from './pages/MySettings';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Classroom/>}/>
//             <Route path='/assessment' element={<Assessment/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>} >
//                 <Route path='/profile/myaccount' element={<MyAccount/>}/>
//                 <Route path='/profile/mysetting' element={<MySetting/>}/>
//               </Route>
//             <Route path='*' element={<PageNotFound/>}/>

//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './crudcomponents/Home';
import Create from './crudcomponents/Create';
import Edit from './crudcomponents/Edit';
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App