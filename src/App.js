import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import CalculatorScreen from './screens/CalculatorScreen';

function App() {
  return (
    <Router>
    <Header />
    <main className="App">
      <Container>
      <Route path="/calculator" component={CalculatorScreen} />
      </Container>
      
    </main>
    <Footer />
    </Router>
  );
}

export default App;
