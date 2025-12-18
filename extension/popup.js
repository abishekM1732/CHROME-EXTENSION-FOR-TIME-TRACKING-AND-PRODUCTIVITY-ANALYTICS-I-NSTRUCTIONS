chrome.storage.local.get(null, (data) => {
  const list = document.getElementById("list");

  for (let site in data) {
    const li = document.createElement("li");
    li.textContent = `${site} : ${Math.round(data[site] / 1000)} sec`;
    list.appendChild(li);
  }
});
