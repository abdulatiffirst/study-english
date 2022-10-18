import './App.css';


import MainPage from './Pages/main-page/main';

import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
