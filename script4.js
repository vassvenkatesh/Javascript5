function currySum(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}
currySum(10)(20)(30);

function curryStudent(name) {
    return function(department) {
        return function(salary) {
            console.log(name);
            console.log(department);
            console.log(salary);
        };
    };
}
curryStudent("Venkatesh")("CSE")(40000);

function curryMultiply(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c);
        };
    };
}
curryMultiply(2)(3)(4);

function curried(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

function uncurried(a, b, c) {
    return a + b + c;
}

console.log(curried(10)(20)(30));
console.log(uncurried(10, 20, 30));

function curriedFour(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a + b + c + d;
            };
        };
    };
}

function uncurriedFour(a, b, c, d) {
    return a + b + c + d;
}

console.log(curriedFour(10)(20)(30)(40));
console.log(uncurriedFour(10, 20, 30, 40));


let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let mergedNumbers = [...numbers1, ...numbers2];
console.log(mergedNumbers);

let students1 = ["Venkatesh", "Rahul", "Arun", "Kiran", "Sai"];
let students2 = ["Priya", "Divya", "Anu", "Sneha", "Riya"];
let allStudents = [...students1, ...students2];
console.log(allStudents);

let originalArray = [10, 20, 30, 40];
let newArray = [...originalArray, 50, 60, 70];
console.log(newArray);

let employee1 = {
    name: "Venkatesh",
    role: "Developer"
};

let employee2 = {
    department: "CSE",
    experience: "Fresher"
};

let mergedEmployee = {
    ...employee1,
    ...employee2
};

console.log(mergedEmployee);

let employee = {
    name: "Venkatesh",
    role: "Developer"
};

let employeeWithSalary = {
    ...employee,
    salary: 40000
};

console.log(employeeWithSalary);

let object1 = {
    name: "Venkatesh",
    age: 22
};

let object2 = {
    city: "Hyderabad",
    role: "Developer"
};

let combinedObject = {
    ...object1,
    ...object2
};

console.log(combinedObject);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let reverseArray = [...array2.reverse(), ...array1.reverse()];
console.log(reverseArray);


function fixedValues(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

fixedValues(10, 20, 30, 40, 50);

function student(name, department, ...marks) {
    console.log(name);
    console.log(department);
    console.log(marks);
}

student("Venkatesh", "CSE", 80, 85, 90);

function additionalNumbers(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}

additionalNumbers(10, 20, 30, 40, 50, 60);

function fifthValue(a, b, c, d, ...rest) {
    console.log(rest[0]);
}

fifthValue(10, 20, 30, 40, 50, 60, 70);

function productDetails(product, price, ...details) {
    console.log(product);
    console.log(price);
    console.log(details);
}

productDetails("Laptop", 50000, "Dell", "Black", "i7");

function tenNumbers(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

tenNumbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);


let values = [10, 20, 30, 40];

let [value1, value2, value3, value4] = values;

console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);

let studentData = ["Venkatesh", "CSE", 7.53];

let [studentName, department, cgpa] = studentData;

console.log(studentName);
console.log(department);
console.log(cgpa);

let numbers3 = [10, 20, 30, 40, 50];

let [firstValue, , , fourthValue] = numbers3;

console.log(firstValue);
console.log(fourthValue);

let nestedArray = [10, [20, 30], 40];

let [a, [b, c], d] = nestedArray;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let threeLevelArray = [10, [20, [30, 40]]];

let [x, [y, [z, w]]] = threeLevelArray;

console.log(x);
console.log(y);
console.log(z);
console.log(w);


let employeeDetails = {
    name: "Venkatesh",
    designation: "Developer",
    salary: 40000
};

let {
    name: employeeName,
    designation,
    salary: employeeSalary
} = employeeDetails;

console.log(employeeName);
console.log(designation);
console.log(employeeSalary);

let studentObject = {
    name: "Venkatesh",
    department: "CSE",
    cgpa: 7.53
};

let {
    name: sName,
    department: sDepartment,
    cgpa: sCgpa
} = studentObject;

console.log(sName);
console.log(sDepartment);
console.log(sCgpa);

let fiveProperties = {
    name: "Venkatesh",
    age: 22,
    city: "Hyderabad",
    role: "Developer",
    salary: 40000
};

let {
    name: pName,
    city: pCity,
    salary: pSalary
} = fiveProperties;

console.log(pName);
console.log(pCity);
console.log(pSalary);

let companyData = {
    employee: {
        name: "Venkatesh"
    },
    team: {
        members: ["Rahul", "Arun", "Kiran"]
    }
};

let {
    employee: { name: empName },
    team: { members }
} = companyData;

console.log(empName);
console.log(members);

let company = {
    department: {
        employee: {
            name: "Venkatesh"
        }
    }
};

let {
    department: {
        employee: { name: companyEmployeeName }
    }
} = company;

console.log(companyEmployeeName);


let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.push("Papaya");
fruits.push("Watermelon");
fruits.push("Pineapple");

console.log(fruits);

let numbers4 = [10, 20, 30, 40, 50];

numbers4.pop();

console.log(numbers4);

let studentNames = ["Venkatesh", "Rahul", "Arun", "Kiran", "Sai"];

studentNames.shift();

console.log(studentNames);

let numbers5 = [30, 40, 50, 60];

numbers5.unshift(10, 20);

console.log(numbers5);

let numbers6 = [10, 20, 30, 40, 50];

numbers6.splice(2, 1, 100);

console.log(numbers6);

let values2 = [10, 20, 30, 40, 50, 60];

values2.splice(2, 2);

console.log(values2);

let values3 = [10, 20, 60, 70];

values3.splice(2, 0, 30, 40, 50);

console.log(values3);

let values4 = [10, 20, 30, 40, 50];

values4.splice(2, 2, 100, 200, 300);

console.log(values4);

let studentsList = ["Venkatesh", "Rahul", "Arun", "Kiran", "Sai"];

studentsList.splice(2, 1);

console.log(studentsList);

let cart = ["Laptop", "Mouse", "Keyboard"];

cart.push("Monitor");
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

cart.unshift("Headphones");
console.log(cart);


let array3 = [1, 2, 3];
let array4 = [4, 5, 6];

let concatenatedArray = array3.concat(array4);

console.log(concatenatedArray);

let array5 = [1, 2];
let array6 = [3, 4];
let array7 = [5, 6];

let allArrays = array5.concat(array6, array7);

console.log(allArrays);

let values5 = [10, 20, 30, 40, 50, 60, 70, 80];

let extractedValues = values5.slice(2, 6);

console.log(extractedValues);

let studentList2 = ["Venkatesh", "Rahul", "Arun", "Kiran", "Sai"];

let firstThree = studentList2.slice(0, 3);

console.log(firstThree);

let nestedNumbers = [1, [2, [3, [4]]]];

let flatArray = nestedNumbers.flat(3);

console.log(flatArray);

let fourLevelArray = [1, [2, [3, [4, [5]]]]];

let flatArray2 = fourLevelArray.flat(Infinity);

console.log(flatArray2);

let sliceArray = [10, 20, 30, 40, 50];

let sliced = sliceArray.slice(1, 4);

console.log(sliced);
console.log(sliceArray);

let spliceArray = [10, 20, 30, 40, 50];

let spliced = spliceArray.splice(1, 3);

console.log(spliced);
console.log(spliceArray);


let numbers7 = [10, 20, 30, 40, 50];

console.log(numbers7.includes(50));

let duplicateArray = [10, 20, 30, 20, 40, 20];

console.log(duplicateArray.indexOf(20));

let duplicateArray2 = [10, 20, 30, 20, 40, 20];

console.log(duplicateArray2.lastIndexOf(20));

let numbers8 = [50, 20, 40, 10, 30];

numbers8.sort((a, b) => a - b);

console.log(numbers8);

let numbers9 = [10, 20, 30, 40, 50];

numbers9.reverse();

console.log(numbers9);