import React from 'react'
import './Assest/Style/App.css'
import AppRouter from './Routes/Approuter'
import {Provider} from 'react-redux'
import store from './Redux/store'

 
function App() {
  return (
    <div className='app'>
      <Provider store={store}>
      <AppRouter/>

      </Provider>
    </div>
  );
}

export default App;