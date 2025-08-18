# plan for arabic quiz fullstack app based on bayna yadayk book
**features**
1. user can register and login
user can select from chapters of the book e.g. chapter 1 which is ...
bayna yadayk book has 16 chapters
    name of the chapters 
    1. greetings
    2. family
    ... 16.  

2. user can take quiz
3. user can see his score
4. user can see his history


technical plan
1. create a postgresql database
2. database consists of 3 tables
    1. users 
        - users has username, password, email, score, history
    2. chapters
        - chapters has json of arabic words and english words
        - e.g man in arabic is 
    3. scores
3. create next app
4. create login page
5. create register page
6. create chapters page
7. create quiz page
8. create score page
9. create history page
10. use next api with express and postgresql for backend
11. deploy to some free hosting



### LEADERBOARD
 
- ~~user table to be UPDATED to include school and class column defaulted to NULL,~~
- each user can join class via code on profile page and also leaderboard page.
- user has option to create new school n class which will generate a code to share with students to join
- user scores 150 for each correct answer. total score is displayed as part of leaderboard.
  leaderboard in first iteration will show all time score and not weekly or monthly.
- leaderboard will query through API route the user_scores table, the user group / class
  and will retrieve summation of quiz scores for each user in that group across all quizzes and multiply by 150. 


  