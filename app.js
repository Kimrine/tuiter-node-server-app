import express from 'express';
import cors from 'cors';
import HelloController
  from "./controllers/hello-controller.js";
import UserController
  from './controllers/users/users-controller.js';
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://kimrine:xyf123456@cluster0.fff8dsx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true});

const app = express();
app.use(cors({
  credentials: true,
  origin: true
  //origin: 'http://localhost:3000'
}));

app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);