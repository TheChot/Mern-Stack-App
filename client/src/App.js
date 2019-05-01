import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import store from './store';
import ItemModal from './components/itemModal';
import {    
  Container,
  

} from 'reactstrap';
import {Provider} from 'react-redux';
 
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <ItemModal />
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;