const user = {
  firstName: "Furkan",
  lastName: "Er",
  age: 25,
  job: "Developer",
  friends: ["Bersu", "Furkan", "Sami"],
  calcBirthYear: function () {
    return 2022 - user.age;
  },

  summary: function () {
    return `User with name ${this.firstName}, last name ${this.lastName}, age ${this.age}, job ${this.job} and friends ${this.friends}.`;
  },
};

console.log(user.calcBirthYear());

const demand = prompt("Kullanıcı hakkında hangi bilgiye erişmek istiyorsunuz?");

console.log(user[demand]);

user.city = "İstanbul";

console.log(user);

console.log(
  `${user.firstName} has ${user.friends.length} friends, and his best friend is called ${user.friends[0]}`
);

console.log(user.summary());

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -10, -1, "error", 9, 13, 20, 15, 14, 9, 5];

const amplitudeCalc = function (arr1, arr2) {
  /* arr2.forEach((element) => {
    arr1.push(element);
  }); */
  arr1 = arr1.concat(arr2);

  let min = arr1[0];
  let max = arr1[0];

  arr1.forEach((temp) => {
    if (typeof temp == "number") {
      if (temp > max) {
        max = temp;
      }
      if (temp < min) {
        min = temp;
      }
    }
  });
  return max - min;
};

const amplitude = amplitudeCalc(temperatures, temperatures2);
console.log(amplitude);

const printForecast = function (arr) {
  let i = 1;
  let output = "";
  arr.forEach((temp) => {
    output = output.concat(`... ${temp} C in ${i} days `);
    i++;
  });
  return output;
};

const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

const output1 = printForecast(array1);
const output2 = printForecast(array2);

console.log(output1, output2);
