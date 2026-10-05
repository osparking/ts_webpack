import Dog from "./Dog";
import { add, divide, multiply } from "./utils";

console.log("인덱스 파일로부터...", Dog);

const cloudy = new Dog("구름이", "보더믹스", 5.8);
cloudy.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(40, 5));
