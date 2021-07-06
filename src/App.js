import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RootRouter from 'routes/RootRouter';
import TopBar from 'components/TopBar'
import Footer from 'components/Footer';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <TopBar />
      <RootRouter/>
      <Footer />
    </Router>
  );
}

export default App;
