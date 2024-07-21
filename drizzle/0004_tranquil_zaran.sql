ALTER TABLE "chapters" ADD PRIMARY KEY ("chapter_number");--> statement-breakpoint
ALTER TABLE "chapters" ALTER COLUMN "chapter_number" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "chapters" ALTER COLUMN "chapter_name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "chapters" ALTER COLUMN "chapter_arabic_name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "user_scores" ALTER COLUMN "user_email" SET DATA TYPE varchar(64);--> statement-breakpoint
ALTER TABLE "user_scores" ALTER COLUMN "user_email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_scores" ADD CONSTRAINT "user_scores_user_email_chapter_number_pk" PRIMARY KEY("user_email","chapter_number");--> statement-breakpoint