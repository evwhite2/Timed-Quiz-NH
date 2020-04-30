# Timed-Quiz-NH

Test your knowledge of natural science and human history!

This timed quiz was built using JavaScript & jQuery. 

An interval is set to count down "timeLeft" every second, Once the "timeLeft" variable reaches 0, the next question is called by incrementing the "qCount", which is set the first index in the array of "questions". The "qCount" is also incremented, of course, when the user selects an answer". 

The answer (whether selected or not) is compared to the correct answer, and a score is incremented in the "score" and "wrong" variables accordingly.

Once the "qCount" completes the length of itself, "scoreKeeper()" is called to reveal the value fo the "scrore" variable(s). 

https://evwhite2.github.io/Timed-Quiz-NH/ 

Tech Used: 
- jQuery

Future Development:
