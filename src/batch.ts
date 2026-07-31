import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });




const batchTransaction = async () => {

    const createUser = prisma.user.create({
        data: {
            userName: "rasel ahmed 2",
            email: "rasel2@gmail.com"
        }
    })


    const updateUser = prisma.user.update({
        where: {
            id: 3
        },
        data: {
            age: 200
        }
    })


    const [usereData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ])

    console.log("user data", usereData, "update data", updateData);
};


batchTransaction();