let apiKey = "live_OG0hBEvzE7DaFL1LIIP2b18hkmthS7lXGJZY0VbWejutbhGBewPjPTY4KkamSvuc"


async function LoadSomeCats() {
    try {
        let cats = []
        for (let i = 0; i <= 10; i++) {
            let catsRaw = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${10}`)
            let catsJson = await catsRaw.json();
            for (let y = 0; y <= catsJson.length; y++) {
                if (catsJson[y] != undefined) {
                    cats.push(catsJson[y])
                }
            }
        }

        PaintTheCats(cats)
    } catch (error) {
        console.error(error)
    }

}
function PaintTheCats(cats) {
    let div = document.getElementById("pictures");
    let html = `<h1>Pictures</h1>`;
    console.log(cats.length)
    for (let i = 0; i <= cats.length; i++) {
        if (cats[i] != undefined) {

            console.log(cats[i].url)
            html += `<img src="${cats[i].url}" alt="Cat" width="250" height="250">`;
        }
    }
    div.innerHTML = html;
    console.log(html)
}
async function SearchForCats(){
    let text = document.getElementById("searchText").innerText;
    
}