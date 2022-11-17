import React, {useState, useEffect} from 'react';



function CovidTable(){
    const[data, setData] = useState({response: []});
    const[search,setSearch] = useState("")
   
    useEffect(() =>{
        fetch("https://covid-193.p.rapidapi.com/statistics",{
            method: "GET",
            headers: {
                'X-RapidAPI-Key': '4233e2fae8msha32e5c72e68fecep119425jsn7087534b5913',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                
            },
            
        })
        .then(res=> res.json())
        .then(data => {
            // const statistics =[];
            
            // for (const key in data){
            //     const statistic = {
            //       id:key,
            //       ...data[key]
            //     };
            //     statistics.push(statistic);
            //   }
            setData(data)
            console.log(data)
        });

    }, []);



    return (
        <>
   <div className="input-group col-xs-4 grp">
            <input
            type="text"
            placeholder="Search Country"
            className="form-control"
            onChange={(e)=>setSearch(e.target.value) }
        
                
                
            />
            <button className ="btn btn-primary" > search </button>

     
      
            </div>        

<div className="table-responsive">
      <table className=" table table-bordered table-stripped tabl">
        <thead>
          <th>Continent</th>
          <th>Country</th>
          <th>Population</th>
          <th>Deaths</th>
          <th>Cases</th>
          <th>Tests</th>
          
        </thead>
      {data.response.map((e, i) => {
        return (
          <>
            <tr key={e.continent}>
              <td>{e.continent}</td>
              <td>{e.country}</td>
              <td>{e.population}</td>
              {/* <td>{e.cases}</td>
               <td>{e.population}</td>
               <td>{e.population}</td> */}
              {/* <td>{data.bids[i].price}</td>
              <td>{data.bids[i].amount}</td> */}
            </tr>
          </>
        )
      })}
      </table>
    </div>
        
        </>
    )
}
export default CovidTable;