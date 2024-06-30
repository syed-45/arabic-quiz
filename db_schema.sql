CREATE TABLE "Users" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_scores (
	user_id integer,
	chapter_number integer,
	last_score integer
);

CREATE table chapters (
    chapter_number INT PRIMARY KEY,
    chapter_name VARCHAR(255),
    -- The 'VARCHAR' data type is used to store variable-length character strings.
    chapter_arabic_name VARCHAR(255)
);

INSERT INTO chapters (chapter_number, chapter_name, chapter_arabic_name) VALUES
    (1, 'Acquaintance', 'التَّعَارُفُ'),
    (2, 'Family', 'الأُسْرَةُ'),
    (3, 'Living', 'السَّكَنُ'),
    (4, 'Daily Life', 'الحَيَاةُ اليَوْمِيَّةُ'),
    (5, 'Food & Drink', 'الطَّعَامُ وَالشَّرَابُ'),
    (6, 'The Prayer', 'الصَّلَاةُ'),
    (7, 'Study', 'الدِّرَاسَةُ'),
    (8, 'Work', 'العَمَلُ'),
    (9, 'Shopping', 'التَّسَوُّقُ'),
    (10, 'Weather', 'الجَوُّ'),
    (11, 'People & Places', 'النَّاسُ وَالأَمَاكِنُ'),
    (12, 'Hobbies', 'الهِوَايَاتُ'),
    (13, 'Travel', 'السَّفَرُ'),
    (14, 'Hajj & Umrah', 'الحَجُّ وَالعُمْرَةُ'),
    (15, 'Health', 'الصِّحَّةُ'),
    (16, 'Vacation', 'العُطْلَةُ');

CREATE TABLE chapter_1_verbs (
    english VARCHAR(20),
    arabic_verbal_nouns VARCHAR(20),
    arabic_command VARCHAR(20),
    arabic_present VARCHAR(20),
    arabic_past VARCHAR(20)
);

INSERT INTO chapter_1_verbs VALUES
    ('To look', 'نَظَرٌ', 'اُنْظُرْ', 'يَنْظُرُ', 'نَظَرَ'),
    ('To repeat', 'إِعَادَة', 'أَعِدْ', 'يُعِيدُ', 'عَادَ'),
    ('To point, indicate', 'إِشَارَةٌ', 'أُشِرْ', 'يُشِيرُ', 'أَشَارَ'),
    ('To put', 'وَضْعٌ', 'ضَعْ', 'يَضَعُ', 'وَضَعَ'),
    ('To listen', 'اِسْتِمَاع', 'اِسْتَمِعْ', 'يَسْتَمِعُ', 'اِسْتَمَعَ'),
    -- ('To hear', 'سَمَاعٌ', 'اِسْمَعْ', 'يَسْمَعُ', 'سَمِعَ'), -- deleted from table due to similiarity with above verb
    ('To say', 'قَوْلٌ', 'قُلْ', 'يَقُولُ', 'قَالَ'),
    ('To organise, arrange', 'تَرْتِيبٌ', 'رَتِّبْ', 'يُرَتِّبُ', 'رَتَّبَ'),
    ('To exchange', 'تَبَادُلٌ', 'تَبَادَلْ', 'يَتَبَادَلُ', 'تَبَادَلَ'),
    ('To ask', 'سُؤَالٌ', 'اِسْأَلْ', 'يَسْأَلُ', 'سَأَلَ'),
    ('To answer', 'إِجَابَةٌ', 'أُجِبْ', 'يُجِيبُ', 'أَجَابَ'),
    ('To read', 'قِرَاءَةٌ', 'اِقْرَأْ', 'يَقْرَأُ', 'قَرَأَ'),
    ('To pass by', 'مُرُورٌ', 'مُرَّ', 'يَمُرُّ', 'مَرَّ'),
    ('To copy', 'نَسْخٌ', 'اِنْسَخْ', 'يَنْسَخُ', 'نَسَخَ');



CREATE TABLE chapter_1_nouns (
    id SERIAL PRIMARY KEY,
    arabic VARCHAR(255),
    english VARCHAR(255),
    arabic_plural VARCHAR(255)
);

INSERT INTO chapter_1_nouns (arabic, english, arabic_plural) VALUES
    ('طَالِب', 'Student', 'طُلَّاب'),
    ('كِتَاب', 'Book', 'كُتُب'),
    ('وَحْدَة', 'Chapter', 'وَحَدَات'),
    ('لُغَة', 'Language', 'لُغَات'),
    ('جِنْسِيَّة', 'Nationality', 'جِنْسِيَّات'),
    ('اِسْم', 'Name', 'أَسْمَاء'),
    ('أَخ', 'Brother', 'إِخْوَة'),
    ('مُهَنْدِس', 'Engineer', 'مُهَنْدِسُون'),
    ('صَدِيق', 'Friend', 'أَصْدِقَاء'),
    ('طَبِّيب', 'Doctor', 'الأَطِبّاءُ'),
    ('أُخْت', 'Sister', 'أَخَوَات'),
    ('دَرْس', 'Lesson', 'دُرُوس'),
    ('تَدْرِيب', 'Exercise', 'تَدَرِيبَات'),
    ('عَدَد', 'Number', 'أَعْدَاد'),
    ('صُورَة', 'Picture', 'صُوَر'),
    ('جَوَاب', 'Answer', 'أَجْوِبَة'),
    ('سُؤَال', 'Question', 'أَسْئِلَة'),
    ('مِثَال', 'Example', 'أَمْثِلَة'),
    ('زَمِيل', 'Colleague, classmate', 'زُمَلَاء'),
    ('رَقْمٌ', 'Number', 'أَرْقَام'),
    ('جُمْلَة', 'Sentence', 'جُمَل'),
    ('عَلَامَة', 'Sign, indication', 'عَلَامَات'),
    ('كَلِمَة', 'Word', 'كَلِمَات');

CREATE TABLE chapter_2_verbs (
    english VARCHAR(255),
    arabic_verbal_nouns VARCHAR(255),
    arabic_command VARCHAR(255),
    arabic_present VARCHAR(255),
    arabic_past VARCHAR(255)
);

INSERT INTO chapter_2_verbs VALUES
('To perform wudoo (ablution)', 'تَوَضُّأٌ', 'تَوَضَّأْ',  'يَتَوَضَّأُ', 'تَوَضَّأَ'),
('To pray', 'صَلاةٌ', 'صَلِّ', 'يُصَلِّي', 'صَلَّى'),
('To do', 'فِعْلٌ', 'إفْعَلْ', 'يَفْعَلُ', 'فَعَلَ');

CREATE TABLE chapter_2_nouns (
    id SERIAL PRIMARY KEY,
    arabic VARCHAR(255),
    english VARCHAR(255),
    arabic_plural VARCHAR(255),
    english_plural VARCHAR(255)
);

INSERT INTO chapter_2_nouns (arabic, english, arabic_plural, english_plural) VALUES
    ('أُسْرَةٌ', 'Family', 'أُسَرٌ', 'Families'),
    ('عَمٌّ', 'Paternal uncle', 'أَعْمَامٌ', 'Paternal uncles'),
    ('عَمَّةٌ', 'Paternal aunt', 'عَمَّاتٌ', 'Paternal aunts'),
    ('أُمٌّ', 'Mother', 'أُمَّهَاتٌ', 'Mothers'),
    ('جَدَّةٌ', 'Grandmother', 'جَدَّاتٌ', 'Grandmothers'),
    ('جَدٌّ', 'Grandfather', 'أَجْدَادٌ', 'Grandfathers'),
    ('اِبْنَةٌ', 'Daughter', 'بَنَاتٌ', 'Daughters'),
    ('ابْنٌ', 'Son', 'أَبْنَاءٌ', 'Sons'),
    ('مُدَرِّسٌ', 'Teacher', 'مُدَرِّسُون', 'Teachers'),
    ('وَلَدٌ', 'Child', 'أَوْلَادٌ', 'Children'),
    ('شَجَرَةٌ', 'Tree', 'أَشْجَارٌ', 'Trees'),
    ('حَمَّامٌ', 'Bathroom', 'حَمَّامَاتٌ', 'Bathrooms'),
    ('مِعْطَفٌ', 'Coat', 'مَعَاطِفٌ', 'Coats'),
    ('غُرْفَةٌ', 'Room', 'غُرَفٌ', 'Rooms'),
    ('مَسْجِدٌ', 'Mosque', 'مَسَاجِدٌ', 'Mosques'),
    ('نَظَّارَةٌ', 'Glasses', 'نَظَّارَاتٌ', 'Glasses'),
    ('رَسُولٌ', 'Messenger', 'رُسُلٌ', 'Messengers'),
    ('أَبٌ', 'Father', 'آبَاءٌ', 'Fathers'),
    ('وَالِدَةٌ', 'Mother', 'وَالِدَاتٌ', 'Mothers'),
    ('وَالِدٌ', 'Father', 'وَالِدُونَ', 'Fathers');

-- bing command ⬇️
-- create a sql table for the chapter two verbs table on the page i am on righht now, the columns should be english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past. Answer only using the web page context and do not search the web.