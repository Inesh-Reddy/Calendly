import { app } from "./app.js";
import { PORT } from "./config/env.js";

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`[Server]: is running on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/health`);
  });
};

startServer();
