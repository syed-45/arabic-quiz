import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('User', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 64 }),
    password: varchar('password', { length: 64 }),
  });
  
export const chapterNames = pgTable('chapters',{
    chapter_number: integer('chapter_number'),
    chapter_name: varchar('chapter_name'),
    chapter_arabic_name: varchar('chapter_arabic_name')
})