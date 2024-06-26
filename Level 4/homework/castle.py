from turtle import *
speed(1000)

# Drawing castle
color("yellow")
begin_fill()
penup()
goto(-200, -100)
pendown()
forward(600)  
left(90)
forward(200)  
left(90)
forward(600)  
left(90)
forward(200)  
left(90)
end_fill()

# Drawing roof
color("orange")
begin_fill()
penup()
goto(0, 100)
pendown()
left(120)
forward(200)  
left(120)
forward(200)  
left(120)
forward(200)  
end_fill()

color("orange")
begin_fill()
penup()
goto(200, 100)
pendown()
left(120)
forward(200)  
left(120)
forward(200)  
left(120)
forward(200)  
end_fill()

color("orange")
begin_fill()
penup()
goto(400, 100)
pendown()
left(120)
forward(200)  
left(120)
forward(200)  
left(120)
forward(200)  
end_fill()

# Drawing doors
color("brown")
begin_fill()
penup()
goto(62, 56.7)
pendown()
forward(70)  
right(90)
forward(155)  
right(90)
forward(70)  
right(90)
forward(155)  
end_fill()

# Drawing windows
color("cyan")
penup()
goto(-70, -32)
pendown()
begin_fill()
forward(100)  
left(90)
forward(100)  
left(90)
forward(100)  
left(90)
forward(100)  
left(90)
end_fill()

color("cyan")
penup()
goto(375, -32)
pendown()
begin_fill()
forward(100)  
left(90)
forward(100)  
left(90)
forward(100)  
left(90)
forward(100)  
left(90)
end_fill()

# Drawing flag's rod
color("gray")
penup()
goto(-560, 0)
pendown()
begin_fill()
forward(200)  
left(90)
forward(15)  
left(90)
forward(200)  
left(90)
forward(15)  
left(90)
end_fill()

# Drawing flag
color("black")
penup()
goto(-460, 100)
pendown()
begin_fill()
forward(100)  
left(90)
forward(100)  
left(90)
forward(100)  
left(90)
forward(200)  
left(90)
forward(100)
left(90)
forward(100)
end_fill()

# Drawing flag's text "GOA"
color("green")
penup()
goto(-545, 115) 
pendown()
pensize(10)
write("GOA", move=False, align="left", font=("Arial", 50, "normal"))

exitonclick()
