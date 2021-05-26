$( "#pitty" ).submit(function(event){
    event.preventDefault();
    let rolls = Number($("#rolls").val());
    let bookmarks = Number($("#bookmarks").val());
    let skystones = Number($("#skystones").val());

    let result = calculatePitty(rolls, bookmarks, skystones);
    console.log(result);

    ( $("#result").text(result) );
})


function calculatePitty(rolls, bookmarks, skystones){
    let tenRolls = Math.floor(skystones/950);
    skystones = skystones%950;
    
    bookmarks += tenRolls*50;
    bookmarks += Math.floor(skystones/100)

    rolls += Math.floor(bookmarks/5);

    return rolls;
}

