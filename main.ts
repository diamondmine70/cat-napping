input.onButtonPressed(Button.A, function () {
    MNVJGJGFFYHTUHTHFHGF = !(MNVJGJGFFYHTUHTHFHGF)
    if (MNVJGJGFFYHTUHTHFHGF) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let MNVJGJGFFYHTUHTHFHGF = false
MNVJGJGFFYHTUHTHFHGF = false
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    if (MNVJGJGFFYHTUHTHFHGF) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
