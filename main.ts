basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
})
