// import React from 'react';

// const Header = () => {
//   return <nav>
//     <ul className = "right">
//       <li><a href="">Menu</a></li>
//       </ul>
//       </nav>
//      <div className= "menu-btn">
//        <div className = "menu-btn_burger"></div>
//        </div>

// };
// export default Header;
import React from "react";
import { Table } from "react-bootstrap";

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

  return (
    <div>
      {data.map((user) => (
        <div style={{ marginBottom: 100 }}>
      
            <h2>{`Name:${user.name} ID:${user.id}     event_name: ${user.event_name}  Amount_donated:${user.Amount_donated}`}</h2>
         
        </div>
      ))}
    </div>
  );
}

export default Donatepage;
