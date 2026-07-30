import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { title } from "node:process";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const filtering = async () => {
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "Five"
                    },

                },
                {
                    published: false
                }
            ]
        }
    });


    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "Five"
                    },
                    published: false
                }
            ]
        }
    });


    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: "Five"
                    }
                }
            ]
        }
    })


    const startsWithFiltering = await prisma.post.findMany({
        where: {
            title: {
                startsWith: "One"
            }
        }
    })

    const endsWith = await prisma.post.findMany({
        where: {
            title: {
                endsWith: "Five"
            }
        }
    })


    // console.log("starts with data", endsWith);



    const endsWithFiltering = await prisma.post.findMany({
        where: {
            title: {
                endsWith: "Five"
            }
        }
    })
    // console.log("ends with data", endsWithFiltering);



    const equalsWith = await prisma.post.findMany({
        where: {
            title: {
                equals: "content Five"
            }
        }
    })
    // console.log("equals with data", equalsWith);



    const userNameArray = ['user1', 'user2', 'user5'];

    const userNamesByArray = await prisma.user.findMany({
        where: {
            userName: {
                in: userNameArray
            }
        }
    });
    // console.log("user names by array", userNamesByArray);



    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: {
                include: {
                    postCategories: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })
    console.log("in depth data", JSON.stringify(inDepthData, null, 2));

}
filtering();