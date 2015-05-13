/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
function ConverterModel(){
    
    var displayValue = "";
    var unitDisplay = "";
    
    this.setDisplayValue = function(value){
        // userInputValue = userInputValue + value;
        displayValue += value;
        this.setUnitDisplay(localStorage.getItem('fromCurrencyName'));
    };
    
    this.setUnitDisplay = function(){
        unitDisplay = localStorage.getItem('fromCurrencyName');
    }
    this.getUnitDisplay = function(){
        return unitDisplay;
    };
    
    this.setUnitDisplayResult = function(){
        unitDisplay = localStorage.getItem('toCurrencyName');
    }
    
    this.setDisplayResult = function(value){
        displayValue = value;
    };
    
    this.getDisplayValue = function(){
        return displayValue;
    };
    
    this.clearUserInputValue = function(){
        displayValue = "";
    };
    
    this.calculateResult = function(){
        var homeCurrency = localStorage.getItem('fromCurrencySelect');
        var visitingCurrency = localStorage.getItem('toCurrencySelect');
        
        var value = this.getDisplayValue() / homeCurrency;
        value = value * visitingCurrency;
        this.setDisplayResult(value);
    }
    
    this.init = function (){
        this.setUnitDisplay();
    };
}


