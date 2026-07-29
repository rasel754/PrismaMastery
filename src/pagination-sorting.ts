import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const paginationSorting = async () => {
// offset pagination 
// const offsetData = await prisma.post.findMany({
//     skip:10,
//     take:10
// })

// console.log(offsetData);


//cursor based pagination 
const cursorData = await prisma.post.findMany({
 skip:5,
 take:5,
 cursor:{
    id:15
 }
})
// console.log(cursorData);



//sorting 

const sortData = await prisma.post.findMany({
    orderBy:{
        id:"desc"
    }
})


// console.log(sortData);
    
};


paginationSorting();