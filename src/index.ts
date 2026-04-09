import { Elysia } from "elysia";
import { setupMiddleware } from "./middlewares";
import { setupRoutes } from "./routes";

const app = new Elysia();
setupMiddleware(app);
setupRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port);

console.log(`✅ Mirai Sama API running on port ${port}`);
console.log(`📚 Swagger: http://localhost:${port}/swagger`);