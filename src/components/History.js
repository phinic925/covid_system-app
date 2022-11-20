import React,{useEffect,useState} from 'react';
import { BarChart } from './Barchart';

function History(){
    const[data,setData] = useState({response: []})
    const[chartData, setChartData] = useState({
        labels: data.response.map((data) => data.day), 
        datasets: [
          {
            label: "Cases,deaths and tests",
            data: data.response.map((data) => data.cases.total),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
    
    });
    
   
    useEffect(() =>{
        fetch("https://covid-193.p.rapidapi.com/history",{
            method: "GET",
            params: {country: 'usa', day: '2020-06-02'},
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
<BarChart chartData={chartData}/>
        </>
    )
}
export default History;
