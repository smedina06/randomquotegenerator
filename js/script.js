// Random Quote Generator Function
function generatorQuote() {
    const quotes = [
        {
            quote: "Whoever established the high road and how high it should be should be fired.",
            author: "Sandra Bullock"
        },
        {
            quote: "People say, But Betty, Facebook is a great way to connect with old friends. Well, at my age, if I want to connect with old friends, I need a Ouija board.",
            author: "Betty White"
        },
        {
            quote: "We lose those battles as often as we succeed. The key, though, win or lose, is to never fail. And the only way to fail is not to fight. So fight until you cant fight anymore. Never let go. Never give up. Never run. Never surrender. Fight the good fight, you fight even when it seems inevitable your about to go down swinging.",
            author:"Amelia Shepherd"
        },
        {
            quote: "I brake for birds. I rock a lot of polka dots. I have touched glitter in the last 24 hours! And that doesn't mean I'm not smart and tough and strong",
            author: "New Girl 2011-2018"
        },
        {
            quote: "The body is a slave to its impulses. But the thing that makes us human is what we can control. After the storm, after the rush, after the heat of the moment has passed, we can cool off and clean up the messes we made. We can try to let go of what was.",
            author: "Meredith Grey"
        },
        

    
    ];

    let arrayIdex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quoutation").innerHTML = quotes [arrayIdex].quote;
    document.getElementById("author").innerHTML = quotes [arrayIdex].author;
    
}

window.onload = function () {
    generatorQuote();
    document.getElementById("generate").addEventListener('click' , generatorQuote);
}