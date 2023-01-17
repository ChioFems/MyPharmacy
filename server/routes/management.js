import express from 'express';
import { getUsers } from "../controllers/management.js";

const router = express.Router();

router.get("/team", getUsers);
// router.post("/team/addTeam", Users);    

export default router;