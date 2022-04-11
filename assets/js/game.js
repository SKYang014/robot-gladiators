// this creates a function named "fight" 

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiplevalues at once like this

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {

            //subtract the value of 'playerAttack' from the value of enemyHealth
            //and use that result to update the value in 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //log a resultng message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " remaining health."
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");
            }

            else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }

            //subtract the value of 'eemyAttack' from the value of 'playerHealth' 
            //and use that result to update the value in teh 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;
            //log a resulting message to the console so we know taht it worked
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining."
            )

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died.");
            }

            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } 
        //if player chooses skip
        else if (promptFight === "skip" || promptFight === "SKIP") {
            //comfirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney = playerMoney - 2
            }
            //if no (false), ask a question by running fight() again
            else {
                fight();
            }
        }

        else {
            window.alert("You need to choose a valid option.  Try again!");
        }

};

//loop

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

//fight();

//check to see if the value of the playerHealth variable is greater than 0

// if (playerHealth > 0) {
//     console.log("Your player is still alive!")
// }