import { NestApplication, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join, resolve } from "node:path";

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.setBaseViewsDir(resolve(__dirname, "../views"));
  app.setViewEngine("hbs");
  await app.listen(3000);
}
bootstrap();
