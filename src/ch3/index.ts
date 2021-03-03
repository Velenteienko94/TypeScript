export const mathMin = (num1: number, num2: number): number => {
    const result = num1 < num2 ? num1 : num2
    return result
}



export const isEven = (num: number): boolean => {
    const fix: number = num < 0 ? -2 : 2
   
    if(num === 0){
        return true
    }

    if(num === 1 || num === -1){
        return false
    }

    return isEven(num - fix)
     
}

export const countB = (str: string): number => {
    let countOfB: number = 0;

        for(const letter of str){
            if (letter === "B"){
                countOfB+= 1; 
        }
    }
    return countOfB
}


export const countChar = (str: string, char: string): number => {
    let countOfChar: number = 0;

        for(const letter of str){
            if (letter === char){
                countOfChar+= 1; 
        }
    }
    return countOfChar
}
