import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
    //single update 
    const singleUpdate = await prisma.post.update({
        where:{
            id:8
        },
        data:{
            title:"title five",
            content:"content five",
            author:"author five"
        }
    })
    // console.log(singleUpdate)



    // udpate many 
    // const updateMany = await prisma.post.updateMany({
    //     where:{
    //         author:"John Doe"
    //     },
    //     data:{
    //         content:"updated content"
    //     }
    // })
    // console.log(updateMany)



    const upsertData = await prisma.post.upsert({
        where:{
            id:10
        },
        update:{
            title:"title six",
          
        },
        create:{
            title:"title seven",
            content:"content seven",
            author:"author seven"
        }
    })
    console.log(upsertData)


};


main();