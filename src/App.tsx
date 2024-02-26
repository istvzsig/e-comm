import React from "react";
import "./App.css";
import Main from './components/Main/Main';
import Product from './components/Product/Product';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/product/:type/:id"
              element={<Product />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
