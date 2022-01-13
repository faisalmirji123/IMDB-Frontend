
import React from "react";


function Donatepage() {
  const data = [
    {
      id: 0,
      name: "faiq",

      event_name: "plantation",
      Amount_donated: "10000",
    },
    {
      id: 1,
      name: "saif",

      event_name: "child Education",
      Amount_donated: "20000",
    },
    {
      id: 2,
      name: "atfan",

      event_name: "Charity",
      Amount_donated: "20000",
    },
    {
      id: 3,
      name: "atfan",

      event_name: "Charity",
      Amount_donated: "20000",
    },
  ];

  
    
     const data = {data.map((user) => (
      
      return
            <h2 key={user.id}> (`Name:${user.name} ID:${user.id}     event_name: ${user.event_name}  Amount_donated:${user.Amount_donated}`)</h2>
      
      
      ))}
    
  
}

export default Donatepage;
