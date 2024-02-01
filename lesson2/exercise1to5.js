/* Country Belgium
Capital Brussels
Languages Dutch, French, German
Area 30689 km2
Population 11492641
GDP per capita $50114
ISO3166 code BE */

let belgium = {
  name: "Belgium",
  capital: "Brussels",
  languages: ["Dutch", "French", "German"],
  area: "30689 km2",
  population: "11492641",
  GDP: "$50114",
  ISO3166: "BE",
};
//exercise 2 - create object for country Germany(france and sweden)
let germany = {
  name: "Germany",
  capital: "Berlin",
  languages: ["German"],
  area: "357386 km2",
  population: "83019200",
  GDP: "$52780",
  ISO3166: "DE",
};

let france = {
  name: "France",
  capital: "Paris",
  languages: ["French"],
  area: "640679 km2",
  population: "67076000",
  GDP: "$41463",
  ISO3166: "FR",
};

let sweden = {
  name: "Sweden",
  capital: "Stockholm",
  languages: ["Swedish"],
  area: "450295 km2",
  population: "10365705",
  GDP: "$53213",
  ISO3166: "SE",
};

function courntyInfo(countryName) {
  console.log(` ${countryName.name} population is ${countryName.population}`);
}

courntyInfo(belgium);
courntyInfo(germany);
courntyInfo(france);
courntyInfo(sweden);

//execrise 3 - create a arrary of objects for countries

// let arrayofCountries = [Beligum, germany, france, sweden];

// function x(arrayofCountries) {
//   for (let i = 0; i < arrayofCountries.lenght; i++) {
//     let currentCountry = arrayofCountries[i];
//     console.log(currentCountry.name);
//   }
// }

// x(arrayofCountries);

let countries = [belgium, germany, france, sweden];

function printCountryNames(arrayofCountries) {
  for (let i = 0; i < arrayofCountries.length; i++) {
    let currentCountry = arrayofCountries[i].name;
    console.log(currentCountry);
  }
}
printCountryNames(countries);

function getmaxPopulation(arrayofCountries) {
  let countryWithMaxPopulation = arrayofCountries[0];

  for (let i = 0; i < arrayofCountries.length; i++) {
    let currentCountry = arrayofCountries[i];

    if (currentCountry.population > countryWithMaxPopulation.population) {
      countryWithMaxPopulation = currentCountry;
    }
  }
  console.log(
    `country with max population is ${countryWithMaxPopulation.name}`
  );
}

getmaxPopulation(countries);

//exercise 4

function getsumofPopulation(arrayOfCountries) {
  totalSumofPopulation = 0;
  for (i = 0; i < arrayOfCountries.length; i++) {
    // console.log(arrayOfCountries[i].population);
    totalSumofPopulation += parseInt(arrayOfCountries[i].population);
  }
  return totalSumofPopulation;
}
console.log(
  `The Total Population of Countries in Array is ${getsumofPopulation(
    countries
  )}`
);

//exercise5

function NewArrayofCountryCode(ArrayOfCountries) {
  countryCode = [];
  console.log(typeof countryCode);
  countryCode = ArrayOfCountries.map((country) => country.ISO3166);
  console.log(typeof countryCode);
  return countryCode;
}

console.log(
  `New Array contaning Country Codes is  ${NewArrayofCountryCode(countries)}`
);
