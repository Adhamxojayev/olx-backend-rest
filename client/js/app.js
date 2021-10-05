(async() => {

    let response = await fetch('http://localhost:5000/ads')

    let data = await response.json()
    
    for(let ads of data){
        let a = document.createElement('a')
        let li = document.createElement('li')   
        let div = document.createElement('div')   
        let img = document.createElement('img')
        let h3 = document.createElement('h3')
        let div2 = document.createElement('div')  
        let p = document.createElement('p')   
        let span = document.createElement('span')   
        
        div2.classList.add('product-list__info')
        elon.classList.add('products-list')
        li.classList.add('products-list__item')
        img.classList.add('product-list__img')
        

        h3.textContent = ads.name
        img.src = ads.image
        span.textContent = ads.price
        p.textContent = ads.date

        li.append(div,img,h3,div2,p,span)
        a.append(li)
        
        elon.append(a)
        
    }
    

})()