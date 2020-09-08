let x;

function triangle(x){
    var result = "#"
    while(result.length <=x ){
        console.log(result);
        // this is the last statement executed, so it is returned
        result = result + "#";
    }
}