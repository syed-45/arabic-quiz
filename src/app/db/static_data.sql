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

INSERT INTO verbs VALUES
    (1, 'To look', 'نَظَرٌ', 'اُنْظُرْ', 'يَنْظُرُ', 'نَظَرَ'),
    (1, 'To repeat', 'إِعَادَة', 'أَعِدْ', 'يُعِيدُ', 'عَادَ'),
    (1, 'To point, indicate', 'إِشَارَةٌ', 'أُشِرْ', 'يُشِيرُ', 'أَشَارَ'),
    (1, 'To put', 'وَضْعٌ', 'ضَعْ', 'يَضَعُ', 'وَضَعَ'),
    (1, 'To listen', 'اِسْتِمَاع', 'اِسْتَمِعْ', 'يَسْتَمِعُ', 'اِسْتَمَعَ'),
    -- (1, 'To hear', 'سَمَاعٌ', 'اِسْمَعْ', 'يَسْمَعُ', 'سَمِعَ'), -- deleted from table due to similiarity with above verb
    (1, 'To say', 'قَوْلٌ', 'قُلْ', 'يَقُولُ', 'قَالَ'),
    (1, 'To organise, arrange', 'تَرْتِيبٌ', 'رَتِّبْ', 'يُرَتِّبُ', 'رَتَّبَ'),
    (1, 'To exchange', 'تَبَادُلٌ', 'تَبَادَلْ', 'يَتَبَادَلُ', 'تَبَادَلَ'),
    (1, 'To ask', 'سُؤَالٌ', 'اِسْأَلْ', 'يَسْأَلُ', 'سَأَلَ'),
    (1, 'To answer', 'إِجَابَةٌ', 'أُجِبْ', 'يُجِيبُ', 'أَجَابَ'),
    (1, 'To read', 'قِرَاءَةٌ', 'اِقْرَأْ', 'يَقْرَأُ', 'قَرَأَ'),
    (1, 'To pass by', 'مُرُورٌ', 'مُرَّ', 'يَمُرُّ', 'مَرَّ'),
    (1, 'To copy', 'نَسْخٌ', 'اِنْسَخْ', 'يَنْسَخُ', 'نَسَخَ');

INSERT INTO nouns VALUES
    (1, 'طَالِب', 'Student', 'طُلَّاب','Students'),
    (1, 'كِتَاب', 'Book', 'كُتُب', 'Books'),
    (1, 'وَحْدَة', 'Chapter', 'وَحَدَات', 'Chapters'),
    (1, 'لُغَة', 'Language', 'لُغَات', 'Languages'),
    (1, 'جِنْسِيَّة', 'Nationality', 'جِنْسِيَّات', 'Nationalities'),
    (1, 'اِسْم', 'Name', 'أَسْمَاء', 'Names'),
    (1, 'أَخ', 'Brother', 'إِخْوَة', 'Brothers'),
    (1, 'مُهَنْدِس', 'Engineer', 'مُهَنْدِسُون', 'Engineers'),
    (1, 'صَدِيق', 'Friend', 'أَصْدِقَاء', 'Friends'),
    (1, 'طَبِّيب', 'Doctor', 'الأَطِبّاءُ', 'Doctors'),
    (1, 'أُخْت', 'Sister', 'أَخَوَات', 'Sisters'),
    (1, 'دَرْس', 'Lesson', 'دُرُوس', 'Lessons'),
    (1, 'تَدْرِيب', 'Exercise', 'تَدَرِيبَات', 'Exercises'),
    --(1, 'عَدَد', 'Number', 'أَعْدَاد'), -- DELETED "DUPLICATE"
    (1, 'رَقْمٌ', 'Number', 'أَرْقَام', 'Numbers'),      -- DUPL. HERE.
    (1, 'صُورَة', 'Picture', 'صُوَر', 'Pictures'),
    (1, 'جَوَاب', 'Answer', 'أَجْوِبَة', 'Answers'),
    (1, 'سُؤَال', 'Question', 'أَسْئِلَة', 'Questions'),
    (1, 'مِثَال', 'Example', 'أَمْثِلَة', 'Examples'),
    (1, 'زَمِيل', 'Colleague, classmate', 'زُمَلَاء', 'Colleagues, classmates'),
    (1, 'جُمْلَة', 'Sentence', 'جُمَل', 'Sentences'),
    (1, 'عَلَامَة', 'Sign, indication', 'عَلَامَات', 'Signs, indications'),
    (1, 'كَلِمَة', 'Word', 'كَلِمَات', 'Words');


INSERT INTO verbs VALUES
(2, 'To perform wudoo (ablution)', 'تَوَضُّأٌ', 'تَوَضَّأْ',  'يَتَوَضَّأُ', 'تَوَضَّأَ'),
(2, 'To pray', 'صَلاةٌ', 'صَلِّ', 'يُصَلِّي', 'صَلَّى'),
(2, 'To do', 'فِعْلٌ', 'إفْعَلْ', 'يَفْعَلُ', 'فَعَلَ');

INSERT INTO nouns VALUES
    (2, 'أُسْرَةٌ', 'Family', 'أُسَرٌ', 'Families'),
    (2, 'عَمٌّ', 'Paternal uncle', 'أَعْمَامٌ', 'Paternal uncles'),
    (2, 'عَمَّةٌ', 'Paternal aunt', 'عَمَّاتٌ', 'Paternal aunts'),
    (2, 'أُمٌّ', 'Mother', 'أُمَّهَاتٌ', 'Mothers'),
    (2, 'جَدَّةٌ', 'Grandmother', 'جَدَّاتٌ', 'Grandmothers'),
    (2, 'جَدٌّ', 'Grandfather', 'أَجْدَادٌ', 'Grandfathers'),
    (2, 'اِبْنَةٌ', 'Daughter', 'بَنَاتٌ', 'Daughters'),
    (2, 'ابْنٌ', 'Son', 'أَبْنَاءٌ', 'Sons'),
    (2, 'مُدَرِّسٌ', 'Teacher', 'مُدَرِّسُون', 'Teachers'),
    (2, 'وَلَدٌ', 'Child', 'أَوْلَادٌ', 'Children'),
    (2, 'شَجَرَةٌ', 'Tree', 'أَشْجَارٌ', 'Trees'),
    (2, 'حَمَّامٌ', 'Bathroom', 'حَمَّامَاتٌ', 'Bathrooms'),
    (2, 'مِعْطَفٌ', 'Coat', 'مَعَاطِفٌ', 'Coats'),
    (2, 'غُرْفَةٌ', 'Room', 'غُرَفٌ', 'Rooms'),
    (2, 'مَسْجِدٌ', 'Mosque', 'مَسَاجِدٌ', 'Mosques'),
    (2, 'نَظَّارَةٌ', 'Glasses', 'نَظَّارَاتٌ', 'Glasses'),
    (2, 'رَسُولٌ', 'Messenger', 'رُسُلٌ', 'Messengers'),
    (2, 'وَالِدَةٌ', 'Mother', 'وَالِدَاتٌ', 'Mothers'),
    -- (2, 'أَبٌ', 'Father', 'آبَاءٌ', 'Fathers'),  -- DELETED DUPL
    (2, 'وَالِدٌ', 'Father', 'وَالِدُونَ', 'Fathers'); -- DUPL


INSERT INTO verbs (chapter_number, english, arabic_past, arabic_present, arabic_command, arabic_verbal_nouns)
VALUES (3, 'To live','سَكَنَ','يسَكُنُ','أُسْكُنْ','سَكَنٌ'),
       (3, 'To want; to intend', 'أَرَادَ', 'يُرِيْدُ', 'أَرِدْ', 'إِرَادَةٌ');

INSERT INTO nouns (chapter_number, arabic, english) VALUES  (3, 'سَكَنٌ','Residence'),--'مَسَاكِنُ','Residences'),
                            (3, 'حَيٌّ','Area, District'),--'أًحْيَاءُ','Area, Districts'),
                            (3, 'جَامِعَةٌ','University'), -- need to fill in plurals...
                            (3, 'بَيْتٌ','House'),
                            (3, 'شَقَّةٌ','Apartment'),
                            (3, 'سَرِيْرٌ','Bed'),
                            (3, 'أَرِيْكِةٌ','Sofa'),
                            (3, 'مَطْبَخٌ','Kitchen'),
                            (3, 'ثَلَّاجَةٌ','Fridge'),
                            (3, 'سَخَّانٌ','Boiler'),
                            (3, 'مِرْآةٌ','Mirror'),
                            (3, 'مَطَارٌ','Airport'),
                            (3, 'دَوْرٌ','Floor'),
                            (3, 'سِتارَةٌ','Curtains'),
                            (3, 'سَجَّادَةٌ','Rug'),
                            (3, 'فُرْنٌ','Oven');

INSERT INTO verbs VALUES (4, 'To sleep', 'نَوْمٌ', 'نَمْ', 'يَنَامُ', 'نَامَ'),
                         (4, 'To wake up', 'اِسْتِيقَاظٌ', 'اِسْتَيْقِظٌْ', 'يَسْتَيْقِظٌ', 'اِسْتَيْقَظَ'),
                         (4, 'To go', 'ذَهَا بٌ', 'اِذْهَبْ', 'يَذْهَبُ', 'ذَهَبَ (إِلَى)'),
                         (4, 'To vaccuum / to sweep', 'كَنْسٌ', 'اُكْنُسْ', 'يَكْنُسُ', 'كَنَسَ'),
                         (4, 'To wash', 'غَسْلٌ', 'اِغْسِلْ', 'يَغْسِلُ', 'غَسَلَ'),
                         (4, 'To iron', 'كَيٌّ', 'اِكْوٌِ', 'يَكْوِي', 'كَوَى'),
                         (4, 'To watch', 'مُشَاهَدَةٌ', 'شَاهِدْ', 'يُشاهِدُ', 'شَاهَدَ');

INSERT INTO nouns VALUES (4, 'Prayer', 'صَلَاةٌ', 'Prayer (plural)', 'صَلَوَاتٌ'),
                         (4, 'School', 'مَدْرَسَةٌ', 'Schools', 'مَدَارِسُ'),
                         (4, 'Holiday', 'عُطْلَةٌ', 'Holidays', 'عُطَلٌ/عُطْلَاتٌ'),
                         (4, 'Television', 'تِلْفَازٌ', 'Televisions', 'تِلْفَازَاتٌ'),
                         (4, 'Plate, dish', 'طَبَقٌ', 'Plates, dishes', 'أَطْبَاقٌ'),
                         (4, 'Car', 'سَيَّارَةٌ', 'Cars', 'سَيَّارَاتٌ'),  
                         (4, 'Bus', 'حَافِلَةٌ', 'Buses', 'حَافِلَاتٌ'),  
                         (4, 'Hour, clock', 'سَاعَةٌ', 'Hours, clocks', 'سَاعَاتٌ'),  
                         (4, 'Newspaper', 'صَحِيفَةٌ', 'Newspapers', 'صُحُفٌ');


