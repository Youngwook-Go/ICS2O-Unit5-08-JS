// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-JS/sw.js", {
    scope: "/ICS2O-Unit5-08-JS/",
  })
}

// function description

function update() {
  console.log("update")
  const first = parseInt(document.getElementById("first").value)
  console.log("first : " + first)
  const second = parseInt(document.getElementById("second").value)
  console.log("second : " + second)
  let count = 0
  let answer = first

  while (answer >= second) {
    console.log("loop")
    answer = answer - second
    count = count + 1
    console.log("count: " + count)
    console.log("answer: " + answer)
  }

  document.getElementById("answer").innerHTML = count + "R" + answer
  console.log("end")
}
