input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
    _666888 = 2
})
input.onButtonPressed(Button.B, function () {
    record.playAudio(record.BlockingState.Blocking)
    _666888 = 1
})
let _666888 = 0
_666888 = 1
record.setMicGain(record.AudioLevels.Medium)
let sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (_666888 == 1) {
        sprite.set(LedSpriteProperty.Direction, input.magneticForce(Dimension.Strength))
        sprite.move(1)
    }
})
basic.forever(function () {
    if (_666888 == 1) {
        while (sprite.isTouchingEdge()) {
            sprite.delete()
            sprite = game.createSprite(2, 2)
        }
    }
})
basic.forever(function () {
    if (_666888 == 2) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # . .
            # . . . #
            . # # # .
            `)
    }
})
