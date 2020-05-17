/**
 * Function to convert number to roman number
 * @param {number} value A number to convert
 * @returns {string} Roman number or empy string
 */
const numberToRoman = (value:number) => {

    const values = [100, 90,  50,  40,   10,   9,    5,      4, 1];
    const roman = ["C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    if(value <= 0) return "";
    if(value > 100) return "";

    const romanValue: string [] = [];

    let _number = value;

    values.forEach( (v, i) => {

        while(_number >= v){
            _number -= v;
            // console.log(_number,v)
            romanValue.push(roman[i]);
        }

    });


    return romanValue.join('');
}


export default numberToRoman;
