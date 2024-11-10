let temperaturWert = 0


input.onButtonPressed(Button.A, function () {
       temperaturWert = input.temperature()
   
   music.playTone(262, music.beat(BeatFraction.Half))
})


input.onButtonPressed(Button.B, function () {
    basic.showNumber(temperaturWert)
})