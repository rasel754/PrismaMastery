import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const groupBy = async () => {
    const groupByPost = await prisma.post.groupBy({
        by: "published"
    })

    console.log(groupByPost)

};


groupBy();