import React, { useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css'
import { Consumer } from '../ContextApi';


export default function HomePage(props) {
    const [rooms, setRoom] = useState([]);
    const [name, setName] = useState([]);
    const [color, setColor] = useState([]);
    const [Type, setType] = useState([]);

    return (
        <div >
            <Consumer>
                {(value) => (
                    <div>
                        <div className="flexed">{setRoom(value)}
                            {rooms.map((room,index) => {
                                return (
                                    <Link onClick={()=>{props.index(index)}} to={room.path} className="box" style={{ backgroundColor: `${room.color}` }}>
                                        <div >
                                            {room.name}
                                        </div>
                                    </Link>
                                )

                            })
                            }
                        </div>
                        <button id="add" onClick={() => {

                            document.getElementById('addRoom').style.display = "block";
                            document.getElementById('add').style.display = "none";

                        }}>+</button>
                        <div id="addRoom">
                            <input type="text" placeholder="Name" onChange={(inputValue) => { setName(inputValue.target.value); }} /><br />
                            <input type="text" placeholder="Color" onChange={(inputValue) => { setColor(inputValue.target.value); }} /><br />
                            <select id="selected">
                                <option value="Room">Room</option>
                                <option value="Kitchen">Kitchen</option>
                                <option value="Bathroom">Bathroom</option>
                                <option value="Guest Room">Guest Room</option>
                                <option value="Living Room">Living Room</option>
                            </select><br />
                            <button onClick={() => {
                                var e = document.getElementById('selected');
                                let selected = e.options[e.selectedIndex].innerHTML;
                                let temp = {
                                    name: name,
                                    color: color,
                                    type: selected,
                                    path: `/${name}`,
                                    smartThings: []
                                };
                                value.push(temp);
                                setRoom(value);{console.log(value)}
                                setRoom([...rooms]);
                                document.getElementById('addRoom').style.display = "none";
                                document.getElementById('add').style.display = "block";
                            }} >ADD</button>
                        </div>
                    </div>
                )}
            </Consumer>

        </div >
    )
}