import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

import "./App.css";

import Routes from "./components/Routes";
import Layout from "./hoc/Layout";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
