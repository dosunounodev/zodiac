import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from 'routes/RootRouter';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <TopBar />
        <RootRouter />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
