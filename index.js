import express from "express";
import cookieParser from "cookie-parser";
import menuRoutes from './routes/menu.js';
import itemRoutes from './routes/item.js';
import cors from "cors";
import './Database/Db.js'; 
const app = express();

app.use(express.json()); 
app.use(cookieParser());  

const allowedOrigins = ['https://menuapp-client.vercel.app']; 

app.use(
  cors({
    origin: allowedOrigins, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use('/api/menu-manager/menu', menuRoutes); 
app.use('/api/menu-manager/item', itemRoutes);  

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
