// Indian Cities API Example
const response = await fetch("https://indian-cities-api-nocbegfhqg.now.sh/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

const data = await response.json();
console.log(data);
