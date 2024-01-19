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

CREATE TABLE chapter_one_verbs (
    id SERIAL PRIMARY KEY,
    arabic VARCHAR(255),
    english VARCHAR(255)
);

INSERT INTO chapter_one_verbs (arabic, english) VALUES
    ('نَظَر', 'To look'),
    ('اِسْتَمَع', 'To listen'),
    ('عَاد', 'To repeat'),
    ('أَشَارَ', 'To point, indicate'),
    ('وَضَع', 'To put'),
    ('سَمِع', 'To hear'),
    ('قَال', 'To say'),
    ('رَتَّب', 'To put in order, organise, arrange'),
    ('تَبَادَل', 'To exchange'),
    ('سَأَل', 'To ask'),
    ('أَجَاب', 'To answer'),
    ('قَرَأ', 'To read'),
    ('مَرَّ', 'To pass by'),
    ('نَسَخ', 'To copy');

CREATE TABLE chapter_one_nouns (
    id SERIAL PRIMARY KEY,
    arabic VARCHAR(255),
    english VARCHAR(255),
    arabic_plural VARCHAR(255)
);

INSERT INTO chapter_one_nouns (arabic, english, arabic_plural) VALUES
    ('طَالِب', 'Student', 'طُلَّاب'),
    ('كِتَاب', 'Book', 'كُتُب'),
    ('وَحْدَة', 'Chapter', 'وَحَدَات'),
    ('لُغَة', 'Language', 'لُغَات'),
    ('جِنْسِيَّة', 'Nationality', 'جِنْسِيَّات'),
    ('اِسْم', 'Name', 'أَسْمَاء'),
    ('أَخ', 'Brother', 'إِخْوَة'),
    ('مُهَنْدِس', 'Engineer', 'مُهَنْدِسُون'),
    ('صَدِيق', 'Friend', 'أَصْدِقَاء'),
    ('طَبِيب', 'Doctor', 'أَطْبَاء'),
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
