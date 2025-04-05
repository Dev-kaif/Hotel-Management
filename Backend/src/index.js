const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/booking');
const userRoutes = require('./routes/user');
const reviewRoutes = require('./routes/review');

dotenv.config();
connectDB(); 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/user', userRoutes);
app.use("/api/reviews", reviewRoutes);


app.listen(5000, () => console.log('Server running on port 5000'));
