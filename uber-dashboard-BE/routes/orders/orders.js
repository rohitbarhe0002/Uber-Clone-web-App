import express from "express";
import { createOrder,getAllOrders } from "../../Controller/orders/order.js";
const router = express.Router();
router.get("/",getAllOrders)
router.post("/orders",createOrder)

export default router;