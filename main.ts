let number = 0
let lastButton: Button
bluetooth.startButtonService()
bluetooth.startLEDService()

input.onPinPressed(TouchPin.P0, function () {
    number += 1
    basic.showString("Danke!", 50)
})
bluetooth.onBluetoothConnected(function () {
    basic.showNumber(number, 100);  
})
bluetooth.onBluetoothDisconnected(function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    lastButton = Button.A;
    basic.showNumber(number, 100);
})
function clearMailCount () {
    number = 0
    basic.showString("Clear", 50)
}
input.onButtonPressed(Button.B, function () {
    if (lastButton == Button.B) {
        clearMailCount()
    } else {
        basic.clearScreen()
    }
    lastButton = Button.B;
})
input.onPinPressed(TouchPin.P1, function () {
    clearMailCount()
})