import express from 'express';
import {createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/rooms.js';
import {verifyAdmin} from '../utils/verifytoken.js';
const router = express.Router();

//Create
router.post("/:hotelid",verifyAdmin ,createRoom);

//Update
router.put("/:id", verifyAdmin, updateRoom);

//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//Get
router.get("/:id", getRoom);

//GetAll
router.get('/', getAllRooms);

export default router;