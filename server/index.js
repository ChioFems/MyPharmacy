import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import generalRoutes from './routes/general.js';
import inventoryRoutes from './routes/inventory.js';
import salesRoutes from './routes/sales.js';
import managementRoutes from './routes/management.js';

// data imports
//import Role from './models/Role.js';
//import User from './models/User.js';
//import LocationRack from './models/LocationRack.js';
//import Supplier from './models/Supplier.js';
import { mockDataRole, mockDataUser, mockDataLocationRack, mockDataSupplier } from './data/index.js';

/* CONFIGURATION */
dotenv.config();

const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors());

/* ROUTES */
app.use("/general", generalRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/sales", salesRoutes);
app.use("/management", managementRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
    .set('strictQuery', false)
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log( `Server Port: ${PORT}`));

        /* ONLY ADD DATA ONE TIME */
        //Role.insertMany(mockDataRole);
        //User.insertMany(mockDataUser);
        //LocationRack.insertMany(mockDataLocationRack);
        //Supplier.insertMany(mockDataSupplier);
    })
    .catch((error) => console.log(`${error} did not connect`));