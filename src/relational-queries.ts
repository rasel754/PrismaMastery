import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const relationalQueries = async () => {
    //fluent api call
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    })//.posts()
    // console.log(result);



    //relational filter 
    const publishedPostUser = await prisma.user.findMany({
        include: {
            posts: {
                where: {
                    published: true
                }
            }
        }
    })
    console.log(publishedPostUser);

};
relationalQueries();