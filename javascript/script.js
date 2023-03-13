let portfolio = JSON.parse(data);

document.getElementById("result").innerHTML = "";
for (let values of portfolio) {
    document.getElementById("result").innerHTML +=` 
        <div class="container">
            <div class="card justify-content-center align-items-bottom m-2" >
                <img src="${values.image}" class="card-img-top" style="height: 30rem; border-radius:1em;">
                <div class="card-img-overlay">
                    <h1 class="card-title"> ${values.title}</h1>
                </div>
            </div>
        </div>`;

}