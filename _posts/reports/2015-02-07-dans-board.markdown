---
layout: post
category: reports
author: dan
title: "Dan's Mockup Board"
date: 2015-02-07T22:36:44-05:00
---

My board is comprised of two main prototype objects, `Piece` and `Board`,
where `Piece` has two direct subtypes, `EmptyPiece` (which is unused) and
`NormalPiece`. `NormalPiece` has 3 direct subtypes, `RedPiece`, `BluePiece`,
and `GreenPiece`. These three colored pieces are the only ones used in the
demo. Each piece has a `toString()` method, which returns a unique unicode
[block element](https://en.wikipedia.org/wiki/Block_Elements), used to
visualize the piece. The `Board` prototype contains a `grid` attribute, which
is a 2D array of `Piece`s, as well as `get(row, col)`, `set(row, col, x)`, and
`swap(row1, col1, row2, col2)` methods, used for altering the grid. To display
the grid, the `Board`'s `toString()` method is called, which in turn calls the
`toString()` methods of each of the `Piece`s in the `grid`.

Finally, `test.js` is used to initialize a `Board`, and output the result of
calling `toString` to the JS console. To see this in action, open `index.html`
in your browser, open the console (`F12` in Firefox), and refresh the page.
You can then access the board's attributes and methods by entering statements
in the console.