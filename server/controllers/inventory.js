import LocationRack from "../models/LocationRack.js";
import Supplier from "../models/Supplier.js";

export const getLocationRacks = async (req, res) => {
    try {
        // sort should look like this: { "field": "firstName", "sort": "desc" }
        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        // formatted sort should look like { firstName: -1 }
        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
            };

            return sortFormatted;
        };
        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const locationRacks = await LocationRack.find({
            $or: [
                { name: { $regex: new RegExp(search, "i") } },
                { status: { $regex: new RegExp(search, "i") } },
            ],
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

        const total = await LocationRack.countDocuments({
            name: { $regex: search, $options: "i"}
        });

        res.status(200).json({
            locationRacks,
            total,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getSuppliers = async (req, res) => {
    try {
        // sort should look like this: { "field": "firstName", "sort": "desc" }
        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        // formatted sort should look like { firstName: -1 }
        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
            };

            return sortFormatted;
        };
        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const suppliers = await Supplier.find({
            $or: [
                { name: { $regex: new RegExp(search, "i") } },
                { companyAddress: { $regex: new RegExp(search, "i") } },
                { email: { $regex: new RegExp(search, "i") } },
                { contactNumber: { $regex: new RegExp(search, "i") } },
                { contactPersonName: { $regex: new RegExp(search, "i") } },
                { contactPersonRole: { $regex: new RegExp(search, "i") } },
                { status: { $regex: new RegExp(search, "i") } },
            ],
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

        const total = await Supplier.countDocuments({
            name: { $regex: search, $options: "i"}
        });

        res.status(200).json({
            suppliers,
            total,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};