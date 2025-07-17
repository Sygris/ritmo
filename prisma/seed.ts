import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialUsers: Prisma.UserCreateInput[] = [
  {
    username: 'alfredo89',
    email: 'alfrdo89@gmail.com',
    passwordHash: 'djkfsdjgksjg',
  },
  {
    username: 'acfs',
    email: 'acfs@gmail.com',
    passwordHash: 'ddffsdjgksjg',
  },
  {
    username: 'dummy__',
    email: 'dummy@gmail.com',
    passwordHash: 'gtrfsdjgksjg',
  },
]

async function main() {
  console.log('Seeding database...');

  for(const user of initialUsers) {
    const newUser = await prisma.user.create({
      data: user
    });

    console.log(`Created user with ID: ${newUser.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
  })

