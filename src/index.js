import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';
import Response from './helpers/Response';



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors())

app.use('/', routes);

app.get('/', (req, res) =>
  Response.successMessage(
    res,
    'Simple product viewer API',
    '',
    200
  )
);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});

export default app;
