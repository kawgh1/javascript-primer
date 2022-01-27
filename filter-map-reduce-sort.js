//
// ES6 - filter, map, reduce, sort
// Higher Order Functions with Arrays

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//////////////////////////////////
// FOR EACH
//////////////////////////////////

// forEach is just a better way to loop thru an array, rather than a for loop
// it doesnt return anything back

// traditional for loop
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
companies.forEach(function (company) {
    console.log(company.name);
});

//////////////////////////////////
// FILTER
//////////////////////////////////

// filter - get all ages 21 and over

// traditional for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     }
// });

const canDrink = ages.filter((age) => age >= 21);

console.log(canDrink);

// Filter retail companies

const retailCompanies = companies.filter(function (company) {
    if (company.category === "Retail") {
        return true;
    }
});
console.log(retailCompanies);

// returns
// 0: {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
// 1: {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
// 2: { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },

const retailCompanies2 = companies.filter(
    (company) => company.category === "Retail"
);
console.log(retailCompanies2);

// returns
// 0: {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
// 1: {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
// 2: { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },

// return all the companies that started in the 1980s
const eightiesCompanies = companies.filter(
    (company) => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);

// returns
// 0: {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
// 1: {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
// 2: {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}
// 3: {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}
// 4: {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}

// return companies that lasted MORE than 10 years

const moreThanTenYears = companies.filter(
    (company) => company.end - company.start > 10
);
console.log(moreThanTenYears);

// returns
// 0: {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
// 1: {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
// 2: {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
// 3: {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}

//////////////////////////////////
// MAP
//////////////////////////////////

// Create an array of company names

// const companyNames = companies.map(function (company) {
//     return company.name;
// });

// arrow function

const companyNames = companies.map((company) => company.name);

console.log(companyNames);

// returns
//  ['Company One', 'Company Two', 'Company Three', 'Company Four',
//   'Company Five', 'Company Six', 'Company Seven', 'Company Eight', 'Company Nine']

// Create an array of company names and their start to end dates

// const testMap = companies.map(function (company) {
//     return `${company.name} [${company.start} -- ${company.end}]`;
// });

// arrow function

const testMap = companies.map(
    (company) => `${company.name} [${company.start} -- ${company.end}]`
);

console.log(testMap);

// returns
// 0: "Company One [1981 -- 2004]"
// 1: "Company Two [1992 -- 2008]"
// 2: "Company Three [1999 -- 2007]"
// 3: "Company Four [1989 -- 2010]"
// 4: "Company Five [2009 -- 2014]"
// 5: "Company Six [1987 -- 2010]"
// 6: "Company Seven [1986 -- 1996]"
// 7: "Company Eight [2011 -- 2016]"
// 8: "Company Nine [1981 -- 1989]"

// use the ages array and take square root of each age

const agesSquare = ages.map((age) => Math.sqrt(age));

console.log(agesSquare);

// use the ages array and multiply each age by 2

const agesTimesTwo = ages.map((age) => age * 2);

console.log(agesTimesTwo);

// Chaining functions

// use the ages array, take square root of each age and then multiply that by 2
const agesSquareTimesTwo = ages
    .map((age) => Math.sqrt(age))
    .map((age) => age * 2);

console.log(agesSquareTimesTwo);

//////////////////////////////////
// MAP
//////////////////////////////////

// sort companies by start year

const sortedCompanies = companies.sort((company1, company2) => {
    if (company1.start > company2.start) {
        return 1;
    } else {
        return -1;
    }
});

// short
const sortedCompanies2 = companies.sort((company1, company2) =>
    company1.start > company2.start ? 1 : -1
);

// really short
const sortedCompanies3 = companies.sort(
    (company1, company2) => company1.start - company2.start
);

console.log(sortedCompanies3);

// returns
// 0: {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
// 1: {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
// 2: {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}
// 3: {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}
// 4: {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
// 5: {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}
// 6: {name: 'Company Three', category: 'Auto', start: 1999, end: 2007}
// 7: {name: 'Company Five', category: 'Technology', start: 2009, end: 2014}
// 8: {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016}

// sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
