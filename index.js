// Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function InstagramPost(handle, content, image, views, likes) {
  this.handle = handle;
  this.content = content;
  this.image = image;
  this.views = views;
  this.likes = likes;
}

// Create 2 Instagram post objects from the constructor function you created above

let post1 = new InstagramPost('johndoe123', 'This is a great photo!', 'www.image.com', 500, 20);
let post2 = new InstagramPost('janedoe456', 'Awesome!', 'www.image2.com', 300, 15);


// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
// Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above



// Define the createPerson factory function
def createPerson(name, age, location);
    return {
        'name': name,
        'age': age,
        'location': location
    }

//  Define the createJambScores factory function
def createJambScores(eng, govt, lit, crk);
    return {
        'ENG': eng,
        'GOVT': govt,
        'LIT': lit,
        'CRK': crk
    }

//  Create Musa's object using the createPerson and createJambScores factory functions
musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State')
musa['jamb_scores'] = createJambScores(70, 85, 82, 94)

// What are the different ways you can clone an object? Give examples for each of them.

The spread operator 

const originalObj = {a: 1, b: 2, c: {d: 3}};
const newObj = {...originalObj};

// modify the nested object in the new object
newObj.c.d = 4;

// the nested object is modified in both the original and new objects
console.log(originalObj); // {a: 1, b: 2, c: {d: 4}}
console.log(newObj); // {a: 1, b: 2, c: {d: 4}}


Object.assign()\

const originalObj = {a: 1, b: 2, c: {d: 3}};
const newObj = Object.assign({}, originalObj);

// modify the nested object in the new object
newObj.c.d = 4;

// the nested object is modified in both the original and new objects
console.log(originalObj); // {a: 1, b: 2, c: {d: 4}}
console.log(newObj); // {a: 1, b: 2, c: {d: 4}}


JSON.parse() and JSON.stringify()

const originalObj = {a: 1, b: 2, c: {d: 3}};
const newObj = JSON.parse(JSON.stringify(originalObj));

// modify the nested object in the new object
newObj.c.d = 4;

// the nested object is only modified in the new object
console.log(originalObj); // {a: 1, b: 2, c: {d: 3}}
console.log(newObj); // {a: 1, b: 2, c: {d: 4}}



// As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
  };
  
  for (const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }
  
