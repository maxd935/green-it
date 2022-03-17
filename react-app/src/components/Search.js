import React, {useState} from 'react';

function Search () {
    const [city, setCity] = useState("")
    return (
        <div>
            <form action="">
                <label>Ville:</label>
                <input type="text"
                       value={city}
                       onChange={(e) => setCity(e.target.value)}
                />
            </form>
            <p>{city}</p>
        </div>
    );
};

export default Search;
