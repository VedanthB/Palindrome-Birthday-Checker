# Check if birth date is palindrome

>step 1 :

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

>## for dark mode

- create a variable to store dark and light themes
- and the highlight theme as well (both in an array so we can access the value later on)
- set states for theme and highlight theme , set initial theme and highlight theme values
- now the toggle switch use if else in onChange event to change the themes with the state values

```javascript
<ul className="list">
  <li>
    <label className="switch">
      <input
        onChange={() => {
          using flag to set the theme
          setThemeFlag = setThemeFlag + 1;
          if (setThemeFlag % 2 === 0) {
            setTheme(darkTheme);
            setHighLightTheme(highlightTheme[1]);
          } else {
            setTheme(lightTheme);
            setHighLightTheme(highlightTheme[0]);
          }
        }}
        type="checkbox"
      />
      <span className="slider round"></span>
    </label>
  </li>
  <li>Click to change theme</li>
</ul>
```

- then style the themes in header and footer and where-ever necessary
