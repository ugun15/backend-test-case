import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { config } from 'dotenv';
import { memberRoutes } from './routes/member.routes';
import { bookRoutes } from './routes/book.routes';
import { borrowingRoutes } from './routes/borrowing.routes';
import { swaggerSpec } from './config/swagger';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/members', memberRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrowings', borrowingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 