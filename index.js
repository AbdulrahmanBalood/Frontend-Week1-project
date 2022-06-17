const output = document.getElementById("output");
let loadFunction = window.addEventListener("load", () => {
        getData();
     });





async function getData() {
  let res = await fetch("https://api.coincap.io/v2/assets?limit=50");

  let data = await res.json();

  let result = data.data;
  result.map(({ name, rank, symbol, priceUsd,maxSupply,explorer,changePercent24Hr,supply }) => {
    let maxSupplyNum = (Math.round(maxSupply)).toFixed(2);
    let price = (Math.round(priceUsd)).toFixed(2);
    let priceChange = (Math.round(changePercent24Hr)).toFixed(2);
    let CurrentSupply = (Math.round(supply)).toFixed(2);
    const page = `
    <div class = "data">
    <div class="card" style="width: 18rem; background-color:rgb(91,94,120);color: rgb(219,236,249);">
  <div class="card-body">

    <h5 class="card-title"><h5>${name}</h5></h5>
    <h6 class="card-subtitle mb-2 text-muted"><h6>${symbol}</h6></h6>
    <p class="card-text"><p>$${price}</p>
    Change percent (24H): ${priceChange}%
    Supply: ${CurrentSupply}
    <br>
    Max Supply: ${maxSupplyNum}

    </p>
    <a href="${explorer}" class="card-link" style="color: rgb(111, 152, 212);">${name} Explorer</a>
  </div>
</div>
    
    
    
    
    </div>
    `;
    let results = document.createElement("div");
    results.classList.add(
      "col-md-6",
      "mb-3",
      "col-xl-3",
      "col-sm-12",
      "col-lg-4",
      "col-xxl-1"
    );
    results.innerHTML = page;
    output.appendChild(results);
  });
}
