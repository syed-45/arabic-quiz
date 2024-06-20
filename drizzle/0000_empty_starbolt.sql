CREATE TABLE IF NOT EXISTS "chapters" (
	"chapter_number" integer,
	"chapter_name" varchar,
	"chapter_arabic_name" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(64),
	"password" varchar(64)
);
