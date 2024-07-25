import { integer, pgTable, varchar, primaryKey, text, timestamp, boolean } from 'drizzle-orm/pg-core';
type AdapterAccountType = "email" | "oidc" | "oauth" | "webauthn"

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  password: varchar("password", {length: 64})
})

// TODO: null passwords mean ERROR when signinng in with credentials but email for different provider account
 
export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)
 
export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})
 
export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  })
)
 
export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  })
)
  
export const chapterNames = pgTable('chapters',{
    chapterNumber: integer('chapter_number').primaryKey(),
    chapterName: varchar('chapter_name', { length: 255 }),
    chapterArabicName: varchar('chapter_arabic_name', { length: 255 })
})

export const userScores = pgTable('user_scores', {
  user_id: text('user_id').references(() => users.id),
  chapter_number: integer('chapter_number').references(()=>chapterNames.chapterNumber),
  last_score: integer('last_score').notNull()
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.user_id, table.chapter_number] }),
  };
})

export const verbs = pgTable('verbs',{
  chapterNumber: integer('chapter_number').references(() => chapterNames.chapterNumber),
  arabicVerbalNouns: varchar('arabic_verbal_nouns', { length: 64 }),
  arabicCommand:  varchar('arabic_command', { length: 64 }),
  arabicPresent: varchar('arabic_present', { length: 64 }),
  arabicPast: varchar('arabic_past', { length: 64 })
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.arabicPast, table.chapterNumber] }),
  };
})

export const nouns = pgTable('nouns',{
  chapterNumber: integer('chapter_number').references(() => chapterNames.chapterNumber),
  arabic: varchar('arabic', { length: 64 }),
  english: varchar('english', { length: 64 }),
  arabicPlural:  varchar('arabic_plural', { length: 64 }),
  englishPlural: varchar('english_plural', { length: 64 })
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.arabic, table.chapterNumber] }),
  };
})

