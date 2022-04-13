



// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

// function to generate a random numeric value


var fight = function(enemy) {
    // repeat and execute as long as the enemy robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {
    // alert players that they are starting the round

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || promptFight === "FIGHT") {

            //subtract the value of 'playerInfo.attack' from the value of enemy.health
            //and use that result to update the value in 'enemy.health' variable
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);

            //log a resultng message to the console so we know that it worked
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " remaining health."
            );

            //check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
            }

            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

            //subtract the value of 'eemyAttack' from the value of 'playerInfo.health' 
            //and use that result to update the value in teh 'playerInfo.health' variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            //log a resulting message to the console so we know taht it worked
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " remaining."
            )

            //check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died.");
                break;
            }

            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        } 
        //if player chooses skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //comfirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }
    }

};

var endGame = function () {
    //if player still alice, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game!  You now have a score of " + playerInfo.money + ".");
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

//shop
var shop = function () {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, of LEAVE the store?  Please enter one: REFILL, UPGRADE, or LEAVE to make a choice."
    );
    //switch option
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop again to pick a valid item
            shop();
            break;

    }
};


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};


var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, // comma!
    refillHealth: function() {
        this.health += 20;
        this.money -= 7;
    }, // comma!
    upgradeAttack: function() {
        this.attack += 6;
        this.money -= 7;
    },

    refillHealth: function() {
    if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
    } 
    else {
        window.alert("You don't have enough money!");
    }
    },

    upgradeAttack: function() {
    if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    } 
    else {
        window.alert("You don't have enough money!");
    }
    }

};

// you can also log multiplevalues at once like this

console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

var enemyInfo = [
{
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];

//function start a new game
var startGame = function() {
    //reset player stats
    // reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators!  Round " + ( i + 1 ) );
            // pick new enemy to fight based on the index of the enemy.name array
            var pickedEnemyObj = enemyInfo[i];
            // reset enemy.health before starting new fight
            //enemy.health = Math.floor(Math.random() * 21) + 40;
            pickedEnemyObj.health = randomNumber(40, 60);
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);
            //if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
                    //if yes, take them to the store function
                    if (storeConfirm) {
                    shop();
                    }
            }
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

