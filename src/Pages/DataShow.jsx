import axios from "axios";
import React, { useEffect, useState } from "react";

const DataShow = () => {
    let [newData, setNewData] = useState([])
  useEffect(() => {
    let api = "http://localhost:3000/Signup";
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setNewData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
let hack = 
newData.map((e)=>(


<tr key={e._id} className="border-1 bg-amber-300">
<td>{e._id}</td>
<td>{e.username}</td>
<td>{e.email}</td>
<td>{e.password}</td>
<td>{e.PNo}</td>

</tr>



));
  return <>
  

<table border={1} className="border border-collapse w-full text-center h-full  border-amber-100  table-fixed">
    <tr className="border-2">
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Phone Number</th>
    </tr>
    {hack}
</table>

  
  </>;
};

export default DataShow;
