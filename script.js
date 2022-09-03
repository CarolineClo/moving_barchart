"use strict;";

window.addEventListener("load", innit);

const queuers = [30, 25, 16, 23, 8, 10, 22, 2, 27, 14, 18, 22, 9, 28, 3, 9, 32, 15, 19, 3, 3, 7, 29, 27, 29, 14, 12, 25, 20, 1, 14, 22, 24, 27, 28, 31, 32, 27, 2, 1];

function innit() {
  displaydata();
}

//function loop();

//function getNumberOfQueuers();

function displaydata() {
  const template = document.querySelector("#bar_template").content;
  const copy = template.cloneNode(true);
  queuers.forEach((queuer) => {
    const template = document.querySelector("#bar_template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".bar").style.height = queuer + `${"%"}`;
    const parent = document.querySelector("#bar_container");
    parent.appendChild(copy);
    console.log(queuers);
    //bar style should be something like height queuers [0]%
  });
}

//function modifyQueuers();
//make the array shift along one. unshift [0] and push that number into [40]?
