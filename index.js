function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    let string1 = "I can\'t hear you!";
    let string2 = "YES INDEED!";
    let string3 = "I would love to!";
    
    if(string === string.toUpperCase()){
        return string2;
    } else if(string === string.toLowerCase()){
        return string1;
    } else {
        return string3;
    }
}