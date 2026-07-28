import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {

    // create data into db
//   const result = await prisma.post.create({
//     data: {
//       title: "My First Post",
//       content: "This is the content of my first post.",
//       author: "John Doe",
//     },
//   });
//   console.log(result);



//create many data 
const createMany = await prisma.post.createMany({
    data:[
        {
            title:"post one",
            content:"content one",
            author:"author one"
        },
        {
            title:"post two",
            content:"content two",
            author:"author two"
        },
        {
            title:"post three",
            content:"content three",
            author:"author three"
        }
    ]
}) 

console.log(createMany);
};


main();