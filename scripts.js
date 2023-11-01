for (var i = 1; i < 101; i++) {
    accusationGenerator(i);

}


function accusationGenerator(currentAccusation) {
    var accusationContainer = $('<div class="accBox"></div>');
    var generateAccusation = $('<h3 class="h3styles">Accusation ' + currentAccusation + '</h3>');

    accusationContainer.append(generateAccusation);
    $('#container2').append(accusationContainer);


    generateAccusation.on("click", function () {
        var friends = ['Nate', 'Matt', 'Nick', 'Noelle', 'Courtney'];
        var currentFriend = (friends[currentAccusation % friends.length]);
        var locations = ['Florida', 'New York', 'Minnesota', 'Georgia', 'North Carolina', 'South Carolina', 'Colorado', 'New Jersey', 'New Hampshire', 'New Mexico'];
        var currentLocation = (locations[currentAccusation % locations.length]);
        var murderweapons = ['scissors', 'knife', 'gun', 'bazooka', 'candle', 'match', 'spoon', 'fork', 'pencil', 'glass', 'laptop', 'phone', 'big head', 'scary face', 'spooky face', 'beverage', 'food', 'marker', 'paper clip', 'piece of paper'];
        var cuurentWeapon = (murderweapons[currentAccusation % murderweapons.length]);

        alert('I accuse ' + currentFriend + ', with the ' + cuurentWeapon + ' in the ' + currentLocation + '.')
    })
}
