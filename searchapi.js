let btn = document.getElementById("btn")
console.log(btn);

btn.addEventListener("click", () =>{
    let search = document.getElementById("search").value
    console.log(search);
    let per_page = 25
    window.fetch(`https://pixabay.com/api/?key=43981459-866a15711fe7d76d98bf729a1&q=${search}&image_type=photo&pretty=true&per_page=${per_page}`)
    .then((res) => res.json( ))
    .then((data) =>{
        console.log(data.hits);
        data.hits.map((x) =>{
            console.log(x);
            let image = `<img src=${x.previewURL} />`
            console.log(image);
            document.body.innerHTML += image
        })
    })
})