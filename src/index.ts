import Dog from "./Dog.js";
import ShelterDog from "./ShelterDog.js";
import { add, divide, multiply } from "./utils.js";

console.log("인덱스 파일로부터...", Dog);

const cloudy = new Dog("구름이", "보더믹스", 5.8);
cloudy.bark();

const cookie = new ShelterDog("쿠키", "보더믹스", 2, "하남센터")

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(40, 5));
