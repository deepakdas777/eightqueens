
//Eight queens problem solution in Javascript

function printBoard(partial){
    var size = 8;
    var digit;
    for(digit in partial){
        var col = parseInt(partial[digit]);
        var line;
        line = '. '.repeat(col -1) + 'Q ' + '. '.repeat(size - col);
        console.log(line);
        }
    }

function checkPlacement(partial, col){
    var row = partial.length;
    if(partial){
        var spread = 1;
        var prow;
        for(prow = row -1;prow >= 0; prow -= 1){
            var c = parseInt(partial[prow]);
            if((c == col) || (c == col - spread) ||(c == col + spread)){
                return false;
                }
            spread += 1;
        }
    }
    return true;
    }


function findSolutions(){
    var partials = [''];
    var size = 8;
    var count = 0;
    while(partials.length != 0 ){
        var partial = partials.pop(0);
        if (partial.length >= size){
            var solution = partial;
            count += 1;
            console.log(partial);
            }  
        else{
            var col;
            for(col =1;col <= size; col++){
                if(checkPlacement(partial, col)){
                   partials.push(partial + col);
                  }
                }
            }
        }
     console.log('Total solutions found : %d',count);
      }

var start = new Date().getTime();
findSolutions();
var end = new Date().getTime();
console.log("Time taken : %d milli seconds",end -start);
