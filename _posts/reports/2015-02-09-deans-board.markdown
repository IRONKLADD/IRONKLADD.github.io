---
layout: post
category: reports
author: dean
title: "Deans's Mockup Board"
date: 2015-02-09T10:36:16-05:00
---

# Deans Board
For my Board I only really have one class. Unfortunately this was a really simple mockup and as such full Object Oriented design wasnt put in place till my latter(still Work in progress) program. As such the board is a representation of a 2d array not of shells but of strings, Where the only strings that are randomly generated are "Yel" "Blu" "Red". This was done so that I could see them level with each other in the console. Later I added cutjs objects. When the engine goes to "draw" the board it checks the 2d array and creates the appropriate cutjs object based on the string. When it creates all the pieces it also creates an action listener for each one. This is how the game knows what piece you started the mouse click on and which one you ended on. from there it simply calls `swap()` in board with the correct parameters, then it recalls its own draw method. There is definitely some real problems with the board optimizationly but I think it serves as a good first draft.
