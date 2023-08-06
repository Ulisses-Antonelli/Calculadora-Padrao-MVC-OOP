class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindUpdateDisplay(this.handleAppendToDisplay.bind(this), this.model.getDisplay.bind(this.model));
        this.view.bindCalculateButton(this.handleCalculate.bind(this), this.model.getDisplay.bind(this.model));
        this.view.bindResetButton(this.handleResetDisplay.bind(this));
        this.updateDisplay();
    }

    handleAppendToDisplay(value) {
        this.model.appendToDisplay(value);
        this.updateDisplay();
    }

    handleCalculate() {
        this.model.calculate();
        this.updateDisplay();
    }

    handleResetDisplay() {
        this.model.resetDisplay();
        this.updateDisplay();
    }

    updateDisplay() {
        this.view.display.innerHTML = this.model.getDisplay();
    }
}

