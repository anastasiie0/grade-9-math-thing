input.onButtonPressed(Button.A, function () {
    basic.showNumber(counter)
    counter += 1
})
input.onButtonPressed(Button.AB, function () {
    list = [0]
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    basic.showNumber(counter)
})
let list: number[] = []
let counter = 0
basic.showString("X1?")
let x1 = 0
let x2 = 0
let y1 = 0
let y2 = 0
