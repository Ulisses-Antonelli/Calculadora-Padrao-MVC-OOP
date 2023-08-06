class CalculatorModel{
    constructor(){
        this.displayValue = "0";
    }

    getDisplay(){
        return this.displayValue;
    }

    resetDisplay(){
        this.displayValue = "0";
    }

    appendToDisplay(value){
        if(this.displayValue === "0"){
            this.displayValue = value;
        } else {
            this.displayValue += value;
        }
    }

    calculate(){
        try {
           const expression = this.displayValue.replace('=', '');
            this.displayValue = new Function('return ' + expression)();
        } catch (error) {
            this.displayValue = "Error";
        }
    }
}