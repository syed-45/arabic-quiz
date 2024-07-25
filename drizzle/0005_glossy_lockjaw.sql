CREATE TABLE IF NOT EXISTS "nouns" (
	"chapter_number" integer,
	"arabic" varchar(64),
	"english" varchar(64),
	"arabic_plural" varchar(64),
	"english_plural" varchar(64),
	CONSTRAINT "nouns_arabic_chapter_number_pk" PRIMARY KEY("arabic","chapter_number")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verbs" (
	"chapter_number" integer,
	"arabic_verbal_nouns" varchar(64),
	"arabic_command" varchar(64),
	"arabic_present" varchar(64),
	"arabic_past" varchar(64),
	CONSTRAINT "verbs_arabic_past_chapter_number_pk" PRIMARY KEY("arabic_past","chapter_number")
);
--> statement-breakpoint
ALTER TABLE "user_scores" ALTER COLUMN "chapter_number" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_scores" ALTER COLUMN "last_score" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "nouns" ADD CONSTRAINT "nouns_chapter_number_chapters_chapter_number_fk" FOREIGN KEY ("chapter_number") REFERENCES "public"."chapters"("chapter_number") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verbs" ADD CONSTRAINT "verbs_chapter_number_chapters_chapter_number_fk" FOREIGN KEY ("chapter_number") REFERENCES "public"."chapters"("chapter_number") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_scores" ADD CONSTRAINT "user_scores_user_email_User_email_fk" FOREIGN KEY ("user_email") REFERENCES "public"."User"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_scores" ADD CONSTRAINT "user_scores_chapter_number_chapters_chapter_number_fk" FOREIGN KEY ("chapter_number") REFERENCES "public"."chapters"("chapter_number") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
