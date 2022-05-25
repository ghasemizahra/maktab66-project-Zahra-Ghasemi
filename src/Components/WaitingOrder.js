// import React, { useEffect, useState } from "react";

// import TablePagination from "@mui/material/TablePagination";
// import { makeStyles } from "@mui/styles";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// // import { OrdersApi } from "../../../api/OrdersApi";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { Button } from "@mui/material";
// import moment from "jalali-moment";
// import { useMemo } from "react";
// import {
//   Box,
//   CircularProgress,
//   Pagination,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography
// } from "@mui/material";
// import { useFetch } from "../hooks/useFetch";
// const useStyle = makeStyles({
//    root: {
//       background: "#E6BC98",
//       margin: "auto",
//       width:"70%",
//       padding:50,
//       overflow: "hidden",
//       border: "1px solid black",

//       "& .MuiButtonBase-root svg": {
//          transform: "rotate(180deg)",
//       },
//       "& .row_cell": {
//          width: 300,
//          textAlign: "center",
//       },
//       "& .MuiTableCell-head ": {
//          background: "black",
//          color: "white",
//          padding: 40,
//       },
//       "& .MuiButton-root": {
//          background: "black",
//          display: "inline-block",
//          marginRight: "45rem",
//          marginBottom : "1rem"
//       },
//       "& .MuiTableContainer-root::-webkit-scrollbar": {
//          display: "none" /* for Chrome, Safari, and Opera */,
//       },
//    },
// });

// export default function WaitingOrder() {
//   const limit = useMemo(() => 2, []);
//   const [activePage, setActivePage] = useState(1);
//   const { data, loading, error } = useFetch(
//     `/products?_page=${activePage}&_limit=${limit}}`
//   );

//   if (error) {
//     return (
//       <>
//         <Typography variant="body1">ERROR - Typography Body1</Typography>
//         <Typography variant="body2">ERROR - Typography Body2</Typography>
//       </>
//     );
//   }



//    // aray.reduce((acc, cv) => ({...acc,[cv.id]:cv.name}), {})

  

//   //  const handleChange = (event) => {
//   //     let requestedCategory = event.target.value;
//   //     setArrange(requestedCategory);
//   //  };

//   //  const handleChangePage = (event, newPage) => {
//   //     setPage(newPage);
//   //  };

//   //  const handleChangeRowsPerPage = (event) => {
//   //     setRowsPerPage(+event.target.value);
//   //     setPage(0);
//   //  };
//   //  const handleRadioChange = () => {
//   //     setProcessOrders(!processOrders);
//   //  };
//    function defaultLabelDisplayedRows({ from, to, count }) {
//       return `${from}–${to} از ${count !== -1 ? count : `more than ${to}`}`;
//    }
//    return (
//       <div >
//          <FormControl>
//             <RadioGroup
//                row
//                aria-labelledby="demo-row-radio-buttons-group-label"
//                name="row-radio-buttons-group"
//             >
//                <FormControlLabel
//                   value="male"
//                   control={<Radio />}
//                   label="سفارش های تحویل شده"
//                   // checked={!processOrders}
//                   // onChange={handleRadioChange}
//                />
//                <FormControlLabel
//                   value="female"
//                   control={<Radio />}
//                   label="سفارش های در انتظار تحویل"
//                   // checked={processOrders}
//                   // onChange={handleRadioChange}
//                />
//             </RadioGroup>
//          </FormControl>
//          <Paper sx={{ borderRadius: 0 }}>
//             <TableContainer sx={{ maxHeight: 440, overflowY: "hidden" }}>
//                <Table stickyHeader aria-label="sticky table">
//                   <TableHead>
//                      <TableRow>
//                         <TableCell style={{ minWidth: 60 }}>
//                            نام کاربر
//                         </TableCell>
//                         <TableCell style={{ minWidth: 100 }}>
//                            مجموع مبلغ
//                         </TableCell>
//                         <TableCell style={{ minWidth: 100 }}>
//                            <FormControl
                              
//                               variant="standard"
//                               sx={{ m: 1, minWidth: 120 }}
//                            >
//                               <InputLabel id="demo-simple-select-standard-label">
//                                  زمان ثبت سفارش
//                               </InputLabel>
//                               <Select
//                                  labelId="demo-simple-select-standard-label"
//                                  id="demo-simple-select-standard"
//                                 //  onChange={handleChange}
//                                  label="Age"
//                               >
//                                  <MenuItem value={1}>جدید ترین</MenuItem>
//                                  <MenuItem value={2}>قدیمی ترین</MenuItem>
//                               </Select>
//                            </FormControl>
//                         </TableCell>
//                         <TableCell></TableCell>
//                      </TableRow>
//                   </TableHead>
//                   <TableBody>
//                      {Object.values(orders)
//                         .slice(
//                            page * rowsPerPage,
//                            page * rowsPerPage + rowsPerPage
//                         )
//                         .map((row) => {
//                            let date = new Date(row.orderDate);
//                            return (
//                               <TableRow
//                                  className="table_row"
                               
//                                  role="checkbox"
//                                  tabIndex={-1}
//                                  key={row.code}
//                               >
//                                  <TableCell>
//                                     {row.customerDetail.firstName +
//                                        " " +
//                                        row.customerDetail.lastName}
//                                  </TableCell>
//                                  <TableCell>
//                                     {row.purchaseTotal.toLocaleString()}
//                                  </TableCell>
//                                  <TableCell>
//                                     {moment(date, "YYYY/MM/DD")
//                                        .locale("fa")
//                                        .format("YYYY/MM/DD")}
//                                  </TableCell>
//                                  <TableCell>
//                                     <Button>بررسی سفارش</Button>
//                                  </TableCell>
//                               </TableRow>
//                            );
//                         })}
//                   </TableBody>
//                </Table>
//             </TableContainer>
//             <TablePagination
//                   variant="outlined"
//                   defaultPage={1}
//                   page={activePage}
//                   count={Math.ceil(data?.headers["x-total-count"] / limit)}
//                   onChange={(_, page) => {
//                     console.log("page:", page);
//                     setActivePage(page);
//                   }}
//             />
//          </Paper>
//       </div>
//    );
// }
