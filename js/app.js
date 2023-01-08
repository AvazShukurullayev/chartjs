"use strict";
const chartElement = document.getElementById("myChart");
let taxArray = [
  {
    tax: 60,
  },
  {
    tax: 25,
  },
  {
    tax: 8,
  },
  {
    tax: 1,
  },
  {
    tax: 1,
  },
  {
    tax: 1,
  },
  {
    tax: 1,
  },
  {
    tax: 1,
  },
  {
    tax: 1,
  },
  {
    tax: 1,
  },
];
let dataArray = [];
let taxesArray;
async function myFunc() {
  await taxArray.forEach((element) => {
    dataArray.push(element.tax.toFixed(1));
  });
  return await dataArray;
}
console.log(myFunc());
console.log(dataArray);
const data = {
  labels: [
    "Green",
    "DarkOrange",
    "DarkYellow",
    "Blue",
    "Orange",
    "Red",
    "Cyan",
    "Violet",
    "Yellow",
    "Purple",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: dataArray,
      hoverOffset: 10,
      backgroundColor: [
        "#578348",
        "#CC6441",
        "#CCC03B",
        "#48ABE2",
        "#F39A31",
        "#C13030",
        "#30C196",
        "#904E91",
        "#EAE336",
        "#6D69A1",
      ],
    },
  ],
};

new Chart(chartElement, {
  type: "doughnut",
  data: data,
});
