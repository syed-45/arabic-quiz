ALTER TABLE "classes" ADD COLUMN "registrantId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "isRegistrant" boolean NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "classes" ADD CONSTRAINT "classes_registrantId_user_id_fk" FOREIGN KEY ("registrantId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_code_unique" UNIQUE("code");