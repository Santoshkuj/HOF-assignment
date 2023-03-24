// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

const input = "string";
const output=() =>{console.log( input.split('').reverse().join(''))}
setTimeout(output,2000);

// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number. 

function randomNumber(){
    console.log(  (Math.floor(Math.random()*(50-10)) ) )
}
let x =3;
let value =setInterval(function(){
        console.log(x);
        x--;
        if (x==0){
            clearInterval(value)
            setTimeout(randomNumber)
        }
    },1000)

    // 3. Build a feature for Store's Inventory.
    // Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
    // program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
    // use the map higher-order function to create a new object with the converted prices in Rupees.
    const storeItems ={a: 4, b: 10, c: 20}
    // let map = new Map(Object.entries(storeItems));
    // map.forEach((value,key) => {
    //     console.log(`${key}: ${value*80} rupees`);
    // })

    const storeItemInRupees = Object.fromEntries(Object.entries(storeItems).map(([key,value]) =>[key,value*80 +'-rupees']))
    console.log(storeItemInRupees);

//     4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

let books = [
    {Published: 2012, Author: 'xxx'},
    {Published: 2016, Author: 'xyz'},
    {Published: 2009, Author: 'xyz'},
    {Published: 2005, Author: 'xyz'},
]
let BooksAfter2010 = books.filter((element) => (element.Published > 2010));
let  k=
   BooksAfter2010.map((v) =>v.Author =v.Author.toUpperCase())

BooksAfter2010.Author =k;
console.log(BooksAfter2010);

// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.

const pattern = /^((https|http)\:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/gi
const url = 'http://www.pwskills1.com'
if(pattern.test(url)){
    console.log('match condition');
}else{
    console.log('not match');
}
// 6. LinkedIn Profile URL Validator.
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are 
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and 
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs 
// that do not follow this format or contain invalid characters. The program should provide clear output messages 
// indicating whether each input is a valid LinkedIn profile URL or not.

const LinkedinRegex = /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([a-zA-Z0-9]|[_-]+){5,30}\/*[da-z]?$/gm

const profile = 'https://www.linkedin.com/in/h-v4_hd4'
if(LinkedinRegex.test(profile)){
    console.log('valid profile');
}else{
    console.log('invalid profile');
}