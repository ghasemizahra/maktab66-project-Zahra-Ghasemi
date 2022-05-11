import React, { useState, useEffect } from 'react'
import Admin from '../Layouts/Admin'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Product() {
  const [product, setProduct] = useState()
  const [categroys, setCategorys] = useState()
  const url = 'http://localhost:3002/products';

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


  useEffect(() => {
    axios({
      url: 'http://localhost:3002/category',
      method: 'get',

    })
      .then(function (response) {
        setCategorys(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });




  }, [])

  return (
    <>
      <button ><Link to='' />افزودن کالا</button>
      <h2>مدیریت کالاها</h2>
      {product == null ? "loding" :
        <div>
          <table dir="rtl">
            <tr>
              <th>تصویر</th>
              <th>نام ملک</th>
              <th>دسته بندی</th>
              <th>لینک</th>
            </tr>
            {product.map((item) => {
              if (item.category == 1) {
                return (
                  <tr>
                    <td><img className='productImg' src={item.images} /></td>
                    <td>{item.name}</td>
                    {categroys.map(categroyItem => {
                      if (categroyItem.id == item.category) {
                        return (
                          <>
                            <td>{categroyItem.name}</td>
                            <td>
                              <Link to='/'>ویرایش </Link>
                              <Link to='/'>حذف</Link>
                            </td>
                          </>

                        )
                      }

                    })}
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
export default Admin(Product)