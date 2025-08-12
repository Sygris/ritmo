'use server'
import { prisma } from "./prisma";

export async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      email: 'tiago.a.vista@gmail.com',
      name: 'Tiago Vista'
    },
    select: {
      id: true,
      email: true
    }
  });

  console.log(newUser);
}