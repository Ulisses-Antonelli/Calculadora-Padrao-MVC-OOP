class CalculatorView{
    constructor(){
        let $ = document.querySelectorAll.bind(document);
        this.numberBtn = $('.btn')
        this.display = document.getElementById('display')
        this.resetBtn = document.getElementById('clearDisplay')
    }

    bindUpdateDisplay(appendToDisplay, getDisplay){
        this.numberBtn.forEach((btn)=>{
            btn.addEventListener('click', (event)=>{
                const value = event.target.innerText;
                if(value){
                    appendToDisplay(value)
                }
                this.display.innerHTML = getDisplay();
            });
        })
    }

    bindCalculateButton(handlerCalculate, getDisplay){
        this.numberBtn.forEach((btn)=>{
            btn.addEventListener('click', (event)=>{
                if(event.target.innerText === "="){
                    handlerCalculate()
                }
                this.display.innerHTML = getDisplay();
            })
        });
    }
        
    bindResetButton(handler){
        this.resetBtn.addEventListener("click", handler);
    }
}

