
function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase( ))
}

function logWhisper(string) {
    console.log(string.toLowerCase( ))
}

function sayHiToHeadphonedRoommate(string) {
    const notHear = "I can't hear you!"
    const canHear = "YES INDEED!"
    const dinner = "I would love to!"
    if (string.toLowerCase(string) === string) {
        return notHear
    }
    else if (string.toUpperCase(string) === string) {
        return canHear
    }
    else if ("Let's have dinner together!" === string) {
        return "I would love to!"
    }
}
