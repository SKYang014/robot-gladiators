// this creates a function named "fight" 

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiplevalues at once like this

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

var fight = function(enemyNames) {
    // repeat and execute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
    // alert players that they are starting the round

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
                break;
            }

            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } 
        //if player chooses skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //comfirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
    }

};

var endGame = function () {
    //if player still alice, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game!  You now have a score of " + playerMoney + ".");
    }

    else {
        window.alert("You've lost your robot in battle");
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            //restart game
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
};

//function start a new game

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators!  Round " + ( i + 1 ) );
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            enemyHealth = 50;
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
};

//play gamea gain
startGame();

// Games states
//"LOSE" - Player robtos's health is zero or less

