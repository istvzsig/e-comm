import React from "react";
import "./App.css";
import Main from './components/Main/Main';
import ProductsList from './components/ProductsList/ProductsList';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/filteredProducts/:type"
              element={<ProductsList />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
