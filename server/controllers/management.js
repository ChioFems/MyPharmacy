import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        // sort should look like this: { "field": "firstName", "sort": "desc" }
        const { page = 1, pageSize = 10, sort = null, search = "" } = req.query;

        // formatted sort should look like { firstName: -1 }
        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: sortParsed.sort = "asc" ? 1 : -1
            };

            return sortFormatted;
        };
        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const users = await User.find({
            $or: [
                { fullName: { $regex: new RegExp(search, "i") } },
                { email: { $regex: new RegExp(search, "i") } },
                { phoneNumber: { $regex: new RegExp(search, "i") } },
                { roleId: { $regex: new RegExp(search, "i") } },
                { status: { $regex: new RegExp(search, "i") } },
                { createdAt: { $regex: new RegExp(search, "i") } },
            ],
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

        const total = await User.countDocuments({
            name: { $regex: search, $options: "i"}
        });

        res.status(200).json({
            users,
            total,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};