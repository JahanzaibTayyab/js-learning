import inquirer from "inquirer";

const validatePhoneNumber = (value) => {
  // regular function
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  const pass = value.match(
    /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
  );
  if (pass) {
    return true;
  }
  return "Please enter a valid phone number";
};

//promsie .then((value))
// const result = await promise

// async await

const takeUserInput = async () => {
  const result = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What's your first name",
    },
    {
      type: "input",
      name: "last_name",
      message: "What's your last name",
    },
    {
      type: "input",
      name: "hobby",
      message: "What's your hobby",
    },
    {
      type: "input",
      name: "fav_color",
      message: "What's your fav color",
      default() {
        return "Black";
      },
    },
    {
      type: "input",
      name: "phone",
      message: "What's your phone number",
      validate: validatePhoneNumber,
    },
  ]);
  console.log("🚀 ~ file: index.js ~ line 26 ~ takeUserInput ~ result", result);
};

const welcome = () => {
  takeUserInput();
  //   inquirer
  //     .prompt([
  //       {
  //         type: "input",
  //         name: "first_name",
  //         message: "What's your first name",
  //       },
  //       {
  //         type: "input",
  //         name: "last_name",
  //         message: "What's your last name",
  //       },
  //       {
  //         type: "input",
  //         name: "hobby",
  //         message: "What's your hobby",
  //       },
  //       {
  //         type: "input",
  //         name: "fav_color",
  //         message: "What's your fav color",
  //         default() {
  //           return "Black";
  //         },
  //       },
  //     ])
  //     .then((value) => {
  //       console.log(value);
  //     });
};
welcome();
