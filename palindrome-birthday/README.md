# Check if birth date is palindrome

step 1 :

- return a date input with a button
- input gets a event listener

```javascript
   <input
          onChange={(e) => {
            date = e.target.value;
            console.log(date)
          }}
          id="datePicker"
          type="date"
          max="9999-12-31"
          required
        />
```
- now