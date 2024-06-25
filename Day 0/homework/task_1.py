from turtle import *

 
# i am painting house using turtle
 
# Step 1: Draw a square!
speed(20) 
width(7)
color("purple")
forward(200)
left(90)
 
forward(200)
left(90)
 
forward(200)
left(90)
 
forward(200)
left(90)
 
#end of square
 
#Step 2: Draw a door
 
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill() 
# Step 3: Draw a roof
 
penup()
goto(200,200)
pendown()
 
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#End of the roof

# Step 4: Drawing windows

#First window!
penup()
goto(30,180)
pendown()
width(3)
begin_fill()
left(30)
forward(40)
left(90)
forward(40)
left(90)
forward(40) 
left(90)
forward(40)
end_fill()

#Second window

penup()
goto(120, 180)
pendown()
begin_fill()
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
end_fill() 
 
 
 
exitonclick()