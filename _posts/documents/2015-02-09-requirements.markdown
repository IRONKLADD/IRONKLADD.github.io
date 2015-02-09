---
layout: post
category: documents
author: ironkladd
title: "Requirements"
date: 2015-02-06T10:00:00-05:00
---

# Platform

- Build game for web browsers using JavaScript/CutJS.
- Port to mobile devices (Android and iOS).


# Technical Specifications

- Game must consume at most 250MiB of memory


# Game Design

- Game will serve as a framework for block puzzle games (e.g. Bejeweled)
- Game is divided into several classes
    - Shell/piece
        - has no methods only attributes.
        - has attributes
            - color
            - intensity
            - special
            - type
            - associative class
        - atomic unit
    - Board
        - 2D array of shells/pieces
        - has methods
            - `get(row, col)`
            - `set(row, col, x)`
        - has attributes
            - grid
    - configuration
        - allowedColor 
        - allowedMagnitude
        - allowedSpecial
        - allowedType
        - width
        - height
    - Game Type
        - controls board
        - acts as an interface to a player
            - exposes certain operations
        - has methods
            - `selectShell(row,column)`
            - `makeBoard()`
            - `getBoard()`
    - Player
        - produces input to Rules
        - may be human or AI
    - Renderer
        - displays the board
        - interfaces with Rules
            - Rules have knowledge of the board, as well as special states
              such as
                - falling pieces
                - powerups activating
        - interfaces with Player
            - for example, player selects a piece to move, and the piece is
              highlighted by the Renderer


# Milestones

- Weekly builds
- Presentable game ready by Quest


# Evaluation

- have users test prototypes
- feedback on UI and game design


# Userbase

General public
