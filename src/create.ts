import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {

    // create data into db
//   const result = await prisma.post.create({
//     data: {
//       title: "My First Post",
//       content: "This is the content of my first post.",
//       author: "John Doe",
//     },
//   });
//   console.log(result);



//create many data 
const createMany = await prisma.post.createMany({
    data:[
        {
            title:"post one",
            content:"content one",
            author:"author one"
        },
        {
            title:"post two",
            content:"content two",
            author:"author two"
        },
        {
            title:"post three",
            content:"content three",
            author:"author three"
        },
        {
            title:"post four",
            content:"content four",
            author:"author four"
        },
        {
            title:"post five",
            content:"content five",
            author:"author five"
        },
        {
            title:"post six",
            content:"content six",
            author:"author six"
        },
        {
            title:"post seven",
            content:"content seven",
            author:"author seven"
        },
        {
            title:"post eight",
            content:"content eight",
            author:"author eight"
        },
        {
            title:"post nine",
            content:"content nine",
            author:"author nine"
        },
        {
            title:"post ten",
            content:"content ten",
            author:"author ten"
        },
        {
            title:"post eleven",
            content:"content eleven",
            author:"author eleven"
        },
        {
            title:"post twelve",
            content:"content twelve",
            author:"author twelve"
        },
        {
            title:"post thirteen",
            content:"content thirteen",
            author:"author thirteen"
        },
        {
            title:"post fourteen",
            content:"content fourteen",
            author:"author fourteen"
        },
        {
            title:"post fifteen",
            content:"content fifteen",
            author:"author fifteen"
        },
        {
            title:"post sixteen",
            content:"content sixteen",
            author:"author sixteen"
        },
        {
            title:"post seventeen",
            content:"content seventeen",
            author:"author seventeen"
        },
        {
            title:"post eighteen",
            content:"content eighteen",
            author:"author eighteen"
        },
        {
            title:"post nineteen",
            content:"content nineteen",
            author:"author nineteen"
        },
        {
            title:"post twenty",
            content:"content twenty",
            author:"author twenty"
        },
        {
            title:"post twenty one",
            content:"content twenty one",
            author:"author twenty one"
        },
        {
            title:"post twenty two",
            content:"content twenty two",
            author:"author twenty two"
        },
        {
            title:"post twenty three",
            content:"content twenty three",
            author:"author twenty three"
        },
        {
            title:"post twenty four",
            content:"content twenty four",
            author:"author twenty four"
        },
        {
            title:"post twenty five",
            content:"content twenty five",
            author:"author twenty five"
        },
        {
            title:"post twenty six",
            content:"content twenty six",
            author:"author twenty six"
        },
        {
            title:"post twenty seven",
            content:"content twenty seven",
            author:"author twenty seven"
        },
        {
            title:"post twenty eight",
            content:"content twenty eight",
            author:"author twenty eight"
        },
        {
            title:"post twenty nine",
            content:"content twenty nine",
            author:"author twenty nine"
        },
        {
            title:"post thirty",
            content:"content thirty",
            author:"author thirty"
        },
        {
            title:"post thirty one",
            content:"content thirty one",
            author:"author thirty one"
        },
        {
            title:"post thirty two",
            content:"content thirty two",
            author:"author thirty two"
        },
        {
            title:"post thirty three",
            content:"content thirty three",
            author:"author thirty three"
        },
        {
            title:"post thirty four",
            content:"content thirty four",
            author:"author thirty four"
        },
        {
            title:"post thirty five",
            content:"content thirty five",
            author:"author thirty five"
        },
        {
            title:"post thirty six",
            content:"content thirty six",
            author:"author thirty six"
        },
        {
            title:"post thirty seven",
            content:"content thirty seven",
            author:"author thirty seven"
        },
        {
            title:"post thirty eight",
            content:"content thirty eight",
            author:"author thirty eight"
        },
        {
            title:"post thirty nine",
            content:"content thirty nine",
            author:"author thirty nine"
        },
        {
            title:"post forty",
            content:"content forty",
            author:"author forty"
        },
        {
            title:"post forty one",
            content:"content forty one",
            author:"author forty one"
        },
        {
            title:"post forty two",
            content:"content forty two",
            author:"author forty two"
        },
        {
            title:"post forty three",
            content:"content forty three",
            author:"author forty three"
        },
        {
            title:"post forty four",
            content:"content forty four",
            author:"author forty four"
        },
        {
            title:"post forty five",
            content:"content forty five",
            author:"author forty five"
        },
        {
            title:"post forty six",
            content:"content forty six",
            author:"author forty six"
        },
        {
            title:"post forty seven",
            content:"content forty seven",
            author:"author forty seven"
        },
        {
            title:"post forty eight",
            content:"content forty eight",
            author:"author forty eight"
        },
        {
            title:"post forty nine",
            content:"content forty nine",
            author:"author forty nine"
        },
        {
            title:"post fifty",
            content:"content fifty",
            author:"author fifty"
        }

    ]
}) 

console.log(createMany);
};


main();