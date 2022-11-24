"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const axios_1 = require("axios");
const prisma = new client_1.PrismaClient();
async function main() {
    try {
        console.log(`Start seeding ...`);
        const response = await axios_1.default.get('https://ghibliapi.herokuapp.com/films', {
            headers: { 'Content-Type': 'application/json' },
        });
        const result = response.data();
        for (const { title, description, director, producer, url } of result) {
            console.log(`Created film with title: ${title}, description: ${description}, director: ${director}, producer: ${producer} url: ${url}`);
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
    finally {
        console.log(`Seeding finished.`);
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map