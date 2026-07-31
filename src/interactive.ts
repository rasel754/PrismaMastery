import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const interactiveTransaction = async () => {
    const result = await prisma.$transaction(async (transactionClient) => {
        const createUser = await transactionClient.user.create({
            data: {
                userName: "rasel ahmed 3",
                email: "rasel3@gmail.com"
            }
        })
        const updateUser = await transactionClient.user.update({
            where: {
                id: 3
            },
            data: {
                age: 200
            }
        })
        return { createUser, updateUser }

    })
    console.log("transaction", result);

};


interactiveTransaction();