const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandler = require('./utils/errorHandler');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
