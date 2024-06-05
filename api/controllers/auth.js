import Room from "../models/Room";
import Hotel from "../models/Hotel";
import { createError } from "../utils/error"

export const createRoom = async (req, res, next) => { 
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try {
        const 
    } catch (err) {
        next(err)
    }
}