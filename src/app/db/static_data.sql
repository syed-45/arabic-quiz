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
    (1, 'طَالِبٌ', 'Student', 'طُلَّابٌ', 'Students'),
    (1, 'كِتَابٌ', 'Book', 'كُتُبٌ', 'Books'),
    (1, 'وَحْدَةٌ', 'Chapter', 'وَحَدَاتٌ', 'Chapters'),
    (1, 'لُغَةٌ', 'Language', 'لُغَاتٌ', 'Languages'),
    (1, 'جِنْسِيَّةٌ', 'Nationality', 'جِنْسِيَّاتٌ', 'Nationalities'),
    (1, 'اِسْمٌ', 'Name', 'أَسْمَاءٌ', 'Names'),
    (1, 'أَخٌ', 'Brother', 'إِخْوَةٌ', 'Brothers'),
    (1, 'مُهَنْدِسٌ', 'Engineer', 'مُهَنْدِسُونَ', 'Engineers'),
    (1, 'صَدِيقٌ', 'Friend', 'أَصْدِقَاءُ', 'Friends'),
    (1, 'طَبِيبٌ', 'Doctor', 'الأَطِبّاءُ', 'Doctors'),
    (1, 'أُخْتٌ', 'Sister', 'أَخَوَاتٌ', 'Sisters'),
    (1, 'دَرْسٌ', 'Lesson', 'دُرُوسٌ', 'Lessons'),
    (1, 'تَدْرِيبٌ', 'Exercise', 'تَدْرِيبَاتٌ', 'Exercises'),
    --(1, 'عَدَد', 'Number', 'أَعْدَاد'), -- DELETED "DUPLICATE"
    (1, 'رَقْمٌ', 'Number', 'أَرْقَامٌ', 'Numbers'), -- DUPL. HERE.
    (1, 'صُورَةٌ', 'Picture', 'صُوَرٌ', 'Pictures'),
    (1, 'جَوَابٌ', 'Answer', 'أَجْوِبَةٌ', 'Answers'),
    (1, 'سُؤَالٌ', 'Question', 'أَسْئِلَةٌ', 'Questions'),
    (1, 'مِثَالٌ', 'Example', 'أَمْثِلَةٌ', 'Examples'),
    (1, 'زَمِيلٌ', 'Colleague, classmate', 'زُمَلَاءُ', 'Colleagues, classmates'),
    (1, 'جُمْلَةٌ', 'Sentence', 'جُمَلٌ', 'Sentences'),
    (1, 'عَلَامَةٌ', 'Sign, indication', 'عَلَامَاتٌ', 'Signs, indications'),
    (1, 'كَلِمَةٌ', 'Word', 'كَلِمَاتٌ', 'Words');


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

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES
                         (4, 'Prayer', 'صَلَاةٌ', 'Prayer (plural)', 'صَلَوَاتٌ'),
                         (4, 'School', 'مَدْرَسَةٌ', 'Schools', 'مَدَارِسُ'),
                         (4, 'Holiday', 'عُطْلَةٌ', 'Holidays', 'عُطَلٌ/عُطْلَاتٌ'),
                         (4, 'Television', 'تِلْفَازٌ', 'Televisions', 'تِلْفَازَاتٌ'),
                         (4, 'Plate, dish', 'طَبَقٌ', 'Plates, dishes', 'أَطْبَاقٌ'),
                         (4, 'Car', 'سَيَّارَةٌ', 'Cars', 'سَيَّارَاتٌ'),  
                         (4, 'Bus', 'حَافِلَةٌ', 'Buses', 'حَافِلَاتٌ'),  
                         (4, 'Hour, clock', 'سَاعَةٌ', 'Hours, clocks', 'سَاعَاتٌ'),  
                         (4, 'Newspaper', 'صَحِيفَةٌ', 'Newspapers', 'صُحُفٌ');

INSERT INTO verbs VALUES (5, 'To eat', 'أَكْلٌ', 'كُلْ', 'يَأْكُلُ', 'أَكَلَ'),
                         (5, 'To want; to order; to request', 'طَلَبٌ', 'أُطْلُبْ', 'يَطْلُبُ', 'طَلَبَ'),
                         (5, 'To prefer', 'تَفْضِيْلٌ', 'فَضِّلْ', 'يُفَضِّلُ', 'فَضَّلَ'),
                         (5, 'To drink', 'شُرْبٌ', 'اِشْرَبْ', 'يَشْرِبُ', 'شَرِبَ'),
                         (5, 'To change,convert; to transfer', 'تَحْوِيلٌ', 'حَوِّلْ', 'يُحَوِّلُ', 'حَوَّلَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES
                         (5, 'Drink', 'شَرَابٌ', 'Drinks', 'أَشْرِبَةٌ'),
                         (5, 'Food', 'طَعَامٌ', 'Food (plural)', 'أَطْعِمَةٌ'),
                         (5, 'Meal', 'وَجْبَةٌ', 'Meals', 'وَجْبَاتٌ'),
                         (5, 'Chicken', 'دَجَاجَةٌ', 'Chicken (plural)', 'دَجَاجٌ'), --TODO: check in textbook if there is shaddah
                         (5, 'Fish', 'سَمَكَةٌ', 'Fish (plural)', 'سَمَكٌ\أَسْمَاكٌ'),
                         (5, 'Fruit', 'فَاكِهَةٌ', 'Fruits', 'فَوَاكِهٌ'),
                         (5, 'Weight', 'وَزْنٌ', 'Weight (plural)', 'أَوْزَانٌ'),
                         (5, 'Kilo', 'كَيْلٌ', 'Kilos', 'أَكْيَالٌ'),
                         (5, 'Day', 'يَوْمٌ', 'Days', 'أَيَّامٌ'),
                         (5, 'Fat', 'سَمِينٌ', 'Fat (plural)', 'سِمَانٌ'),
                         (5, 'Water', 'مَاءٌ', 'Water (plural)', 'مِيَاهٌ'),
                         (5, 'Date', 'تَمْرَةٌ', 'Dates', 'تَمْرٌ/تُمُورٌ'),
                         (5, 'Meat', 'لَحْمٌ', 'Meat (plural)', 'لُحُومٌ'),
                         (5, 'Grapes', 'عِنَبٌ', 'Grapes (plural)', 'أَعْنَابٌ'),
                         (5, 'Salad', 'سَلَطَةٌ', 'Salad (plural)', 'سَلَطَاتٌ'),
                         (5, 'Table', 'مَائِدَةٌ', 'Tables', 'مَوَائِدٌ'),
                         (5, 'Guest', 'ضَيْفٌ', 'Guests', 'ضُيُوفٌ'),
                         (5, 'Hungry', 'جَوْعَانُ', 'Hungry (plural)', 'جَوْعَى'),
                         (5, 'Full', 'شَبْعَانُ', 'Full (plural)', 'شَبْعَى'),
                         (5, 'Thin', 'نَحِيفٌ', 'Thin (plural)', 'نِحَافٌ');

INSERT INTO verbs VALUES (6, 'Can; to be able to', 'اِسْتِطَاعَةٌ', 'اِسْتَطِعْ', 'يَسْتَطِيعُ', 'اِسْتَطَاعَ'),
                         (6, 'To work', 'عَمَلٌ', 'اِعْمَلْ', 'يَعْمَلُ', 'عَمِلَ'),
                         (6, 'To travel', 'مُسَافَرَةٌ /سِفَارٌ ', 'سَافِرْ', 'يُسَافِرُ', 'سَافَرَ (إِلَى)'),
                         (6, 'To wait', 'اِنْتِظَارٌ', 'اِنْتَظِرْ', 'يَنْتَظِرُ', 'اِنْتَظَرَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES
                         (6, 'Idea', 'فِكْرَةٌ', 'Ideas', 'أَفْكَا رٌ'),
                         (6, 'Lazy', 'كَسْلَانُ', 'Lazy (Plural)', 'كُسَالَى'),
                         (6, 'Night', 'لَيْلٌ', 'Nights', 'لَيَالٍ'),
                         (6, 'Sick, unwell; patient', 'مَرِيضٌ', 'Sick, unwell (plural)', 'مَرْضَى'),
                         (6, 'Alarm', 'مُنَبِّهٌ', 'Alarm (plural)', 'مُنَبِّهَاتٌ');

INSERT INTO verbs VALUES (7, 'To start', 'بِدَايَةٌ', 'اِبْدَأْ', 'يَبْدَأ', 'بَدَأَ'),
                         (7, 'To finish', 'اِنْتِهَاءٌ', 'اِنْتَهِ', 'يَنْتَهِي', 'اِنْتَهَى'),
                         (7, 'To study', 'دِرَاسَةٌ', 'اُدْرُسْ', 'يَدْرُسُ', 'دَرَسَ'),
                         (7, 'To teach', 'تَدْرِيسٌ', 'دَرِّسْ', 'يُدَرِّسُ', 'دَرَّسَ'),
                         (7, 'To be', 'كَوْنٌ', 'كُنْ', 'يَكُونُ', 'كَانَ'),
                         (7, 'To complete', 'إِكْمَالٌ', 'أَكْمِلْ', 'يُكْمِلُ', 'أَكْمَلَ'),
                         (7, 'To correct', 'تَصْحِيْحٌ', 'صَحِّحْ', 'يُصَحِّحُ', 'صَحَّحَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES
                         (7, 'Noticeboard', 'لَوْحَةٌ', 'Noticeboards', 'لَوْحَاتٌ'),
                         (7, 'Table; chart', 'جَدْوَلٌ', 'Tables; charts', 'جَدَاوِلٌ'),
                         (7, 'Week', 'أُسْبُوعٌ', 'Weeks', 'أَسَابِيعٌ'),
                         (7, 'Course, subject', 'مَادَّةٌ', 'Courses, subjects', 'مَوَادٌ'),
                         (7, 'Culture; education', 'ثَقَافَةٌ', 'Culture; education (plural)', 'ثَقَافَاتٌ'),
                         (7, 'Examination, test', 'اِخْتِبَارٌ', 'Examinations, tests', 'اِخْتِبَارَاتٌ'),
                         (7, 'Laboratory', 'مُخْتَبَرٌ', 'Laboratories', 'مُخْتَبَرَاتٌ'),
                         (7, 'Class', 'صَفٌّ', 'Classes', 'صُفُوفٌ'),
                         (7, 'Year', 'عَامٌ', 'Years', 'أَعْوَامٌ'),
                         (7, 'Lesson', 'حِصَّةٌ', 'Lessons', 'حِصَصٌ'),
                         (7, 'Faculty', 'كُلِيَّةٌ', 'Faculties', 'كُلِيَّاتٌ'),
                         (7, 'Time', 'وَقْتٌ', 'Times', 'أَوْقَاتٌ'),
                         (7, 'Break', 'اِسْتِرَاحَةٌ', 'Breaks', 'اِسْتِرَاحَاتٌ'),
                         (7, 'Library, bookstore', 'مَكْتَبَةٌ', 'Libraries, bookstores', 'مَكْتَبَاتٌ'),
                         (7, 'Computer', 'حَاسُوبٌ', 'Computers', 'حَوَاسِيبُ'),
                         (7, 'Month', 'شَهْرٌ', 'Months', 'أَشْهُرٌ\شُهُورٌ');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                         (8, 'To love; to like', 'حُّبٌّ', 'أَحِبَّ', 'يُحِبُّ', 'أَحَبَّ'),
                         (8, 'To draw', 'رَسْمٌ', 'اُرْسُمْ', 'يَرْسُمُ', 'رَسَمَ'),
                         (8, 'To choose', 'اِخْتِيَارٌ', 'اِخْتَرْ', 'يَخْتَارُ', 'اِخْتَارَ'),
                         (8, 'To become', '', '', '', 'أٌَصْبَحَ'), --TODO fill in rest of empty verbs & pl nouns from here
                         (8, 'To fill', '', '', '', 'مَلَأَ'),
                         (8, 'To rest, relax; to take a break', '', '', '', 'اِسْتَرَاحَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (8, 'Company', 'شَرِكَةٌ', 'Companies', 'شَرِكَاتٌ'),
                         (8, 'Hospital', 'مُسْتَشْفَى', 'Hospitals', ''),
                         (8, 'Pharmacist', 'صَيْدَلِيٌّ', 'Pharmacists', ''),
                         (8, 'Pilot', 'طَيَّارٌ', 'Pilots', ''),
                         (8, 'Person', 'شَخْصٌ', 'People', ''),
                         (8, 'Stage, level', 'مَرْحَلَةٌ', 'Stages, levels', ''),
                         (8, 'List, menu, table', 'قَائِمَةٌ', 'Lists, menus, tables', ''),
                         (8, 'Blank, space, gap', 'فَرَاغٌ', '(Plural) Blank, space, gap', 'فَرَاغَاتٌ'),
                         (8, 'Place, location', 'مَكَانٌ', 'Places, locations', ''),
                         (8, 'Nurse', 'مُمَرِّضٌ', 'Nurses', ''),
                         (8, 'Phrase, term', 'عِبَارَةٌ', 'Phrases, terms', ''),
                         (8, 'Occupation', 'مِهْنَةٌ', 'Occupations', ''),
                         (8, 'Infant; baby; child', 'طِفْلٌ', 'Infants; babies; children', '');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                         (9, 'To shop', 'تَسَوُّقٌ', 'تَسَوَّقْ', 'يَتَسَوَّقُ', 'تَسَوَّقَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (9, 'Dictionary', 'مُعْجَمٌ', '', ''),
                         (9, 'Notepad', 'دَفْتَرٌ', '', ''),
                         (9, 'Pen', 'قَلَمٌ', '', ''),
                         (9, 'Riyal (Saudi currency)', 'رِيَالٌ', '', ''),
                         (9, 'Shirt', 'قَمِيصٌ', '', ''),
                         (9, 'Thobe', 'ثَوْبٌ', '', '');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                         (10, 'To rain', '', '', '', 'أَمْطَرَ'),
                         (10, 'To leave', '', '', '', 'تَرَكَ'),
                         (10, 'To bless', '', '', '', 'بَارَكَ'),
                         (10, 'To stay;remain', '', '', '', 'بَقِيَ'),
                         (10, 'To speak', '', '', '', 'تَكَلَّمَ (مَعَ)'),
                         (10, 'To spend (time)', '', '', '', 'قَضَى'),
                         (10, 'To bring', '', '', '', 'أَحْضَرَ'),
                         (10, 'To attend', '', '', '', 'حَضَرَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (10, 'Umbrella', 'مِظَلَّةٌ', '', ''),
                         (10, 'Night', 'لَيْلَةٌ', '', ''),
                         (10, 'Degree', 'دَرَجَةٌ', '', ''),
                         (10, 'Husband; spouse', 'زَوْجٌ', '', ''),
                         (10, 'Market', 'سُوقٌ', '', ''),
                         (10, 'Season', 'فَصْلٌ', '', ''),
                         (10, 'Tent', 'خَيْمَةٌ', '', ''),
                         (10, 'Wife', 'زَوْجَةٌ', '', '');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                         (11, 'To move', '', '', '', 'اِنْتَقَلَ'),
                         (11, 'To take (time)', '', '', '', 'اِسْتَغْرَقَ'),
                         (11, 'To marry', '', '', '', 'تَزَوَّجَ'),
                         (11, 'To visit', '', '', '', 'زَارَ'),
                         (11, 'To be polluted', '', '', '', 'تَلَوَّثَ'),
                         (11, 'To be overcrowded', '', '', '', 'اِزْدَحَمَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (11, 'Director / Manager / Headmaster', 'مُدِيرٌ', '', ''),
                         (11, 'Country', 'بَلَدٌ', '', ''),
                         (11, 'Opinion', 'رَأْيٌ', '', ''),
                         (11, 'City', 'مَدِينَةٌ', '', ''),
                         (11, 'Problem', 'مُشْكِلَةٌ', '', ''),
                         (11, 'Time', 'وَقْتٌ', '', ''),
                         (11, 'Trip', 'رِحْلَةٌ', '', ''),
                         (11, 'Teacher', 'أُسْتَاذٌ', '', ''),
                         (11, 'Village', 'قَرْيَةٌ', '', ''),
                         (11, 'Train', 'قِطَارٌ', '', '');

-- INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
--                          (12, '', '', '', '', '');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (12, 'Hobby', 'هِوَايَةٌ', '', ''),
                         (12, 'Magazine', 'مَجَلَّةٌ', '', ''),
                         (12, 'Exhibition', 'مَعْرِضٌ', '', ''),
                         (12, 'Verse', 'آيَةٌ', '', ''),
                         (12, 'Wing, section', 'جَنَاحٌ', '', ''),
                         (12, 'Newspaper', 'صَحِيفَةٌ', '', ''),
                         (12, 'Club', 'جَمْعِيَّةٌ', '', ''),
                         (12, 'Hadeeth', 'حَدِيثٌ', '', ''),
                         (12, 'Stamp', 'طَابَعٌ', '', '');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                        (13, 'To stay', '', '', '', 'أَقَامَ'),
                        (13, 'To book', '', '', '', 'حَجَزَ'),
                        (13, 'To depart', '', '', '', 'غَادَرَ'),
                        (13, 'To open', '', '', '', 'فَتَحَ'),
                        (13, 'To lose', '', '', '', 'فَقَدَ'),
                        (13, 'To confirm', '', '', '', 'أَكَّدَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (13, 'Booking', 'حَجْزٌ', '', ''),
                         (13, '(Air)Line', 'خَطٌ', '', ''),
                         (13, 'Ticket', 'تَذْكِرَةٌ', '', ''),
                         (13, 'Passport', 'جَوَازٌ', '', ''),
                         (13, 'Visa', 'تَأْشِيرَةٌ', '', ''),
                         (13, 'Bag', 'حَقِيبَةٌ', '', ''),
                         (13, 'Plane', 'طَائِرَةٌ', '', ''),
                         (13, 'Traveler', 'مُسَافِرٌ', '', ''),
                         (13, 'Hotel', 'فُنْدُقٌ', '', ''),
                         (13, 'Colour', 'لَوْنٌ', '', ''),
                         (13, 'Worker', 'مُوَظَّفٌ', '', '');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                        (14, 'To shave', '', '', '', 'حَلَقَ'),
                        (14, 'To make umrah', '', '', '', 'اِعْتَمَرَ'),
                        (14, 'To slaughter / sacrifice', '', '', '', 'ذَبَحَ'),
                        (14, 'To throw', '', '', '', 'رَمَى'),
                        (14, "To make sa`ee", '', '', '', 'سَعَى'),
                        (14, 'To feel', '', '', '', 'شَعَرَ'),
                        (14, 'To take off / undress', '', '', '', 'خَلَعَ'),
                        (14, 'To fast', '', '', '', 'صَامَ'),
                        (14, 'To make tawaaf', '', '', '', 'طَافَ'),
                        (14, 'To wear', '', '', '', 'لَبِسَ'),
                        (14, 'To make the Talbiyaa', '', '', '', 'لَبَّى'),
                        (14, 'To arrive', '', '', '', 'وَصَلَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (14, 'Circuit / Lap', 'شَوْطٌ', '', ''),
                         (14, 'Unit of prayer', 'رَكْعَةٌ', '', ''),
                         (14, 'Head', 'رَأْسٌ', '', ''),
                         (14, 'Sacrifice', 'هَدْيَةٌ', '', '');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                        (15, 'To be afflicted', '', '', '', 'أَصَابَ'),
                        (15, 'To rise', '', '', '', 'اِرْتَفَعَ'),
                        (15, 'To be absent', '', '', '', 'تَغَيَّبَ'),
                        (15, 'To cure', '', '', '', 'شَفَى'),
                        (15, 'To check', '', '', '', 'فَحَصَ'),
                        (15, 'To meet', '', '', '', 'قَابَلَ'),
                        (15, 'To advise', '', '', '', 'نَصَحَ');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (15, 'Tooth', 'سِنٌ', '', ''),
                         (15, 'Nose', 'أَنْفٌ', '', ''),
                         (15, 'Visit', 'زِيَارَةٌ', '', ''),
                         (15, 'Ambulance', 'إِسْعَافٌ', '', ''),
                         (15, 'Kidney', 'كُلْيَةٌ', '', ''),
                         (15, 'Ear', 'أُذُنٌ', '', ''),
                         (15, 'Throat', 'حَنْجَرَةٌ', '', ''),
                         (15, 'Appointment', 'مَوعِدٌ', '', ''),
                         (15, 'Medicine', 'دَوَاءٌ', '', ''),
                         (15, 'Chest', 'صَدْرٌ', '', '');

INSERT INTO verbs (chapter_number, english, arabic_verbal_nouns, arabic_command, arabic_present, arabic_past) VALUES
                        (16, 'To give', '', '', '', 'أَعْطَى'),
                        (16, 'To approach', '', '', '', 'اِقْتَرَبَ'),
                        (16, 'To move away from', '', '', '', 'اِبْتَعَدَ'),
                        (16, 'To help', '', '', '', 'سَاعَدَ'),
                        (16, 'To see', '', '', '', 'رَأَى');

INSERT INTO nouns (chapter_number, english, arabic, english_plural, arabic_plural) VALUES 
                         (16, 'Celebration / Festival', 'عِيدٌ', '', ''),
                         (16, 'River', 'نَهْرٌ', '', ''),
                         (16, 'Museum', 'مَتْحَفٌ', '', ''),
                         (16, 'Farm', 'مَزْرَعَةٌ', '', ''),
                         (16, 'Team / Group', 'فَرِيقٌ', '', ''),
                         (16, 'Sacrifice', 'أُضْحِيَةٌ', '', ''),
                         (16, 'Capital City', 'عَاصِمَةٌ', '', ''),
                         (16, 'Mountain', 'جَبَلٌ', '', '');
                         (16, 'Poor', 'فَقِيرٌ', '', '');
