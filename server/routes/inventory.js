import express from 'express';
import { getLocationRacks, getSuppliers } from "../controllers/inventory.js";

const router = express.Router();

router.get("/locationRacks", getLocationRacks);
router.get("/suppliers", getSuppliers);

export default router;