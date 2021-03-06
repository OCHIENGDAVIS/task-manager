const express = require('express');
const multer = require('multer');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const upload = multer({
  dest: 'images',
});
app.post(
  '/uploads',
  upload.single('uploads'),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
