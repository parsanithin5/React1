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

import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar1 from "./components/Sidebar1";
import Sidebar2 from "./components/Sidebar2";
import Footer from "./components/Footer";

function App(){
  return( 
    <div className="app">
      <Navbar/>
      <Main/>
      <Sidebar1/>
      <Sidebar2/>
      <Footer/>
    </div> 
  )
}
export default App;



