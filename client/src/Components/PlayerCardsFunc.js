import React from 'react';
import { useFetch } from '../Hooks/useFetch';


function PlayerCardsFunc() {
    const { data, loading } = useFetch("https://source.unsplash.com/featured/?soccer,womens");


return(
    
    <div>
        {console.log(data)}
        <img src={data.url} alt='soccer-game' />
    </div>
)
}

export default PlayerCardsFunc