ALTER TABLE "user_scores" RENAME COLUMN "user_id" TO "user_email";--> statement-breakpoint
ALTER TABLE "user_scores" ALTER COLUMN "user_email" SET DATA TYPE varchar;