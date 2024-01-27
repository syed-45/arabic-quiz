CREATE TABLE users (
    id INT PRIMARY KEY,
    -- The 'VARCHAR' data type is used to store variable-length character strings.
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE table chapters (
    chapter_number INT PRIMARY KEY,
    chapter_name VARCHAR(255),
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
    ('look', 'نَظَرٌ', 'اُنْظُرْ', 'يَنْظُرُ', 'نَظَرَ'),
    ('listen', 'اِسْتِمَاع', 'اِسْتَمِعْ', 'يَسْتَمِعُ', 'اِسْتَمَعَ'),
    ('repeat', 'إِعَادَة', 'أَعِدْ', 'يُعِيدُ', 'عَادَ'),
    ('point, indicate', 'إِشَارَةٌ', 'أُشِرْ', 'يُشِيرُ', 'أَشَارَ'),
    ('put', 'وَضْعٌ', 'ضَعْ', 'يَضَعُ', 'وَضَعَ'),
    ('hear', 'سَمَاعٌ', 'اِسْمَعْ', 'يَسْمَعُ', 'سَمِعَ'),
    ('say', 'قَوْلٌ', 'قُلْ', 'يَقُولُ', 'قَالَ'),
    ('organise, arrange', 'تَرْتِيبٌ', 'رَتِّبْ', 'يُرَتِّبُ', 'رَتَّبَ'),
    ('exchange', 'تَبَادُلٌ', 'تَبَادَلْ', 'يَتَبَادَلُ', 'تَبَادَلَ'),
    ('ask', 'سُؤَالٌ', 'اِسْأَلْ', 'يَسْأَلُ', 'سَأَلَ'),
    ('answer', 'إِجَابَةٌ', 'أُجِبْ', 'يُجِيبُ', 'أَجَابَ'),
    ('read', 'قِرَاءَةٌ', 'اِقْرَأْ', 'يَقْرَأُ', 'قَرَأَ'),
    ('pass by', 'مُرُورٌ', 'مُرَّ', 'يَمُرُّ', 'مَرَّ'),
    ('copy', 'نَسْخٌ', 'اِنْسَخْ', 'يَنْسَخُ', 'نَسَخَ');


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
    ('رِقْم', 'Number', 'أَرْقَام'),
    ('جُمْلَة', 'Sentence', 'جُمَل'),
    ('عَلَامَة', 'Sign, indication', 'عَلَامَات'),
    ('كَلِمَة', 'Word', 'كَلِمَات');

-- bing command ⬇️
-- create an sql table fpr the chapter one -verbs table on the page i am on righht now, thecolumns should be english, arabic_past, arabic_present, arabic_command, arabic_verbal_nouns. Answer only using the web page context and do not search the web.