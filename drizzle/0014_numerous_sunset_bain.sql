CREATE TABLE IF NOT EXISTS "classes" (
	"name" text NOT NULL,
	"school_name" text NOT NULL,
	CONSTRAINT "classes_name_school_name_pk" PRIMARY KEY("name","school_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schools" (
	"name" text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "school" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "class" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "classes" ADD CONSTRAINT "classes_school_name_schools_name_fk" FOREIGN KEY ("school_name") REFERENCES "public"."schools"("name") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user" ADD CONSTRAINT "user_school_class_fk" FOREIGN KEY ("school","class") REFERENCES "public"."classes"("school_name","name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
