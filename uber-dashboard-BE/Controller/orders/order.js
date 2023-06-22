import Orders from "../../Schema/orders/orders.js";

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

///get All hotels
export const getAllOrders = async (req, res, next) => {
  try {
    const allOrders = await Orders.find();
    res.status(200).json(allOrders);
  } catch (err) {
    console.log(err);
  }
};

// ////single user
// export const getUserById = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.status(200).json(user);
//   } catch (err) {
//     next(err);
//   }
// };