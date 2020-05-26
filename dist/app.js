"use strict";
const names = ['Max', 'Manual'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
