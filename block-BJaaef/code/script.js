
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

        let button = document.createElement('button');
        
        let a = document.createElement('a');
        a.href = peoples.wikiLink;
        button.append (a)

        article.append (div ,p , button);

        bigDiv.append (article)
    });
});