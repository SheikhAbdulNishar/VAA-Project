import NavBar from "./components/navigation-bar";
import ProductCard from "./components/product-card";
import React from 'react';
import {ReactComponent as ReactLogo} from './animations/logo.svg';
const App = () => {
  return ( 
    <div className="App">
      <NavBar></NavBar>
      <div className="contentArea row">
        <div className="two col-lg-12">
          <ProductCard></ProductCard>
          <div className="assistant">
            <ReactLogo></ReactLogo>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default App;