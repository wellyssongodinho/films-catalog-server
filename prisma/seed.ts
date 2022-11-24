// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    console.log(`Start seeding ...`);
    const response = await axios.get('https://ghibliapi.herokuapp.com/films', {
      headers: { 'Content-Type': 'application/json' },
    });
    const result = response.data();
    for (const { title, description, director, producer, url } of result) {
      console.log(
        `Created film with title: ${title}, description: ${description}, director: ${director}, producer: ${producer} url: ${url}`,
      );
      // const film = await prisma.film.create({
      //   data: { title, description, director, producer, url },
      // });
      // console.log(`Created film with id: ${film.id}`);
    }
    // fetch(`https://ghibliapi.herokuapp.com/#tag/Films`, {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response) => response.json())
    //   .then(async (data) => {
    //     for (const { title, description, director, producer, url } of data) {
    //       console.log(
    //         `Created film with title: ${title}, description: ${description}, director: ${director}, producer: ${producer} url: ${url}`,
    //       );
    //       // const film = await prisma.film.create({
    //       //   data: { title, description, director, producer, url },
    //       // });
    //       // console.log(`Created film with id: ${film.id}`);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   })
    //   .finally(() => {
    //     console.log(`Seeding finished.`);
    //   });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log(`Seeding finished.`);
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
