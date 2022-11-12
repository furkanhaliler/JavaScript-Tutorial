const user1 = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  bmi: undefined,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const user2 = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  bmi: undefined,
  calcBMI: function () {
    this.bmi = this.mass / this.height;
    return this.bmi;
  },
};

user1.calcBMI();
user2.calcBMI();

if (user1.bmi > user2.bmi) {
  console.log(
    `${user1.firstName}'s BMI (${user1.bmi}) is higher than ${user2.firstName}'s BMI (${user2.bmi}).`
  );
} else {
  console.log(
    `${user2.firstName}'s BMI (${user2.bmi}) is higher than ${user1.firstName}'s BMI (${user1.bmi}).`
  );
}
