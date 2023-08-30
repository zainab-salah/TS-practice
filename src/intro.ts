// const sm = 1;
// const md = 2;
// const lg = 3;

//PascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
}

//this enum auto knows the values of these it gonna increase it it self
let mySize: Size = Size.Medium;
console.log(mySize); //2

//passing optional param 
function calc(inc: number, tax?: number): number {
  if ((tax || 2022) < 2022)
    return inc * 2;
  return inc * 3
}
//passing optional param as giving it a value
function calc2(inc: number, tax = 2022): number {
  if (tax < 2022)
    return inc * 2;
  return inc * 3
}
calc(10_100, 2022)
calc(10_100)
calc2(10_100)


//objects
let employess: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void
} = {
  id: 1, name: "Zainab", retire: (date: Date) => {
    console.log(date)
  }
}


//objects DRY define a type to objects to make code shorter
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void
}
let EmployesShorter: Employee = {
  id: 1, name: "Zainab", retire: (date: Date) => {
    console.log(date)
  }
}