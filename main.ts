let PotVal6 = 0
let PotVal5 = 0
let PotVal4 = 0
let PotVal3 = 0
let PotVal2 = 0
let PotVal = 0
radio.setGroup(0)
radio.setTransmitPower(7)
basic.forever(function () {
    PotVal = pins.analogReadPin(AnalogPin.P0)
    PotVal2 = pins.analogReadPin(AnalogPin.P1)
    PotVal3 = pins.analogReadPin(AnalogPin.P2)
    PotVal4 = pins.analogReadPin(AnalogPin.P3)
    PotVal5 = pins.analogReadPin(AnalogPin.P4)
    PotVal6 = pins.analogReadPin(AnalogPin.P10)
    radio.sendValue("PotVal", PotVal)
    radio.sendValue("PotVal2", PotVal2)
    radio.sendValue("PotVal3", PotVal3)
    radio.sendValue("PotVal4", PotVal4)
    radio.sendValue("PotVal5", PotVal5)
    radio.sendValue("PotVal6", PotVal6)
})
