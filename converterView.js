/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

function ConverterView(){
    
    // The calculator 'display' panel held in a variable
    var displayElement = document.getElementById("displayElement");
    var unitIndicator = document.getElementById("unitIndicator");
    
    // The buttons on the calculator held in variables
    var zeroButton = document.getElementById("zeroButton"),
        oneButton = document.getElementById("oneButton"),
        twoButton = document.getElementById("twoButton"),
        threeButton = document.getElementById("threeButton"),
        fourButton = document.getElementById("fourButton"),
        fiveButton = document.getElementById("fiveButton"),
        sixButton = document.getElementById("sixButton"),
        sevenButton = document.getElementById("sevenButton"),
        eightButton = document.getElementById("eightButton"),
        nineButton = document.getElementById("nineButton"),
        clearButton = document.getElementById("clearButton"),
        equalsButton = document.getElementById("equalsButton");

    this.displayValue = function(userIn, units) {
        // Append the user's click to the value in display
        displayElement.innerHTML = userIn;
        unitIndicator.innerHTML = units;
        
    };
    
    this.setZeroClickCallback = function (callback) {
        zeroButton.addEventListener("click", callback);
    };
    this.setOneClickCallback = function (callback) {
        oneButton.addEventListener("click", callback);
    };
    this.setTwoClickCallback = function (callback) {
        twoButton.addEventListener("click", callback);
    };
    this.setThreeClickCallback = function (callback) {
        threeButton.addEventListener("click", callback);
    };
    this.setFourClickCallback = function (callback) {
        fourButton.addEventListener("click", callback);
    };
    this.setFiveClickCallback = function (callback) {
        fiveButton.addEventListener("click", callback);
    };
    this.setSixClickCallback = function (callback) {
        sixButton.addEventListener("click", callback);
    };
    this.setSevenClickCallback = function (callback) {
        sevenButton.addEventListener("click", callback);
    };
    this.setEightClickCallback = function (callback) {
        eightButton.addEventListener("click", callback);
    };
    this.setNineClickCallback = function (callback) {
        nineButton.addEventListener("click", callback);
    };
    this.setClearClickCallback = function (callback) {
        clearButton.addEventListener("click", callback);
    };
    this.setEqualsClickCallback = function(callback) {
        equalsButton.addEventListener("click", callback);
    };

var openNav = true,
        addMouseAndTouchUp = function (elementID, handler) {
            //utility function to add both mouseup and touchend events and prevent double events
            var element = document.getElementById(elementID),
                f = function (e) {
                    e.preventDefault();//stops mobile browsers faking the mouse events after touch events
                    handler(e);
                    return false;
                };
            element.addEventListener("mouseup", f, false);
            element.addEventListener("touchend", f, false);
        },
        openCloseNav = function () {
            //doggle the side menu reveal
            if (openNav) {
                openNav = false;
                document.getElementById("nav").className = "closedmenu";
               // document.getElementById("mainsection").className = "closedmenu";
                document.getElementById("navelem").style.display = "none";
            } else {
                openNav = true;
                document.getElementById("nav").className = "";
             //   document.getElementById("mainsection").className = "";
                document.getElementById("navelem").style.display = "block";
            }
        },
        showAbout = function () {
            //handle showing about box purely within the view as their's no model involved
            document.getElementById("popupAbout").style.display = "block";
            history.pushState(null, null, "#about");
        },
        hideAbout = function () {
            //handle hiding about box purely within the view
            document.getElementById("popupAbout").style.display = "none";
            if (openNav) { openCloseNav(); }
        };

    this.setSettingCallBack = function (callback) {
        addMouseAndTouchUp("settings", callback);
    };

    this.init = function () {
        
        this.displayValue("",localStorage.getItem('fromCurrencyName'));
        
        openCloseNav();
        addMouseAndTouchUp("navmenu", openCloseNav);

        //handle closing of about window using history 
        //so that back buttons work (esp important on Android for hard back key
       // addMouseAndTouchUp("popupAbout", function () {window.history.back(); });
        window.addEventListener("popstate", function (evt) {
            hideAbout();
        });
    };
}

