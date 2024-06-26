import Room from "../models/Room";
import Hotel from "../models/Hotel";
import { createError } from "../utils/error"

export const createRoom = async (req, res, next) => { 
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id},
            })
        } catch (err) {
            next(err)
        }
    } catch (err) {
        next(err)
    }
}

export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.UpdateOne(
            { "roomNumbers._id": req.params.id},
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                },
            }
        );
        res.status(200).json("Room status has been updated.")
    } catch (err) {
        next(err)
    }
}

export const deleteRoom = async (req, res, next) =>{
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            })
        } catch (err) {
            next(err)
        }
    } catch (err) {
        next(err)
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms)
    } catch (err) {
        next(err)
    }
}