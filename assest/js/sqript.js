fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then( fea => fea.json())
    .then( fea => featured(fea))

    let Cards = document.getElementById('featured')

    function featured(fea){

        console.log(fea);
        for (let index = 45 ; index >= 42 ; index--){
            Cards.innerHTML += `
                <div class="book-card col-lg-3 col-md-6 col-sm-12 border-0 "> 
                    <img src="${fea[index].simple_thumb}" class="w-75 bg-second-color p-4" alt="book image">
                    <h4 class=" mt-4 text-warning-emphasis">${fea[index].title}<h4/>
                    <p class="fs-6  text-secondary">${fea[index].author}</p>
                </div>
            `
        }
    }


    fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(sell => sell.json())
    .then(sell => SellingBook(sell));

    let DivBestSellingBook = document.getElementById('selling-boooks');
    function SellingBook(sell){
        
        DivBestSellingBook.innerHTML += `
        
        <div class="col-lg-6 col-md-12 text-lg-end text-center ">
            <img  src="${sell.simple_thumb}"  >
        </div>

        <div class="col-lg-6 col-md-12  p-5">
            <h4 class="fs-1 fw-bold  mb-3 col-lg-5"> Best Selling <a href="#" class="text-dark">Bo</a>oks</h4>
            <p class="pt-5 text-black-50"> By ${sell.authors[0].name}</p>
            <h4 class=" my-4  "> ${sell.title}</h4>
            <p class="my-5 text-black-50 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                tempora ducimus  iste facilis 
                ipsum porro reprehenderit earum quibusdam.
            </p>
            <a class="border-0 fw-bold text-decoration-none text-dark text-uppercase" href="#">shop it now <i class="fa-solid fa-arrow-right" ></i></a>
        </div>
        `
    }


    fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => popularBooks(res));

    let PopularBooksDiv = document.getElementById('popular-books');
    function  popularBooks(res)
    {
        for (let index = 1; index < 9; index++ ) {

        console.log(res);
        PopularBooksDiv.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12">
            <img src="${res[index].simple_thumb}" class=" w-50" >
            <h3 class=" p-3 text-warning-emphasis">${res[index].title}</h3>
            <p class=" fs-6 text-black-50">${res[index].author}</p>
        </div>

    `
       
        }
};