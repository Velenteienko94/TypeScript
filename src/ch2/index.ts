export const triangle = ():void => {
    let emptyString: string = "";

    for(let i = 0; i < 7; i++){
        emptyString += "#"
        console.log(emptyString)
    }
};

export const fizzBuzz = ():void => {
    for(let i = 1; i <= 50; i++){

        let result: string = "";

        if( i % 3 === 0 ){
            result =  result.concat("Fizz")

        }
        if( i % 5 === 0 ){
            result =  result.concat("Buzz")
            
        }
        
        console.log(result || i)
    }
}

export const chessDesk = (size: number): string =>{
    let board: string = "";

for(let i = 0; i< size; i++){
    board = i % 2 === 0 
    ? board.concat(`${" #".repeat(size / 2)}\n`)
    : board.concat(`${"# ".repeat(size / 2)}\n`)
}
  return board;
}



