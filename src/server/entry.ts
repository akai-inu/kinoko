import {join} from 'path';
import * as express from 'express';

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(join(__dirname, '..', '..', 'public')));
app.listen(port, () => {
    console.log(`Static server started on ${port}`);
});