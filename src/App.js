import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import CalculatorScreen from './screens/CalculatorScreen';
import ResultScreen from './screens/ResultScreen'
import LoginScreen from './screens/LoginScreen';
import ThankYouScreen from './screens/ThankYouScreen';


function App() {
  return (
    <Router>
    <Header />
    <main className="App">
      <Container>
      <Route path="/" component={CalculatorScreen} exact/>
      <Route path="/login" component={LoginScreen} />
      <Route path="/result" component={ResultScreen} />
      <Route path="/thankyou" component={ThankYouScreen} />
     
      </Container>
      
      
    </main>
    <Footer />
    </Router>
  );
}

export default App;
