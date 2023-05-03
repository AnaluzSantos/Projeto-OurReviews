const reviews = [
    {
        id: 1,
        name: "Pâmela Reis",
        job: "Ux Design",
        image: "https://unsplash.com/pt-br/fotografias/PK_t0Lrh7MM",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },
    {
            id: 2,
            name: "Anna Johnson",
            job: "Web Designer",
            image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
            text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
    },
    {
        id: 3,
            name: "Peter Jones",
            job: "Intern",
            image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
            text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },
    {
        id: 4,
        name: "Bill Wanderson",
            job: "The Boss",
            image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
            text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
    }
];

const author = document.getElementById('author');
const job = document.getElementById('job');
const image = document.getElementById('image-profile');
const information = document.getElementById('description');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const randomButton = document.querySelector('random-button');

let currentItem = 0; 

function showPerson(person){
    const item = reviews[person]
    image.src = item.image
    author.textContent = item.name
    job.textContent = item.job
    information.textContent = item.textContent 
}

nextButton.addEventlistener('click', () => {
    if(currentItem > reviews.length -1){
        currentItem = 0
    }

    showPerson(currentItem)
})

prevButton.addEventlistener('click', () => {
    currentItem--
    
    if(currentItem < 0){
        currentItem = reviews.length -1
    }

    showPerson(currentItem)
})

randomButton.addEventlistener('click', () => {
    const randomPerson = Math.floor(Math.random() * reviews.length)
    showPerson(randomPerson)  
})