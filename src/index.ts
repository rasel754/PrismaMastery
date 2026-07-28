import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//       title: "My First Post",
//       content: "This is the content of my first post.",
//       author: "John Doe",
//     },
//   });
//   console.log(result);

const getAllDatFromDb = await prisma.post.findMany();
console.log(getAllDatFromDb);
};


main();