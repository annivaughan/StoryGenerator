/*Testing*/
document.querySelector('html').style.backgroundColor = 'pink';

function myFunction() {
  alert("Welcome!");
}

/*Write the codes*/
/*In the raw text file, copy all of the code underneath the heading
"1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" and paste it into the top of the main.js file*/
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
const random = Math.floor(Math.random()*array.length);
return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];



/*You can call the function
and get it to return one random string out of insertX
by writing randomValueFromArray(insertX).*/
randomize.addEventListener('click', result);
function result() {

/*Create a new variable called newStory, and set its value to equal storyText. */
let newStory = storyText;
/*Create three new variables called xItem, yItem, and zItem*/
/*get it to return one random string out of insertX by writing randomValueFromArray(insertX).*/
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

/*REPLACE the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz:
— with the strings stored in xItem, yItem, and zItem. */
newStory = newStory.replace(':insertX:', xItem);
newStory = newStory.replace(':insertX:', xItem);
newStory = newStory.replace(':insertY:', yItem);
newStory = newStory.replace(':insertZ:', zItem);


/*TWO IF BLOCK*/
/*Inside the first if block, add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. In this block we are saying
"If a value has been entered into the customName text input, replace Bob in the story with that custom name."*/
randomize.addEventListener('click', result);
if(customName.value !== '') {
const name = customName.value;
newStory = newStory.replace('Bob', name);
}

/*Inside the second if block, we are checking to see if the uk radio button has been selected.*/
/*1 pound= 0.0714286, 32F=0c */
if(document.getElementById("uk").checked) {

 /*Inside the line that defines the weight variable, replace 300 with a calculation that converts 300 pounds into stones. Concatenate ' stone' onto the end of the result of the overall Math.round() call*/
let weight = Math.round(300*0.0714286) + ' stone';

/*Inside the line that defines the temperature variable, replace 94 with a calculation that converts 94 Fahrenheit into centigrade. Concatenate ' centigrade' onto the end of the result of the overall Math.round() call.*/
let temperature = Math.round((94-32) * 5 / 9) + ' centigrade';

/*Just under the two variable definitions, add two more string REPLACEMENT lines that replace '94 fahrenheit' with the contents of the temperature variable,*/
newStory = newStory.replace('94 fahrenheit',temperature);

/*Repeat the last step for 300 pounds*/
newStory = newStory.replace('300 pounds',weight);

}

/* in the second-to-last line of the function, make the textContent property of the story variable (which references the paragraph) equal to newStory.*/
story.textContent = newStory;

/*Adjust visibility*/
story.style.visibility = 'visible';
}
