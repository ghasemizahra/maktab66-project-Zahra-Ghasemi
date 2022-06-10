// import React, { useState, useEffect } from "react";
// import Admin from "../Layouts/Admin"
// import {
//   Box,
//   Grid,
//   FormControl,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
// } from "@mui/material";
// import TableOrders from "./Stack/TableOrders";
// import axios from "axios";

// function WaitingOrder() {
//   const [row, setRow] = useState([]);

//   const [selectedValue, setSelectedValue] = React.useState("1");

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   // const getorders = async () => {
//   //   const res = await fetch(
//   //     `http://localhost:3002/orders?orderStatus=${selectedValue}`
//   //   );
//   //   const data = await res.json();
//   //   setRow(data);
//   // };
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3002/orders?orderStatus=${selectedValue}`)
//       .then((res) => setRow(res.data));
//   }, [selectedValue]);

//   console.log(row);

//   return (
//     <Grid container  >
//       <Grid item xs={12} md={8}>
//         <FormControl>
//           <RadioGroup
//             row
//             aria-labelledby="demo-row-radio-buttons-group-label"
//             name="row-radio-buttons-group"
//             sx={{ mr:30, mt:5 }}
//           >
//             <FormControlLabel
//               onChange={handleChange}
//               value="1"
//               control={<Radio />}
//               label="سفارشات تحویل داده شده"
//               sx={{mr:10}}
//             />
//             <FormControlLabel
//               onChange={handleChange}
//               value="2"
//               control={<Radio />}
//               label="سفارشات در حال تحویل "
//               sx={{mr:10}}
//             />
//           </RadioGroup>
//         </FormControl>
//       </Grid>
//       <Grid item xs={12} md={8}>
//         <TableOrders row={row} />
//       </Grid>
//     </Grid>
//   );
// }
// export default Admin(WaitingOrder) ;
