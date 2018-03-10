import React from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
       <Header />
       <Main />
       <Footer />
      </div>
    );
  }
}

export default App;
