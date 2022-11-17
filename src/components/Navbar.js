import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
         <header className='header4'>
        
        <nav>
            <ul>
               <li><Link to='/'> Statistics </Link></li> 
               <li> <Link to='/history'>History</Link></li>
               <li> <Link to='/countries'> Countries </Link></li>
            </ul>
        </nav>
    </header>
    
        </>
    )
}
export default Navbar;