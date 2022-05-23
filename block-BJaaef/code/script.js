
let bigDiv = document.querySelector ('.all-box');
got.houses.forEach((house) => {
    house.people.forEach(peoples => {
        let article = document.createElement('article');
        article.classList.add('box')

        let div = document.createElement('div');
        div.classList.add('flex-justify-content')
        let img = document.createElement('img');
        img.src = peoples.image;
        let h2 = document.createElement('h2');
        h2.innerText = peoples.name ;
        div.append (img , h2)

        let p = document.createElement('p');
        p.innerText = peoples.description;
        
        let a = document.createElement('a');
        a.innerText = `Learn More!` ;
        a.href = peoples.wikiLink;

        article.append (div ,p , a);

        bigDiv.append (article)
    });
});