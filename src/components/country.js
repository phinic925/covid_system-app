import React from 'react';

function Country(){
    const[data, setData] = useState({response: []});
    useEffect(() =>{
        fetch("https://covid-193.p.rapidapi.com/countries",{
            method: "GET",
            headers: {
                'X-RapidAPI-Key': '4233e2fae8msha32e5c72e68fecep119425jsn7087534b5913',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                
            },
            
        })
        .then(res=> res.json())
        .then(data => {
           
            setData(data)
            console.log(data)
        });

    }, []);
    return(
        <>
        {data.response.map((e) => {
            return(
                <>
                  <ul key={e.Country}class="list-group">
  <li class="list-group-item">{e.Country}</li>
  
</ul>
                </>
              
            )
        })}
        </>
    )
}
export default Country;