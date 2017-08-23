import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as fileUpload from 'express-fileupload';
import * as uuid from 'uuid';

import { Pic } from '../types/pic';
import * as fs from 'fs';
import { getPics } from './db';

export const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(fileUpload());
app.use('/', express.static(path.resolve('dist/client')));
app.use('/api', router);

router.use('/pic', express.static(path.resolve('data')));

router.get('/pic', (req, res) => {
  res.send(getPics().find());
});

router.post('/pic', (req, res) => {
  const { name, data, mimetype } = <fileUpload.UploadedFile>req.files.file;
  const id = uuid();
  const url = `/api/pic/${id}/${name}`;
  const size = data.length;
  const createdAt = new Date().toISOString();
  const pic: Pic = { id, name, url, size, mimetype, createdAt };
  const dir = path.join('data', id);

  try {
    fs.mkdirSync(dir);
    fs.writeFileSync(path.join(dir, name), data);
    getPics().insert(pic);
    res.status(201).send(pic);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});
