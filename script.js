students = 30;

students += 1;
console.log(students);

students -= 1;
console.log(students);

students *= 2;
console.log(students);

students /= 2;
console.log(students);

students **= 2;
console.log(students);

students %= 2;
console.log(students);

students = 30;

students++;
console.log(students);

students--;
console.log(students);

let result1 = 10 + 5 * 2;
console.log(result1);

let result2 = (10 + 5) * 2;
console.log(result2);

let result3 = 20 / 2 + 3 ** 2;
console.log(result3);

let result4 = 12 % 5 + 4 / 2;
console.log(result4);

document.getElementById("title").textContent = "JavaScript Arithmetic";
document.getElementById("result").textContent = `Final student count: ${students}`;