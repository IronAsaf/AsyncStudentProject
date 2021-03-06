import express from 'express';
import cors from 'cors';
import {createRequire} from "module";
import swaggerUi from 'swagger-ui-express';
import expenses from "./routes/expenses.js";
import expense from "./routes/expense.js";
import statistics from "./routes/statistics.js";
import user from "./routes/user.js";
import auth from "./routes/auth.js";

const require = createRequire(import.meta.url);

const swaggerDocument = require('./swagger.json')


const app = express();
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())



app.listen(9000, () => {
    console.log("Server running on port 9000");
});
// routes
app.use('/expenses/user', expenses)
app.use('/expense/user', expense)
app.use('/expenses-statistics/user', statistics)
app.use('/user', user)
app.use('/is_authorize',auth)
