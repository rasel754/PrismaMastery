import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter,
    log: [
        {
            emit: "event",
            level: "query"
        }
    ]
});

prisma.$on("query", (e) => {
    console.log("Query: ", e.query);
    console.log("Duration: ", e.duration, " ms");
    console.log("Date & Time: ", e.timestamp);
})

const main = async () => {
    const getAllFromDB = await prisma.post.findMany();
    //console.log(getAllFromDB)
}

main();