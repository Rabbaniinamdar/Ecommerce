let articlesPerPage;
let totalPages;
let a;
console.log("Hey I am javascript")

let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
export const sendquary = query

console.log(query)
const fetchNews = async () => {
    if (query == "ALLL") {
        a = await fetch(`https:dummyjson.com/products?&limit=100`)
    }
    else {
        a = await fetch(`https:dummyjson.com/products/category/${query}`)
    }
    let r = await a.json()
    console.log(r)
    console.log(r.total)
    var q = query.charAt(0).toUpperCase() + query.slice(1, query.length - 1);
    queryText.innerHTML = q.replace("+", " ")
    queryResults.innerHTML = r.total

    let str = ""
    for (let item of r.products) {
        // let date = new Date(item.publishedAt).toLocaleDateString()
        console.log(item.category)
        str = str + `
<div class="card m-2"  ">
<span class="discount">${item.discountPercentage}%off</span>
<img src="${item.thumbnail}" class="card-img-top" alt="..."  >
    <div class="card-body" id="cd">
         <h3  class="card-title text-danger">${item.title}</h4>
         <h5 class="card-text">${item.description}</h5>
        <h4 class="card-text text-dark">Price:&nbsp; <span class="font-weight-bold"> &#8377;${parseInt(item.price) * 50}</span> </h4>
        <h5 class="card-text">Rating:&nbsp;<span class="Rating">${item.rating}</span>
            <i class="fa fa-star text-success" aria-hidden="true"></i>&nbsp;
            <i class="fa fa-star text-success" aria-hidden="true"></i>&nbsp;
            <i class="fa fa-star text-success" aria-hidden="true"></i>&nbsp;
            <i class="fa fa-star text-success" aria-hidden="true"></i>&nbsp;  
            </h5>
        <h5 class="card-text">Brand:&nbsp;${item.brand}</h5>
        <a href="BuyNow" id="byn" class="byn btn btn-info">Buy Now</a>
    </div>
</div>
`
   
    }
    content.innerHTML = str;
    var bn=document.querySelectorAll("a")
    
}

fetchNews()