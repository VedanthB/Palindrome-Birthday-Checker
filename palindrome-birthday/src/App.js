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

//define var for themes
const darkTheme = ["#000000", "white"];
const lightTheme = ["#52057B", "white"];
const highlightTheme = ["#000000", "#52057B"];

//theme flag
let setThemeFlag = 0;

//for next date

const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function App() {
  const [outputDiv, setOutputDiv] = useState("");
  // state for the themes
  const [theme, setTheme] = useState(darkTheme);
  const [highLightTheme, setHighLightTheme] = useState(highlightTheme[1]);

   const inputDateHandler = e => {
    e.preventDefault();
    if (date) {
      // a function that will check for palindrome
      // console.log("yayyyyayay", date)
      setOutputDiv(<p>Loading.....</p>);
      setTimeout(() => {
        checkPalindrome();
      }, 4000);
    } else {
      setOutputDiv(<p>Please fill date field.</p>);
    }
  }

  const checkPalindrome () => {
    // before checking for palindrome we have to generate the date
    const dateArray = date.split("-");
    console.log(dateArray, "<<<<<<<<<<");
    //use the index values and get the assign the dates
    const inputYear = dateArray[0];
    const inputMonth = dateArray[1];
    const inputDate = dateArray[2];
    let setFlag = checkAllFormatsOfDate(inputYear, inputMonth, inputDate); // function to check all date formats
    if (setFlag) {
      // TODO: CHECK FOR NEAREST DAY (NEED HELP WITH THIS AS WELL)
      newoutput = `Whoooohooo!!! Your birth-date in format ${setFlag} is palindrome`;
    } else {
      let [nextdate, diff] = findNextDate(inputDate, inputMonth, inputYear);
      newoutput = `Awww! Your birthdate is not palindrome. Nearest palindrome date is ${nextdate} You missed it by ${diff} days.`;
    }
    setOutputDiv(<p>{newoutput}</p>);
  }

  const checkAllFormatsOfDate = (yyyy, mm, dd) => {
    // check all the combinations
    //yyyy-mm-dd format string
    const dateFormat1 = yyyy + mm + dd;
    console.log(dateFormat1);
    //dd-mm-yyyy format string
    const dateFormat2 = dd + mm + yyyy;

    //mm-dd-yy format string
    const dateFormat3 = mm + dd + yyyy.substring(2); // why this??????

    //m-dd-yyyy format string
    const dateFormat4 = Number(mm) + dd + yyyy;

    if (isPalindrome(dateFormat1)) {
      // we do return here because stops when we get the value and quits
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

  const isPalindrome = str => {
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

  const findNextDate (date, month, year) => {
    let ddNo1 = Number(date);
    let mmNo1 = Number(month);
    let yyNo1 = Number(year);
    let ddNo2 = Number(date);
    let mmNo2 = Number(month);
    let yyNo2 = Number(year);

    for (let i = 1; i > 0; i++) {
      //forward check
      ddNo1 = ddNo1 + 1;
      if (ddNo1 > Number(datesInMonth[mmNo1 - 1])) {
        ddNo1 = 1;
        mmNo1 = mmNo1 + 1;
        if (mmNo1 > 12) {
          mmNo1 = 1;
          yyNo1 = yyNo1 + 1;
        }
      }
      let yyString = yyNo1.toString();
      let mmString = mmNo1.toString();
      let ddString = ddNo1.toString();
      if (mmString.length == 1) {
        mmString = "0" + mmString;
      }
      if (ddString.length == 1) {
        ddString = "0" + ddString;
      }
      let setFlagNextDate = checkAllFormatsOfDate(yyString, mmString, ddString);
      if (setFlagNextDate) {
        return [`${setFlagNextDate}`, i];
      }

      //backward check
      if (yyNo2 > 1) {
        ddNo2 = ddNo2 - 1;
        if (ddNo2 < 1) {
          mmNo2 = mmNo2 - 1;
          if (mmNo2 < 1) {
            mmNo2 = 12;
            yyNo2 = yyNo2 - 1;
            if (yyNo2 < 1) {
              break;
            }
            ddNo2 = datesInMonth[mmNo2 - 1];
          }
        }
        let yyString = yyNo2.toString();
        let mmString = mmNo2.toString();
        let ddString = ddNo2.toString();
        if (mmString.length == 1) {
          mmString = "0" + mmString;
        }
        if (ddString.length == 1) {
          ddString = "0" + ddString;
        }
        let setFlagNextDate = checkAllFormatsOfDate(
          yyString,
          mmString,
          ddString
        );
        if (setFlagNextDate) {
          return [`${setFlagNextDate}`, i];
        }
      }
    }
  }

  return (
    <div className="App">
      {/* header gets the theme back ground */}
      {/* accessing the properties using index values */}
      <header style={{ backgroundColor: `${theme[0]}`, color: `${theme[1]}` }}>
        <div className="Nav">
          <div className="leftCorner">
            <ul className="list">
              <li>
                <label className="switch">
                  <input
                    onChange={() => {
                      // using flag to set the theme
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
          </div>
          <div className="RightCorner">
            <a
              target="_blank"
              href="https://github.com/VedanthB/Palindrome-Birthday-Checker"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>
        <section className="hero">
          <div className="text-section">
            <h1>
              Check out if your{" "}
              <span style={{ color: `${highLightTheme}` }}>Birth-date</span> is{" "}
              <span style={{ color: `${highLightTheme}` }}>Palindrome</span>.
            </h1>
            <p>
              A palindrome is a word/number which reads the same backward as
              forward
            </p>
            <a className="linkPrimary" href="#mainSection">
              click here
            </a>
          </div>
        </section>
      </header>
      <section id="mainSection">
        <h2>
          Enter your birth-date and we will tell you if your birth-date is a
          palindrome
        </h2>
        <p style={{ fontSize: "1rem" }}>
          This app checks your birth-date in 4 formats{" "}
          <i>yyyy-mm-dd, dd-mm-yyyy, mm-dd-yyyy and m-dd-yyyy</i>
          <br /> e.g. if your birth-date is 01 Aug 1995, then app will check for
          19950801, 01081995,1081995
        </p>
        <form className="form" onSubmit={inputDateHandler}>
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

      <footer style={{ backgroundColor: `${theme[0]}`, color: `${theme[1]}` }}>
        <ul className="list">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vedanth-bora-a7553818b/"
              rel="noreferrer"
            >
              Linked in
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/VedanthB"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://vedanthbora.netlify.app"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </li>
        </ul>
        <div className="footer-text">© | 2020 | VedanthB</div>
      </footer>
    </div>
  );
}

export default App;
