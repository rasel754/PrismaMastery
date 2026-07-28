import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
// get all data using findmany 
const getAllDatFromDb = await prisma.post.findMany();

// get single data use find first
const findFirst = await prisma.post.findFirst({
    where:{
        id:2
    }
})

// get single data using find first or throw 
// const findFirstOrThrow = await prisma.post.findFirstOrThrow({
//     where:{
//         published:true
//     }
// })


// get single data use find unique
const findUnique = await prisma.post.findUnique({
    where:{
        id:2
    }
})

console.log(findUnique);
// console.log(getAllDatFromDb);
};


main();