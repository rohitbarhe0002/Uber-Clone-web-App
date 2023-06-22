import express from "express";
import { createMenuItem ,getAllRestaurentMenu} from "../../Controller/restautrentsMenu/restaurentsMenu.js";
const router = express.Router();

router.get("/",getAllRestaurentMenu)
router.post("/restuarentMenu",createMenuItem)
// router.post("/restuarentMenu/:id",login)

export default router;