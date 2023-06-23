import orders from "../../Schema/orders/orders.js";
import Orders from "../../Schema/orders/orders.js";
import jwt from 'jsonwebtoken'
///Add new menu item
export const createOrder = async (req, res, next) => {
  const newOrder = new Orders(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    next(err);
  }
};

// ///update hotel
// export const updateUser = async (req, res, next) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//    console.log(err);
//   }
// };

// ///delete hotel
// export const deleteUser = async (req, res, next) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("user has been deleted");
//   } catch (err) {
//     next(err);
//   }
// };

///get All  orders
// export const getAllOrders = async (req, res, next) => {
//   try {
//     const allOrders = await Orders.find();
//     if(allOrders.length > 0) {
//       res.status(200).json(allOrders);
//     }else{
//       res.status(200).json({errorMessage:'No orders found'});
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };


// get single order
// export const getAllOrders = async (req, res, next) => {
  
//   try {
//     const order =  await Orders.find();
//     res.status(200).json(order);
//   } catch (err) {
//     next(err);
//   }
// };

export const  getAllOrders  = async (req, res, next) => {
const token =  req.headers.authorization;
console.log(token,"token")

  try {
    
    const order = await orders.find({}, { _id: 0 }).lean()
    res.status(200).json(order);
  } catch (err) {
    console.log("coem in err")
    next(err);
  }
};
export const getOrdersById = async (req, res, next) => {
  try {
    const order = await Orders.findOne({orderID: req.params.id});
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
//delete order 
export const deleteOrder = async (req, res, next) => {
  try {
    await Orders.findOneAndDelete({orderID:req.params.id});
    res.status(200).json("order has been deleted");
  } catch (err) {
    next(err);
  }
};