import express from 'express';
import {countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotels.js';
import {verifyAdmin} from '../utils/verifytoken.js';
const router = express.Router();

//Create
router.post("/",verifyAdmin ,createHotel);

//Update
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//Get
router.get("/find/:id", getHotel);

//GetAll
router.get('/', getAllHotels);

router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

export default router;