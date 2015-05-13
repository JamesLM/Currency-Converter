/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

function ConverterController(){
    var converterModel = new ConverterModel(),
            converterView = new ConverterView(),
           
            displayInput = function(){
                converterView.displayValue(converterModel.getDisplayValue(), converterModel.getUnitDisplay());
            };
           
              
    this.init = function(){
                
        converterModel.init();
        converterView.init();
        
        
        // Controller for slide-out menu
        converterView.setSettingCallBack(function () {
            window.location.href = "settings.html"; 
        });

        // Controller for the main keypad buttons
        converterView.setZeroClickCallback(function() {
            converterModel.setDisplayValue("0");
            converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setOneClickCallback(function() {
            converterModel.setDisplayValue("1");
             converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setTwoClickCallback(function() {
            converterModel.setDisplayValue("2");
             converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setThreeClickCallback(function() {
            converterModel.setDisplayValue("3");
             converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setFourClickCallback(function() {
            converterModel.setDisplayValue("4");
             converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setFiveClickCallback(function() {
            converterModel.setDisplayValue("5");
             converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setSixClickCallback(function() {
            converterModel.setDisplayValue("6");
            converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setSevenClickCallback(function() {
            converterModel.setDisplayValue("7");
            converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setEightClickCallback(function() {
            converterModel.setDisplayValue("8");
            converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setNineClickCallback(function() {
            converterModel.setDisplayValue("9");
            converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setClearClickCallback(function(){
            converterModel.clearUserInputValue();
            converterModel.setUnitDisplay();
            displayInput();
        }),
        converterView.setEqualsClickCallback(function(){
            converterModel.calculateResult();
            converterModel.setUnitDisplayResult();
            displayInput();
        });
    };
}
var converterController = new ConverterController();
window.addEventListener("load", converterController.init(), false);
 

