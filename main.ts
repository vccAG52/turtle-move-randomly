turtle.setPosition(2, 4)
turtle.pen(TurtlePenMode.Up)
basic.forever(function () {
    if (randint(1, 2) == 1) {
        turtle.turnLeft()
    } else {
        turtle.turnRight()
    }
    turtle.forward(1)
})
