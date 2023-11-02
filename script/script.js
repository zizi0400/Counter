"use strict";

const LANGUAGE_DE = [
  "hallo",
  "heute",
  "sprachkurs",
  "willkommen",
  "mikrofon",
  "und",
];

const LANGUAGE_EN = [
  "hello",
  "today",
  "language course",
  "welcome",
  "microphone",
  "and",
];

let DE_TO_EN = {};

for (const i in LANGUAGE_DE) {
  const wordDe = LANGUAGE_DE[i];
  const wordEn = LANGUAGE_EN[i];

  DE_TO_EN[wordDe] = wordEn;
}

console.log(DE_TO_EN);
console.log("-".repeat(40));

// Strafaufgabe für einen Schüler
for (let i = 0; i < 25; i++) {
  console.log("Ich soll im Unterricht nicht stören");
}
console.log("-".repeat(40));

// Aufteilung der Teilnehmer
const Students = ["Max", "Monika", "Franziska", "Bernd", "Tobias", "Andreas"];

const Students1 = [];
const Students2 = [];

for (const i in Students) {
  if (i % 2 === 0) {
    Students1.push(Students[i]);
  } else {
    Students2.push(Students[i]);
  }
}
console.log("students1", Students1);
console.log("students2", Students2);
