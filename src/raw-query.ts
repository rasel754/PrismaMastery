import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const rawQuery = async () => {
    //const posts = await prisma.$queryRaw`SELECT * FROM "posts"`
    //console.log(posts)

    // delete users table data
    await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`
};

rawQuery();