import { useState } from "react";

const Country = ({country}) => {
    console.log(country);
    const {name, flags, population, area} =country;


    const [visited, setVisited] = useState(false)

    const handelVisit = () => setVisited(true);
    const passWithP = () => hVisitedCountry(country);

    return (
        <div className='country'>
           <h3>Name :{name?.common}</h3>
           <img src={flags.png} alt="" />
           <p>{population}</p>
           <p>Area:{area}</p>
           <button onClick={passWithP}>Mark visited</button>
           <button onClick={handelVisit}>Visited</button>
           
           {visited && 'done'}
           
        </div>
    );
};

export default Country;