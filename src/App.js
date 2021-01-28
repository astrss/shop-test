import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ThemeProviderWrapper from './wrappers/ThemeProviderWrapper'
import ShopView from './pages/ShopView'

const App = () => {
  return (
    <ThemeProviderWrapper>
      <Router>
        <ShopView />
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
