import app from './app';

app.listen(process.env.API_PORT, async () => {
  console.log(`Server running on port ${process.env.API_PORT}`);
});
