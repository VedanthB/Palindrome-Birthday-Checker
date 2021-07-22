# Check if birth date is palindrome

step 1 :

- return a date input with a button
- input gets a event listener

```javascript
<input
  onChange={(e) => {
    date = e.target.value;
    console.log(date);
  }}
  id="datePicker"
  type="date"
  max="9999-12-31"
  required
/>
```

- now in the in input handler(use if else)set the outputDiv state and then write a function to checkPalindrome

- in the checkPalindrome function we have to first split the date by - and then set input year, date, and month

- use a serFlag var to checkFotDateFormats which will take in input year, month and date and arguments

- use if else to to check or all date formats else we will check for the for the next closest day

check all date formats function will

- check for Palindrome function on stack overflow
