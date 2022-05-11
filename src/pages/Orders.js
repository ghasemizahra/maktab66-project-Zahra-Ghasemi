// import React from 'react'
// import Admin from '../Layouts/Admin'

//  function Orders() {
//   return (
//     <div>سفارشات</div>
//   )
// }
// export default Admin(Orders)
import React from 'react'
import WaitingOrder from '../Components/WaitingOrder'
import Admin from '../Layouts/Admin'

function Orders() {
  return (
    <>
      <WaitingOrder />
    </>
  )
}
export default Admin(Orders)
