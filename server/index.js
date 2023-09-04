import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
import postRoutes from './routes/posts.js';


app.use('/posts', postRoutes);


const CONNECTION_URL = "mongodb+srv://devamlelgammal:CyR7XjN3hDFRvW63@cluster0.mqjrvyu.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

