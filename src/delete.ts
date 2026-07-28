import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

// delete single data
const deleteData = async () => {
// const singleDelete = await prisma.post.delete({
//     where:{
//         id:9
//     }
// })
// console.log(singleDelete)

// delete many
const deleteMany = await prisma.post.deleteMany({
    where:{
        author:"John Doe"
    }
})
console.log(deleteMany)
};


deleteData();