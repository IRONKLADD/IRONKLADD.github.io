---
layout: post
category: team_notes
title: Bombi Rules Brainstorming
author: ironkladd
date: 2015-04-06T09:25:00-05:00
---

# Bombi Rules (working title)

- swap: any 2 adjacent pieces
- turn: 1 swap
- 2x2 of same color: bomb
  - timer: sum of magnitudes of individual pieces
    - stored as turn to detonate
  - blast radius: lowest magnitude
  - destroys pieces of the same color within blast radius
  - bombs within blast radius automatically have timer set to zero
  - overlapping bombs are chosen by a left and up first rule
  - empty shells after a bomb's explosion are filled by randomly generated shells.
- shell: a piece
  - color
  - magnitude: represented by dots (different shapes for different color shells)
  - type
  - special
- game ends after `n` turns

![UI Mockup]({{ site.baseurl }}/assets/mockups/bombi-UI-0.jpg)
