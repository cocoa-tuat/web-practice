import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Body/Main';
import Footer from './components/Footer/Footer';


class App extends React.Component {
  render () {

   return (
      <div className="App">
       <Header />
       <Main />
       <Footer />
      </div>
   );
  }
}

export default App;

