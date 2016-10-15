function et() {
      var quotes = [
        {
          text: "I boldly assert, in fact I think I know, that a lot of friendships and connections absolutely depend upon a sort of shared language, or slang. Not necessarily designed to exclude others, this can establish a certain comity and, even after a long absence, re-establish it in a second.",
          
          img:  "img/ch1.jpg",
          name: "–Christopher Hitchens",
        },
        {
          text: "A good day is one where I can not just read a book, but write a review of it. Maybe today I'll be able to do that. I get for some reason somewhat stronger when the sun starts to go down. Dusk is a good time for me. I'm crepuscular.",
        
          img:  "img/ch2.jpg",
          name: "–Christopher Hitchens",
        },
         {
          text: "Science is a way of thinking much more than it is a body of knowledge.",
          
          img:  "img/cs2.jpg",
          name: "–Carl Sagan",
        },
         {
          text: "All of the books in the world contain no more information than is broadcast as video in a single large American city in a single year. Not all bits have equal value.",
          name: "–Carl Sagan",
          img:  "img/cs2.jpg",
        },
        {
          text: "The universe is not required to be in perfect harmony with human ambition.",
          name: "–Carl Sagan",
          img:  "img/cs3.jpg",
        },
        {
          text: "Extinction is the rule. Survival is the exception.",
          name: "–Carl Sagan",
          img:  "img/cs4.jpg",
        },
        ,{
          text: "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
          name: "–Nikola Tesla", 
          img:  "img/nk1.jpg",
        },
        {
          text: "The feeling is constantly growing on me that I had been the first to hear the greeting of one planet to another.",
          name: "–Nikola Tesla", 
          img:  "img/nk1.jpg",
        },
       
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerHTML =
        '<h2>' + quote.text + '</h2>' +
        '<img src="' + quote.img + '">' +
        '<p>'  + quote.name +  '</p>';
        var some = quote.name + document.getElementById('source');
    }et();