import express from 'express';
import {getKey, processPayment } from '../controllers/productController.js';
import { paymentVerification } from '../controllers/productController.js';
const router=express.Router();

router.route("/payment/process").post(processPayment)

router.route("/getKey").get(getKey)
router.route("/paymentVerification").post(paymentVerification)
export default router;