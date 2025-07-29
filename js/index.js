// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/img-1.jpg",
       "./img/img-2.jpg",
       "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

// Database

let database = {
    wind: {
        title: "Wind: Harnessing the Invisible Force",
        url: "./img/Wind.jpg",
        alt: "an image of ....",
        body: "Wind is one of the most abundant and accessible sources of green energy. As the sun heats the Earth's surface unevenly, it creates wind patterns that can be harnessed to generate electricity. Wind energy is clean, renewable, and does not produce harmful emissions, making it a crucial alternative to fossil fuels. It is widely available, especially in open plains, coastal regions, and high-altitude areas where wind speeds are consistent. Unlike finite energy sources, wind is inexhaustible and can be scaled for both large wind farms supplying electricity to entire cities and smaller applications for individual use. As technology advances, wind energy continues to become more efficient and affordable, further cementing its role in the transition to sustainable power."
    },
    sun: {
        title: "Sun: The Limitless Energy Provider",
        url: "./img/Sun.jpg",
        alt: "an image of ....",
        body: "The sun is the most powerful and essential source of energy on Earth, driving weather patterns, plant growth, and the overall energy cycle of the planet. As an unlimited and renewable resource, solar energy plays a fundamental role in sustaining life and supporting other forms of green energy. The sun’s heat influences wind currents and fuels the water cycle, making it the backbone of many natural processes. Unlike fossil fuels, the sun’s energy does not deplete over time and does not release harmful emissions into the atmosphere. Its potential for clean power is virtually limitless, making it one of the most promising solutions for a sustainable future. By harnessing the energy of the sun, humanity can move toward a cleaner, healthier planet while reducing dependence on non-renewable resources."
    },
    water: {
        title: "Water: The Power of Flowing Energy",
        url: "./img/Water.jpg",
        alt: "an image of ....",
        body: "Water has long been a powerful energy source, utilized for centuries in various forms, from ancient water wheels to modern hydroelectric power plants. The natural movement of water—whether through rivers, tides, or ocean currents—provides a continuous and renewable source of energy. Hydroelectric power is one of the most widely used renewable energy sources, offering a steady and reliable supply of electricity. Unlike fossil fuels, harnessing water for energy does not emit greenhouse gases, making it a cleaner alternative. Additionally, tidal and wave energy have emerged as promising technologies, capable of generating power from the natural motion of the oceans. By using water’s constant and powerful flow, we can significantly reduce reliance on non-renewable energy sources while maintaining ecological balance."
    }
}


// Get references to hard coded HTML
let content = document.querySelector('.content');

let btns = document.querySelectorAll('.controls button');

// console.log(content, btns);

// DISPLAY the initial Content 


content.innerHTML = `
                    <h2>${database.wind.title}</h2>
                    <img src="${database.wind.url}" alt="${database.wind.alt}">
                    <p>${database.wind.body}</p>
                    `
;
                    
function handleClick(e) {
    

    for (let btn of btns ) {

        if (btn.hasAttribute('class')) {
            btn.removeAttribute('class');
        }
    }
    
    let current = e.target;
    // console.log(current.dataset.id);

    current.classList.add('active');

    let key = current.dataset.id;
    content.innerHTML = `<h2>${database[key].title}</h2>
    <img src="${database[key].url}" alt="${database[key].alt}">
    <p>${database[key].body}</p>`;
}

for (let btn of btns ) {
    btn.addEventListener('click', handleClick);
}