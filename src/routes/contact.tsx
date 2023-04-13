import { Form } from "react-router-dom";
import { useEffect, useState } from "react";

type Contact = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
  name: string,
  url: string
}
}

export default function Contact() {

  const [char, setChar] = useState([])

  return (
    <div id="contact">
        <p>{char.id}, {char.name}</p> 
      </div>
  );
}