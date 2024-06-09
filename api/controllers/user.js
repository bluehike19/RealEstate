import User from '../models/User';

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true}
        )
    } catch (err) {
        next(err)
    }
}