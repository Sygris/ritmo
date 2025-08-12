'use server'
import { prisma } from "./prisma";

export async function createUser() {
  const email = 'tiago.a.vista@gmail.com';
  const name = 'Tiago Vista';

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, name },
    select: {
      id: true,
      email: true,
    },
  });

  console.log(user);
  return user;
}