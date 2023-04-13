import { Outlet, Link } from "react-router-dom";
import {useState} from "react";
import Contact from "./contact";
import { useEffect } from "react";

export const Root = ()  => {

  const [char,setChar] = useState([])

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => { if(!response.ok)
                         throw new Error(`${response.status}`)
                         return response.json()})
    .then((data) => { console.log(data)
                      setChar(data)})
    .catch((error) => {
      if(error.message === "404")
      console.log(`Errore ${error.message}.Città non trovata`)
      if(error.message === "400") 
      console.log(`Error ${error.message}. Nessun dato inserito`)
      })

 }, [] );

  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>{char[0].id}</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
            <li>
              <Link to={`contacts/3`}></Link>
            </li>
            <li>
              <Link to={`contacts/4`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/5`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/6`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/7`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/8`}>Your Name</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}