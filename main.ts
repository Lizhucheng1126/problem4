basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(2, index + 2)
        led.plot(2, Math.abs(2 - index))
        led.plot(index + 2, 2)
        led.plot(Math.abs(2 - index), 2)
        basic.pause(200)
    }
    basic.clearScreen()
})
