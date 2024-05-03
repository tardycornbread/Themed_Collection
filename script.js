console.log("We are practicing 'for' loops and objects.");

let aesthetics = [
  {imgURL: 'img/Frutiger Aero.jpg',
  title: 'Frutiger Aero',
  description: 'Frutiger Aero (also known as Web 2.0 Gloss) is a broad design style and aesthetic that was prevalent in advertising, media, stock imagery and technology from roughly 2004 to 2013, following the end of the Y2K era. Overlapping with the McBling and ElectroPop 08 aesthetics, it is characterized by its vast use of Skeuomorphism, glossy textures, cloudy skies, tropical fish, water, bubbles, glass, lens flare, sprawling patterns, "humanism", aero glass, bokeh, Frutiger fonts, Abstract Tech, auroras and bright, vibrant colors (usually greens and blues). '}, 
  
  {imgURL: 'img/Atompunk.jpg', 
   title: 'Atompunk',
   description: 'Atompunk is an aesthetic centered around a view of the future from the perspective of the 1950s and 1960s. Modern depictions tend to use a distinct, brightly-colored art style but it can also appear just as it does in the pages main image. It often depicts imagery associated with "traditionally American" values, particularly a belief in the nuclear family and the suburban lifestyle. But its important to note that this isnt the Googie or Raygun Gothic aesthetic; it does not center itself around a utopian future but rather a dystopian nightmare. Atompunk is the dark underbelly of 1950s and 1960s sci-fi characterized by potential dark futures such as Do Androids Dream of Electric Sheep, satirical parodies of typically suburban American life such as Dads Nuke and more recently satirical parodies of the Raygun Gothic and Googie aesthetic such as Futurama. '
  },
  
  {imgURL: 'img/Dreamcore.jpg', 
   title: 'Dreamcore',
   description: 'Dreamcore is a surrealist aesthetic that uses motifs commonly associated with dreams, daydreams or nightmares, portrayed through media such as images, videos and, on occasion, music. Dreamcore shares many similarities with Weirdcore.  '
  },
  
  {imgURL: 'img/Doomer.jpg', 
   title: 'Doomer',
   description: 'Doomer, also called Doomerwave when referring to its aesthetic, is an internet subculture based around urbanism and other global problems (war, economy, climate change, the end of the world, etc.) seen from a pessimistic and nihilistic point of view, typically focused in east Slavic countries (Russia, Ukraine and Belarus), although its not necessarily limited to these nations. '
  }, 
  
  {imgURL: 'img/Cybercore.jpg', 
   title: 'Cybercore',
   description: 'Cybercore (also known as Cyber Y2K or Y3K, and originally just Y2K prior to semantic shift) is an aesthetic that was prevalent in popular culture from roughly 1997 to 2004, succeeding the Memphis Design and Grunge eras and overlapping with the McBling, UrBling, Surf Crush, and 2K1 aesthetics. Some of its aspects include tight leather pants, shiny clothing, silver eye shadow, spiky up-dos, Oakleys, gradients, translucence, and Blobitecture. Cybercore relies on the use of technology and slick futuristic looks, signaling the optimism for the 3rd Millennium or 21st Century.  '
  },
  
  {imgURL: 'img/Maximalism.jpg', 
   title: 'Atompunk',
   description: 'Maximalism is a design style that encourages excess. It is the polar opposite of Minimalism.  '
  },
  
  {imgURL: 'img/Alternative.jpg', 
   title: 'Alternative',
   description: 'Alternative, also abbreviated as Alt, is an umbrella term that can describe anything that sits outside of the mainstream. Colloquially it refers to dark western styles such as Punk, Grunge, Emo, etc though the true meaning includes a wide range of darker and lighter styles from all cultures. Sometimes, if a subculture is particularly popular (rock is an example of this), alternative rock would be its own sub-genre outside of "mainstream" rock. '
  },
  
  {imgURL: 'img/Chromecore.jpg', 
   title: 'Chromecore',
   description: 'Chromecore is a common design aesthetic that was popular during the 2000s focused on metallic-looking objects and products, most commonly CDs, DVDs, computers, video games, toys, phones, and digital cameras all having a sleek, chromatic gray texture. It was characterized by a distinct aesthetic period, encapsulating fashion, hardware design, music, and furnishings shining with technological optimism.  '
  },

  {imgURL: 'img/Mallsoft.jpg', 
   title: 'Mallsoft',
   description: 'Mallsoft (also known as Mallwave) is an aesthetic centered around the shopping mall experience that was popular from the 1970s to 2000s (particularly in the "Memphis Design" era of the 1980s and early 1990s), until the "retail apocalypse" which has been slowly forcing already struggling malls to die off.  '
  },
  
  {imgURL: 'img/Synthwave.jpg', 
   title: 'Synthwave',
   description: 'Synthwave is an electronic music genre that emerged in the late 2000s and draws inspiration from nostalgic 1980s soundtracks, video games, and pop culture. The visuals commonly associated with Vaporwave are derived from Neon Noir. While it does often get lumped in with Vaporwave, there are significant differences between the two genres. The genre is credited as being started by acts such as College, Kavinsky, and Justice, although a fair argument could be made that the first big mainstream album evoking the Synthwave vibe and aesthetic could be traced back to the sophomore Daft Punk album, Discovery. '
  },
  
];

let img = document.querySelector('.img');  
let titleElement = document.querySelector('.h2');  
let description = document.querySelector('.h3');  
let itemContainer = document.querySelector('#item-container');
let button = document.querySelector('.button');


for (let i = 0; i < 5; i++) {
  console.log(aesthetics[i]);
}

for (let i = 0; i < aesthetics.length; i++) {
  console.log(aesthetics[i].title);
}

for (let i = 0; i < 8; i++) {
  console.log(aesthetics[i].description);
}

document.addEventListener("DOMContentLoaded", displayRandomObject);

function displayRandomObject() {
    let randomIndex = Math.floor(Math.random() * aesthetics.length);
    let randomObject = aesthetics[randomIndex];
    img.src = randomObject.imgURL;
    img.alt = `Image of ${randomObject.title}`;
    titleElement.textContent = randomObject.title;
    description.textContent = randomObject.description;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let currentIndex = 0;
shuffle(aesthetics); 

button.addEventListener("click", function() {
    if (currentIndex >= aesthetics.length) {
        shuffle(aesthetics);
        currentIndex = 0;
    }
    displayCurrentObject(currentIndex++);
});

function displayCurrentObject(index) {
    let currentObject = aesthetics[index];
    img.src = currentObject.imgURL;
    img.alt = `Image of ${currentObject.title}`;
    titleElement.textContent = currentObject.title;
    description.textContent = currentObject.description;
}