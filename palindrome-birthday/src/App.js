import { React, useState } from "react";
import "./App.css";
// palindrome birthday
// Take your user's birthday
// Tell whether user was born on a palindrome day or not.
// You can put dates in MM/DD/YYYY format, DD/MM/YYYY, MM/DD/YY format etc. to check if they have any chance.
// If not, then tell them what is the nearest date from their birth-date which is a palindrome date.
// Tell them by how many days they missed it.
// bonus
// show a gif when you're doing the calculation to show that numbers are being crunched.
// problem with this is that it will not slow your computer, explore setTimeout in JS to produce an artificial delay.

let date;

let newoutput = "";

function App() {
  const [outputDiv, setOutputDiv] = useState("");

  function inputDateHandler(e) {
    e.preventDefault();
    if (date) {
      // a function that will check for palindrome
      // console.log("yayyyyayay", date)
      setOutputDiv(<p>yoyoyo.</p>);
      checkPalindrome();
    } else {
      setOutputDiv(<p>Please fill date field.</p>);
    }
  }

  function checkPalindrome() {
    // before checking for palindrome we have to generate the date
    const dateArray = date.split("-");
    console.log(dateArray, "<<<<<<<<<<");
    //use the index values and get the assign the dates
    const inputYear = dateArray[0];
    const inputMonth = dateArray[1];
    const inputDate = dateArray[2];
    let setFlag = checkAllFormatsOfDate(inputYear, inputMonth, inputDate); // function to check all date formats
    if (setFlag) {
      newoutput = `Whoa!!! Your birthdate in format ${setFlag} is palindrome`;
    } else {
      newoutput = `Awww! Your birthdate is not palindrome.`;
    }
    setOutputDiv(<p>{newoutput}</p>);
  }

  function checkAllFormatsOfDate(yyyy, mm, dd) {
    // check all the combinations
    //yyyy-mm-dd format string
    const dateFormat1 = yyyy + mm + dd;

    //dd-mm-yyyy format string
    const dateFormat2 = dd + mm + yyyy;

    //mm-dd-yy format string
    const dateFormat3 = mm + dd + yyyy.substring(2);

    //m-dd-yyyy format string
    const dateFormat4 = Number(mm) + dd + yyyy;

    if (isPalindrome(dateFormat1)) {
      return `${yyyy}-${mm}-${dd}`;
    } else if (isPalindrome(dateFormat2)) {
      return `${dd}-${mm}-${yyyy}`;
    } else if (isPalindrome(dateFormat3)) {
      return `${mm}-${dd}-${yyyy.substring(2)}`;
    } else if (isPalindrome(dateFormat4)) {
      return `${Number(mm)}-${dd}-${yyyy}`;
    } else {
      return null;
    }
  }

  function isPalindrome(str) {
    // check if number is is Palindrome
    var len = str.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  return (
    <div className="App">
      <section id="mainSection">
        <h2>
          Enter your birthdate and we will tell you if your birthdate is a
          palindrome
        </h2>
        <p style={{ fontSize: "1rem" }}>
          This app checks your birth-date in 4 formats{" "}
          <i>yyyy-mm-dd, dd-mm-yyyy, m-dd-yyyy</i>
          <br /> e.g. if your birth-date is 01 Aug 1995, then app will check for
          19950801, 01081995,1081995
        </p>
        <form onSubmit={inputDateHandler}>
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
          <button type="submit" className="linkPrimary">
            check
          </button>
        </form>
        <div>{outputDiv}</div>
      </section>
    </div>
  );
}

export default App;
