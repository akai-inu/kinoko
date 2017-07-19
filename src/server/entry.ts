import {join} from 'path';
import * as express from 'express';

const app = express();

app.use(express.static(join(__dirname, '..', '..', 'public')));
app.listen(8080, () => {
    console.log('Static server started on 8080');
});