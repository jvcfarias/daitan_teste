const arr = [25, 10, 5, 1];
let counter = [];
var money = parseInt(prompt("Type in the amount of money in cents: "));


function makeChange(){
    let change = money;
    while (money > 0){
        switch(change) {
            case(change % 25 == 0):
                counter[0]++;
                money -= 25;
                break;
            case(change % 10 == 0):
                counter[1]++;
                money -= 10;
                break;
            case(change % 5 == 0):
                counter[2]++;
                money -= 5;
                break;
            case(change % 1 == 0):
                counter[3]++;
                money -= 1;
                break;
        }
    }
    console.log(`The total change would be ${counter[0]} quarters, ${counter[1]} dimes, ${counter[2]} nickels, and ${counter[3]} pennies.`)
}

makeChange();




