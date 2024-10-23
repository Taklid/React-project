import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Country.css'


const Countries = () => {
    const [countries, setcountries] = useState([]);

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountries(data))
    }, [])


    const hVisitedCountry = country => {
        console.log(country);
        console.log('add');
    }
    return (
    
        <div>
                <h3>Countries:{countries.length}</h3>
                <div>
                    <h3>Visited countries</h3>
                </div>
                <div className="country-container">
            
            
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    hVisitedCountry={hVisitedCountry}
                     country={country}></Country>)
            }
        </div>
            </div>
    
       
    );
};

export default Countries;