import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

async function bootstrap() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
}

bootstrap();
