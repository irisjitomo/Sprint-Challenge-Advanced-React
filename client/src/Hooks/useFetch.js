import React, { useState, useEffect } from 'react'


// export const useFetch = (url, defaultRes) => {
//     const [data, setData] = useState(defaultRes);

//     async function getDataFromApi(url) {
//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             setData({
//                 isLoading: false,
//                 data
//             })
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     useEffect(() => {
//         getDataFromApi(url);
//     }, [url]);

//     return data;
// }

export const useFetch = (url) => {
    const [data, setDataState] = useState([]);
    const [loading, setLoadingState] = useState(true);
    useEffect(() => {
      setLoadingState(true);
      fetch(url)
        // .then(j => j.json())
        .then(data => {
          setDataState(data);
          setLoadingState(false);
        });
    }, [url]);
    return { data, loading };
  }

//   export default useFetch;