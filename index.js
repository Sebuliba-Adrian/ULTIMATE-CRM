import express from 'express';
import routes from './src/routes/crmRoutes';
import 'dotenv/config';
import mongoose  from 'mongoose';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//middleware setup
app.use(express.json());

routes(app);



app.get('/', (req, res) => res.send(`Node and express server running on PORT ${PORT}`))

app.listen(PORT, ()=> 
        console.log(`Your server is running on port ${PORT}`)
);