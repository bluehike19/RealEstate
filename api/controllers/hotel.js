import Hotel from '../models/Hotel';

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(re.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}