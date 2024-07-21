import { integer, pgTable, serial, varchar, primaryKey } from 'drizzle-orm/pg-core';

export const users = pgTable('User', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 64 }),
    email: varchar('email', { length: 64 }),
    password: varchar('password', { length: 64 }),
  });
  
export const chapterNames = pgTable('chapters',{
    chapterNumber: integer('chapter_number').primaryKey(),
    chapterName: varchar('chapter_name', { length: 255 }),
    chapterArabicName: varchar('chapter_arabic_name', { length: 255 })
})

export const userScores = pgTable('user_scores', {
  user_email: varchar('user_email', { length: 64 }).notNull(),
  chapter_number: integer('chapter_number'),
  last_score: integer('last_score')
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.user_email, table.chapter_number] }),
  };
})

