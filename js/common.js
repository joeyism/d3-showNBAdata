"use strict";

function timeToSeconds(timeInString){
    var timeInArray = timeInString.split(":");
    var seconds = parseInt(timeInArray[2]);
    var minutes = parseInt(timeInArray[1]);
    return seconds + 60*minutes;
};

function remainingToElapsed(seconds){
    return 48*60 - seconds;
};

function secondsToTime(seconds){
    var minutes = Math.floor(seconds/60);
    var seconds = seconds%60;
    return minutes+":"+seconds;
};

function timeToElapsed(timeInString){
    return remainingToElapsed(timeToSeconds(timeInString));
};
