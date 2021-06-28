import React, { useState } from 'react'
import '../App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Consumer } from '../ContextApi';

export default function Room(props) {
    const [smartThings, setSmartThing] = useState([]);
    const powerOnOff = ((power) => {
        if(power == 'on'){
            return 'green';
        }
        else{
            return 'red';
        }
    })
    return (
        <div >
            <Link to="/" >Homepage</Link>
            <Consumer>
                {(value) => (
                    <div>{console.log(value.path)}
                        Room name: {value.name}<br />
                        Room Type: {value.type}<br />
                        <div>

                        {value.smartThings.map((thing,index) => {
                            return (
                                <div >
                                    <button onClick={()=> {
                                        if(thing.power == 'on'){
                                            thing.power = 'off';
                                            document.getElementById(`thing${index}`).style.backgroundColor = 'red';
                                        }
                                        else{
                                            thing.power= 'on';
                                            document.getElementById(`thing${index}`).style.backgroundColor = 'green';
                                        }
                                    }} id={`thing${index}`} className="thingBox"  style={{ backgroundColor: powerOnOff(thing.power) }} >{thing.name}</button>
                                </div>
                            )
                        })}<br/>
                        </div>
                        <button id='addPlus' onClick={
                            () => {
                                document.getElementById('addPlus').style.display = 'none';
                                document.getElementById('addThing').style.display = 'block';
                            }
                        }>add new thing</button>
                        <div id="addThing" >

                            <select id="selectedThing">
                                <option value="Light">Light</option>
                                <option value="TV">TV</option>
                                <option value="Radio">Radio</option>
                                <option value="Side Lamp">Side Lamp</option>
                                <option value="Speaker">Speaker</option>
                            </select><br />
                            <button onClick={() => {
                                let e = document.getElementById('selectedThing');
                                let temp = {
                                    name: e.options[e.selectedIndex].innerHTML,
                                    power: 'off'
                                };
                                document.getElementById('addPlus').style.display = 'block';
                                document.getElementById('addThing').style.display = 'none';

                                value.smartThings.push(temp);
                                setSmartThing(value.smartThings);
                                setSmartThing([...smartThings]);
                            }} >add</button>
                        </div>
                    </div>
                )}
            </Consumer>
        </div>
    )
}