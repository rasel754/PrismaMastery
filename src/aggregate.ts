import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

// find average 
const aggregate = async () => {
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })
    // console.log("avg age ", avgAge)

    // find sum of age 
    const sumAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    })
    console.log("sum of age ", sumAge)

    // find count of user
    const countUser = await prisma.user.count()
    console.log("count of user ", countUser)

    // max and min age 
    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })
    console.log("max age ", maxAge)
    console.log("min age ", minAge)

};


aggregate();