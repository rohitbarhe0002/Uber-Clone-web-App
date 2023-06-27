import express from "express";
import { createMenuItem ,deleteRestaurentMenu,getAllRestaurentMenu,getRestaurentMenuById,updateRestaurant} from "../../Controller/restautrentsMenu/restaurentsMenu.js";
const router = express.Router();

router.get("/",getAllRestaurentMenu)
router.get("/:id",getRestaurentMenuById)
router.delete("/:id",deleteRestaurentMenu)
router.put("/:id",updateRestaurant)
router.post("/restuarentMenu",createMenuItem)

export default router;