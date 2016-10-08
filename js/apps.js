//Step 1a -- define (global) Bartender constructor function 

//create bartender object, flavarr argument represents the preferences argument collected from line 101

var Bartender = function(flavarr) {
        //create empty array, call other methods
   this.finalDrink  = [];
        console.log("flavarr", flavarr);
    //creates new instance of CreateDrink constructor function using drink variable
    var drink = new CreateDrink(flavarr);
    //for..in loop to retrieve properties from object
    for(var preference in drink) {
    //if statement for all values in "true" properties
    if (drink[preference] === true) {
        //"this" represents current object and accesses finalDrink array, pushing randomly generated preference value from ingredients object
        this.finalDrink.push(ingredients[preference][randomNumberGen()]);
    }
    
   }
}

//Step 2-- Extend Bartender constructor function with printDrink method to print out 1 random ingredient from all true selections
Bartender.prototype.printDrink = function() {
        console.log(this.finalDrink);
        
            //ask about how to separate and add conjunctions to finalDrink? (i.e. "*and* Cherry on top")
        $('.drink-results').append('<h2>' + "Yer drink will have " + this.finalDrink + '</h2>');
   
}

//Step 4-- create function that generates random number from ingredient array

var randomNumberGen = function () { 
    return Math.floor(Math.random() * 3);
}
//Step 1b -- define (other) objects

var questions = [
    '1. Do ye like yer drinks strong?',
    '2. Do ye like it with a salty tang?',
    '3. Are ye a lubber who likes it bitter?',
    '4. Would ye like a bit of sweetness with yer poison?',
    '5. Are ye one for a fruity finish?',
]

var ingredients = {
    strong: ['Glug of rum ', 'Slug of whisky ', 'Splash of gin '],
    bitter: ['Shake of bitters ', 'Splash of tonic ', 'Twist of lemon peel '],
    salty: ['Olive on a stick ', 'Salt-dusted rim ', 'Rasher of bacon '],
    sweet: ['Sugar cube ', 'Spoonful of honey ', 'Splash of cola '],
    fruity: ['Slice of orange ', 'Dash of cassis ', 'Cherry on top ']
}


//CreateDrink constructor function that assigns properties to array..cannot push into objects, only arrays.. numbers help assign array?
//Also from Step1a, creating global function

var CreateDrink = function(flavors) {
    console.log("flavors", flavors[0]);
    //ask how numbering preferences help to access ?
    this.strong = flavors[0];
    this.salty = flavors[1];
    this.bitter = flavors[2];
    this.sweet = flavors[3];
    this.fruity = flavors[4];

};

//Step 5-- append questions to DOM

var bartendingQuestions = "";
    for (var i = 0; i < questions.length; i++) {
        bartendingQuestions += '<p>' + questions[i] + '<br> Aye!! <input name=q' + i + '   value="true" type=radio> <br> Nay!! <input name=q' + i + ' type=radio value="false"></p>';
    }
    $('#drinkQuestions').append("<div>" + bartendingQuestions + "</div>")


//Step 6(final step) -- create click handler to collect user choices and execute all functions


$('form').on('submit', function(event){
    event.preventDefault();
    
    //create preferences variable as empty array to push true/false booleans

    var preferences = [];
    
    //if, else statements depending on user choice
    $('input:checked').each(function (){
        if ($(this).val() === 'true') {
           //pushes true booleans into empty preferences array
            preferences.push(true);
        } else {
            //pushes false values into empty preferences array
            preferences.push(false);
        }
   });
        console.log("preferences", preferences);
    //create new instance of Bartender constructor function named jose to invoke Bartender function
    
    var jose = new Bartender(preferences);
    //invokes printDrink method from extended Bartender constructor function 
    jose.printDrink();
})
 
    
    
    


   

        


//display drink on DOM

//THINGS YOU HAVE TO DO --
//Figure out how to get the preferences of user to display the random ingredient from array
        //Figured it out but it prints 4x on console
//extend Bartender prototype with a printDrink method
//printDrink method just takes drink we are making right now and then putsi it on the DOM
//down below in our click handler after we make jose, we call jose.printDrink() to get it on the DOM
//attach drink to Bartender using "this"