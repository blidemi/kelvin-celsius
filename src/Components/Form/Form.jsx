import { useState } from "react";
import axios from 'axios';



const Form = ({setData}) => {

    const [city, setCity] = useState('');
    const getWeather = (city) =>{
        let KEY = 'f4833cf990dc92ef43563c9b00da2a78';
        let APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
        axios(APILink)
        .then(({data}) => {
            console.log(data);
            
            setData(data);
            setCity('')
        })
    }

    return (
        <div className="form">
        <input type="text" onChange={(event)=>{
        setCity(event.target.value);
        }}/>  
        <button onClick={()=>{
            getWeather(city)
        }}>get</button>  
        </div>
    );
};

export default Form;
