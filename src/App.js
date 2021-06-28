import React, { useState } from 'react'
import './App.css'
import { Provider } from './ContextApi.js'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Title from './Components/Title'
import Room from './Components/Room'
import HomePage from './Components/HomePage'

export default function App() {
   let currentRoomName;
   let currentRoom;
   const [rooms, setRoom] = useState([]);
   const getRoomIndex = ((index) => {
      currentRoomName = rooms[index].name;
      currentRoom = rooms[index];
   });

   return (
      <div className='App'>
         <Router>
            <Title title="Smart House" />
            <Switch>
               <Route exact path="/" component={() => (
                  <Provider value={rooms}>
                     <HomePage index={getRoomIndex} />
                  </Provider>
               )} />
               <Route exact path='/:currentRoomName' component={() => (
                  <Provider value={currentRoom}>
                     <Room />
                  </Provider>
               )} />
            </Switch>
         </Router>

      </div>
   )
}
