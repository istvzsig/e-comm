import React from "react";
import "./App.css";
import Main from './components/Main/Main';
import ProductPage from './components/Product/ProductPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/products/:type/:id"
              element={<ProductPage />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
