import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('User', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 64 }),
    email: varchar('email', { length: 64 }),
    password: varchar('password', { length: 64 }),
  });
  
export const chapterNames = pgTable('chapters',{
    chapter_number: integer('chapter_number'),
    chapter_name: varchar('chapter_name'),
    chapter_arabic_name: varchar('chapter_arabic_name')
})

export const userScores = pgTable('user_scores', {
  user_email: varchar('user_email'),
  chapter_number: integer('chapter_number'),
  last_score: integer('last_score')
})