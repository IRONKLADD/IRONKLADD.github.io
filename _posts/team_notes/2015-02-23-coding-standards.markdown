---
layout: post
category: "team_notes"
title: "Coding Standards"
date: 2015-02-23T09:07:41-05:00
---

# General

- 4 space indentation
- 80 character line limit
- semicolon after every statement
- camelCase variables and functions
- CamelCase prototypes
- private variable/method names are prefixed with `_`
    - e.g. `getBoard()` is public, while `_board` is private
- always put spaces around assignment operator (`=`)

# Doc Comments

- doc strings must adhere to some standard which we haven't decided on
- doc string takes this form
{% highlight javascript %}
/**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore magna aliqua.
 */
function foo(bar) {
    /* ... */
}
{% endhighlight %}

# Statements

- any statement involving parens (`if`, `for`, `while`, ...) has no space
  between the keyword and parenthesis, but space before the curly brace, e.g.
{% highlight javascript %}
if(cond) {

}
{% endhighlight %}
- Conditionals take this form
{% highlight javascript %}
/*
 * Comment describing entire conditional
 */

// comment describing if part
if(cond1) {
    /* ... */
}
// comment describing else if part
else if(cond2) {
    /* ... */
}
// comment describing else part
else {
    /* ... */
}
{% endhighlight %}
