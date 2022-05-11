import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Admin from '../Layouts/Admin'
import { Link } from 'react-router-dom'

function Inventory() {
  const [product, setProduct] = useState()
  const url = 'http://localhost:3002/products';
  function getData() {
    axios({
      url: url,
      method: 'get',
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    axios({
      url: url,
      method: 'get',
      // params: {
      //   token: 'TOP-SECRET'
      // }
    })
      .then(function (response) {
        setProduct(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });




  }, [])
  return (
    < >
      <button ><Link to='' />ذخیره</button>
      <h2>قیمت و موجودی</h2>
      {product == null ? "loding" :
        <div>
          <table dir="rtl">
            <tr>
              <th>نام کالا</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
            {product.map((item) => {
              if (item.category == 1) {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.count}</td>
                  </tr>
                )
              }
            })}
          </table>


        </div>


      }


    </>
  )
}
export default Admin(Inventory)