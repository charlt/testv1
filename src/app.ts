import express from 'express';
import { controller } from './controller';
import { MongoDB } from './datasources';
const app = express();
const port = 3000;
const dataSource = new MongoDB();
app.use(controller);
app.get('/', (req, res) => {
    res.send({ data: 'Test v1.0' })
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    res.header("ALlow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})
app.listen(port, async () => {
    await dataSource.connect();
    console.log(`Our app is running on ports ${port}.`);
});




