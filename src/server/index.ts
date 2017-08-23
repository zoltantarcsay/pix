import { app } from './app';

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Pix is running on port ${server.address().port}`);
});
