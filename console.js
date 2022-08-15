/**
 * This module is a console wrapper that allows you to print messages in a formatted way.
 * 
 * @author: SERBice
 * @date: 2020-08-15
 * @version: 1.0.0
 * 
 */


 const MessageType = {
    default:        0,                  //Console default color, no prefix
    info:           1,                  //Console info color -yellow or cyan-, prefix: [INFO]
    warn:           2,                  //Console warn color -yellow-, prefix: [WARN]
    error:          3,                  //Console error color -red-, prefix: [ERROR]
    success:        4,                  //Console success color -green-, prefix: [SUCCESS]
    done:           5                   //Console success color -green-, prefix: [SUCCESS]
};

const ConsoleFormatReset = "\x1b[0m";   //Default console color and effect

const MessageEffect = {    
    none:           0,
    bright:         1,
    dim:            2,
    underscore:     3,
    blink:          4,
    reverse:        5,
    hidden:         6
};

const MessageEffectStr = {    
    none:           "",                 //no effect
    bright:         "\x1b[1m",
    dim:            "\x1b[2m",
    underscore:     "\x1b[4m",
    blink:          "\x1b[5m",          //blink
    reverse:        "\x1b[7m",
    hidden:         "\x1b[8m"
};

const MessageColor = {
    default:        0,
    black:          1,
    red:            2,
    green:          3,
    yellow:         4,
    blue:           5,
    magenta:        6,
    cyan:           7,
    white:          8,
    crimson:        9
};

const MessageColorStr = {
    default:        "",
    black:          "\x1b[30m",
    red:            "\x1b[31m",
    green:          "\x1b[32m",
    yellow:         "\x1b[33m",
    blue:           "\x1b[34m",
    magenta:        "\x1b[35m",
    cyan:           "\x1b[36m",
    white:          "\x1b[37m",
    crimson:        "\x1b[38m"
};

const MessageColorBackground = {
    default:        0,
    black:          1,
    red:            2,
    green:          3,
    yellow:         4,
    blue:           5,
    magenta:        6,
    cyan:           7,
    white:          8,
    crimson:        9
};

const MessageColorBackgroundStr = {
    default:        "",
    black:          "\x1b[40m",
    red:            "\x1b[41m",
    green:          "\x1b[42m",
    yellow:         "\x1b[43m",
    blue:           "\x1b[44m",
    magenta:        "\x1b[45m",
    cyan:           "\x1b[46m",
    white:          "\x1b[47m",
    crimson:        "\x1b[48m"
};
    
/**
 * Prints a message in the console with the specified message color and effect (if it is defined and supported).
 * 
 * @author SERBice
 * @date 2022-08-15
 * @version 1.0.0
 * 
 * @param {MessageType} type add a prefix to the message with seleceted color
 * @param {MessageEffect} effect set the effect of the message in the console (none, bright, dim, underscore, blink, reverse, hidden) (default: none) (optional) (not every effect is supported by every console)
 * @param {MessageColor} msgColor set the color of the message in the console (default: default) (black, red, green, yellow, blue, magenta, cyan, white, crimson) (optional)
 * @param {MessageColorBackground} msgColorBg set the color of the background of the message in the console (default: default) (black, red, green, yellow, blue, magenta, cyan, white, crimson) (optional)
 * @param {String} msgPrototype the prototype of the message to be printed in the console, use ? to with arguments (optional), use ?? to scape a '?'
 * @param  {...any} args arguments to be used in the message (optional) 
 * @returns {String}
 */
function conPrint(type, effect, msgColor, msgColorBg, msgPrototype, ...args)
{
    let strOut = "";

    if (type == MessageType.info)
    {
        strOut = MessageColorStr.cyan + "[INFO] ";
    }
    else if (type == MessageType.warn)
    {
        strOut = MessageColorStr.yellow + "[WARN] ";
    }
    else if (type == MessageType.error)
    {
        strOut = MessageColorStr.red + "[ERROR] ";
    }
    else if (type == MessageType.success)
    {
        strOut = MessageColorStr.green + "[SUCCESS] ";
    }
    else if (type == MessageType.done)
    {
        strOut = MessageColorStr.green + "[DONE] ";
    }

    strOut = strOut + ConsoleFormatReset;

    if (effect == MessageEffect.bright)
    {
        strOut = strOut + MessageEffectStr.bright;
    }
    else if (effect == MessageEffect.dim)
    {
        strOut = strOut + MessageEffectStr.dim;
    }
    else if (effect == MessageEffect.underscore)
    {
        strOut = strOut + MessageEffectStr.underscore;
    }
    else if (effect == MessageEffect.blink)
    {
        strOut = strOut + MessageEffectStr.blink;
    }
    else if (effect == MessageEffect.reverse)
    {
        strOut = strOut + MessageEffectStr.reverse;
    }
    else if (effect == MessageEffect.hidden)
    {
        strOut = strOut + MessageEffectStr.hidden;
    }
    

    if (msgColor == MessageColor.black)
    {
        strOut = strOut + MessageColorStr.black;
    }
    else if (msgColor == MessageColor.red)
    {
        strOut = strOut + MessageColorStr.red;
    }
    else if (msgColor == MessageColor.green)
    {
        strOut = strOut + MessageColorStr.green;
    }
    else if (msgColor == MessageColor.yellow)
    {
        strOut = strOut + MessageColorStr.yellow;
    }
    else if (msgColor == MessageColor.blue)
    {
        strOut = strOut + MessageColorStr.blue;
    }
    else if (msgColor == MessageColor.magenta)
    {
        strOut = strOut + MessageColorStr.magenta;
    }
    else if (msgColor == MessageColor.cyan)
    {
        strOut = strOut + MessageColorStr.cyan;
    }
    else if (msgColor == MessageColor.white)
    {
        strOut = strOut + MessageColorStr.white;
    }
    else if (msgColor == MessageColor.crimson)
    {
        strOut = strOut + MessageColorStr.crimson;
    }

    if (msgColorBg == MessageColorBackground.black)
    {
        strOut = strOut + MessageColorBackgroundStr.black;
    }
    else if (msgColorBg == MessageColorBackground.red)
    {
        strOut = strOut + MessageColorBackgroundStr.red;
    }
    else if (msgColorBg == MessageColorBackground.green)
    {
        strOut = strOut + MessageColorBackgroundStr.green;
    }
    else if (msgColorBg == MessageColorBackground.yellow)
    {
        strOut = strOut + MessageColorBackgroundStr.yellow;
    }
    else if (msgColorBg == MessageColorBackground.blue)
    {
        strOut = strOut + MessageColorBackgroundStr.blue;
    }
    else if (msgColorBg == MessageColorBackground.magenta)
    {
        strOut = strOut + MessageColorBackgroundStr.magenta;
    }
    else if (msgColorBg == MessageColorBackground.cyan)
    {
        strOut = strOut + MessageColorBackgroundStr.cyan;
    }
    else if (msgColorBg == MessageColorBackground.white)
    {
        strOut = strOut + MessageColorBackgroundStr.white;
    }
    else if (msgColorBg == MessageColorBackground.crimson)
    {
        strOut = strOut + MessageColorBackgroundStr.crimson;
    }

    let retVal = parseMessageArgs(msgPrototype,...args);

    if (retVal != false)
    {
        strOut = strOut + retVal + ConsoleFormatReset + "\n";        
        console.log(strOut);
    }
}

/**
 * Returns a string with the message prototype with the arguments replaced.
 * 
 * @author SERBice
 * @date 2022-08-15
 * @version 1.0.0
 * 
 * @param {String} msgPrototype the prototype of the message to be printed in the console, use ? to with arguments (optional), use ?? to scape a '?'
 * @param  {...any} args arguments to be used in the message (optional)
 * @returns {String}|{Boolean} String if success, false if error
 */

function parseMessageArgs(msgPrototype, ...args)
{
    let position = 0;
    
    let argCount = args.length;
    let argOrder = 0;

    //warning: this loop can crash the program if you do a wrong programming
    while(1)
    {
        //Search for '?' in the string
        let retValue = msgPrototype.indexOf("?", position);
        
        //if not found, then break
        if (retValue == -1)
        {
            //no more '?' found, then break
            break;
        }
        //if found, then check if the next char is '?'
        else
        {
            //if the next char is not '?', then replace actual '?' with the next arg and continue
            if (msgPrototype.indexOf("?", retValue+1) != retValue+1)
            {

                position = retValue+1;
                //Check if the next arg is defined
                if (args[argOrder] != undefined)
                {
                    //Use the next arg to replace '?' at ${position} and continue
                    msgPrototype = [msgPrototype.slice(0, position-1), args[argOrder], msgPrototype.slice(position)].join('');
                }
                //add 1 to argOrder (to check argument count later)
                argOrder++;    
            }
            //if the next char is '?' then add 2 to the position (to skip the '??')
            else
            {
                //add 2 to the position (to skip the '??')
                position = retValue + 2;
            }
        }
    }

    if (argOrder != argCount)
    {
        console.log("Error: argument count mismatch (",argOrder,",",argCount,")");
        return false;
    }

    return msgPrototype.replace(/\?\?/g, "?");
}

//Uncomment this line to use this script as a module
//export { conPrint, parseMessageArgs, MessageType, MessageEffect, MessageColor, MessageColorBackground };

//Use example
conPrint(MessageType.info, MessageEffect.none, MessageColor.red, MessageColorBackground.white, "This is a \"? ?\" message, or ? ??","Hello","World","not");