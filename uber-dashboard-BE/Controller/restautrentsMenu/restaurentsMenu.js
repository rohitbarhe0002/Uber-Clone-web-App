import RestaurentMenu from "../../Schema/RestaurentsMenu/restaurentMenu.js";


///Add new menu item
export const createMenuItem = async (req, res, next) => {
    console.log(req,"reuested")
  const newMenuItem = new RestaurentMenu(req.body);
  try {
    const saveMEnuItem = await newMenuItem.save();
    res.status(200).json(saveMEnuItem);
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

// ///get All menu
export const getAllRestaurentMenu = async (req, res, next) => {
  try {
    const allMenus = await RestaurentMenu.find();
    res.status(200).json(allMenus);
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