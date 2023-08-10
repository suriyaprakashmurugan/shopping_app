// import React, { useState, useEffect, useContext } from "react";
// import "./cart.css";
// import Countbtn from "./countBtn";


// const CartComponent = () => {
//   const [total, setTotal] = useState([]);
//   const [amt, setAmt] = useState(0);
//   const [noItem, setNoItem] = useState([]);
//   const [fitem, setFitem] = useState(0);

//   const removeItem = (id) => {
//     setItemDetails((pre) => {
//       return pre.filter((pro) => pro.id !== id);
//     });
//   };

//   useEffect(() => {
//     setTotal(
//       itemDetails.map((it) => {
//         return it.cost;
//       })
//     );

//     setNoItem(
//       itemDetails.map((it) => {
//         return it.qty;
//       })
//     );

//     const totalPrice = Math.ceil(
//       total.reduce(
//         (previousValue, currentValue) => previousValue + currentValue,
//         0
//       )
//     );
//     setAmt(totalPrice);

//     const totalItem = Math.ceil(
//       noItem.reduce(
//         (previousValue, currentValue) => previousValue + currentValue,
//         0
//       )
//     );
//     setFitem(totalItem);
//   }, [total]);

//   return (
//     <div className="container">
//       <div className="row my-5 py-3">
//       {itemDetails.length === 0 ? <h1>Your cart is Empty</h1> : <h1>Your cart</h1>}
//             <hr></hr>      
//         <div className="col-sm-12 col-md-9 col-xl-9">
//           <div>
//           {/* {
//               itemDetails && itemDetails.map((item, i)=>{
//                 return(
//                 <div className='container'>
//                 <div
//                 className='cart-card row'
//                 >
//                   <img alt='product-img' className='cart-img col-xl-4 col-md-4 col-sm-12 container' src={item.img}/>
//                   <div className='product-info col-xl-8 col-md-8 col-sm-12 container'>
//                     <h5>{ item.name }</h5>
//                     <Countbtn price={item.rate} idx={i} itemDetails={itemDetails} setItemDetails={setItemDetails}/>
//                     <button className='cartBtn' onClick={()=>{removeItem(item.id)}}>Remove from cart</button>
//                   </div>
                  
//                 </div>
//                 <hr></hr>
//                 </div>
//                 )
//               })
//             } */}
//           </div>
//         </div>
//         <div className="col-sm-12 col-md-9 col-xl-3">
//           <h3 className="text-start">Price Details</h3>
//           <hr />
//           <span className="text-start">Price({fitem + " " + "item"})</span>
//           <span className="float-end">${amt}</span>
//           <br />
//           <span className="text-start">Delivery charge</span>
//           <span className="float-end">Free</span>
//           <hr />
//           <h5 className="text-end">total:${amt}</h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartComponent;
