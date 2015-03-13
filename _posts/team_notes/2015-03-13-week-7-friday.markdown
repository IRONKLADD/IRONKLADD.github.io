---
layout: post
categories: team_notes
title: "Week 7 Friday"
date: 2015-03-13T09:56:29-04:00
---

# Goals for Spring Break

Dean: convert coordinates to JSON instead of ugly string thing and implement
      `getEffectedShells`
Dan: implement `refillBoard` and `refillTopLayer`
Alex: implement `gameOverCheck`
Kenny: implement `clearShells` and `clearShell`


# Accomplishments

- merged our branches
- planned out what we need to do for spring break


# Attendance

Dean, Dan, Alex, Kenny



# Pseudocode

{% highlight javascript %}
function refillBoard(board, emptyShells) {
    var effectedShells = getEffectedShells(emptyShells);

    while (emptyShells.size > 0) {
        gravity(board, emptyShells);
        refillTopLayer(board, emptyShells);
    }

    return effectedShells;
}

function refillTopLayer(board, emptyShells) {
    emptyShells.forEach(function(JSONcoord) {
        coord = parseJSON(JSONcoord);
        if(coord.row == 0) {
            board.set(coord.row, coord.col, getRandomShell());
            emptyShells.remove(JSONcoord); // hope this doesn't break things
        }
    }
}
{% endhighlight %}