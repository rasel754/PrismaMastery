import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const aggregate = async () => {
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })
    console.log("avg age ", avgAge)

};


aggregate();