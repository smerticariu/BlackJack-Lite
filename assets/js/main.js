var blackjack = (function(){
    //array of card images
    var $card = [
        'assets/img/cards/2_of_clubs.svg',
        'assets/img/cards/2_of_diamonds.svg',
        'assets/img/cards/2_of_hearts.svg',
        'assets/img/cards/2_of_spades.svg',
        'assets/img/cards/3_of_clubs.svg',
        'assets/img/cards/3_of_diamonds.svg',
        'assets/img/cards/3_of_hearts.svg',
        'assets/img/cards/3_of_spades.svg',
        'assets/img/cards/4_of_clubs.svg',
        'assets/img/cards/4_of_diamonds.svg',
        'assets/img/cards/4_of_hearts.svg',
        'assets/img/cards/4_of_spades.svg',
        'assets/img/cards/5_of_clubs.svg',
        'assets/img/cards/5_of_diamonds.svg',
        'assets/img/cards/5_of_hearts.svg',
        'assets/img/cards/5_of_spades.svg',
        'assets/img/cards/6_of_clubs.svg',
        'assets/img/cards/6_of_diamonds.svg',
        'assets/img/cards/6_of_hearts.svg',
        'assets/img/cards/6_of_spades.svg',
        'assets/img/cards/7_of_clubs.svg',
        'assets/img/cards/7_of_diamonds.svg',
        'assets/img/cards/7_of_hearts.svg',
        'assets/img/cards/7_of_spades.svg',
        'assets/img/cards/8_of_clubs.svg',
        'assets/img/cards/8_of_diamonds.svg',
        'assets/img/cards/8_of_hearts.svg',
        'assets/img/cards/8_of_spades.svg',
        'assets/img/cards/9_of_clubs.svg',
        'assets/img/cards/9_of_diamonds.svg',
        'assets/img/cards/9_of_hearts.svg',
        'assets/img/cards/9_of_spades.svg',
        'assets/img/cards/10_of_clubs.svg',
        'assets/img/cards/10_of_diamonds.svg',
        'assets/img/cards/10_of_hearts.svg',
        'assets/img/cards/10_of_spades.svg',
        'assets/img/cards/ace_of_clubs.svg',
        'assets/img/cards/ace_of_diamonds.svg',
        'assets/img/cards/ace_of_hearts.svg',
        'assets/img/cards/ace_of_spades.svg',
        'assets/img/cards/jack_of_clubs.svg',
        'assets/img/cards/jack_of_diamonds.svg',
        'assets/img/cards/jack_of_hearts.svg',
        'assets/img/cards/jack_of_spades.svg',
        'assets/img/cards/queen_of_clubs.svg',
        'assets/img/cards/queen_of_diamonds.svg',
        'assets/img/cards/queen_of_hearts.svg',
        'assets/img/cards/queen_of_spades.svg',
        'assets/img/cards/king_of_clubs.svg',
        'assets/img/cards/king_of_diamonds.svg',
        'assets/img/cards/king_of_hearts.svg',
        'assets/img/cards/king_of_spades.svg'
    ];

    //card constructor: image + value of each card
    function Card(points, src) {
        this.points = points;
        this.src = src;
    }

    //create cards data
    var _2_of_clubs = new Card(2, $card[0]);
    var _2_of_diamonds = new Card(2, $card[1]);
    var _2_of_hearts = new Card(2, $card[2]);
    var _2_of_spades = new Card(2, $card[3]);

    var _3_of_clubs = new Card(3, $card[4]);
    var _3_of_diamonds = new Card(3, $card[5]);
    var _3_of_hearts = new Card(3, $card[6]);
    var _3_of_spades = new Card(3, $card[7]);

    var _4_of_clubs = new Card(4, $card[8]);
    var _4_of_diamonds = new Card(4, $card[9]);
    var _4_of_hearts = new Card(4, $card[10]);
    var _4_of_spades = new Card(4, $card[11]);

    var _5_of_clubs = new Card(5, $card[12]);
    var _5_of_diamonds = new Card(5, $card[13]);
    var _5_of_hearts = new Card(5, $card[14]);
    var _5_of_spades = new Card(5, $card[15]);

    var _6_of_clubs = new Card(6, $card[16]);
    var _6_of_diamonds = new Card(6, $card[17]);
    var _6_of_hearts = new Card(6, $card[18]);
    var _6_of_spades = new Card(6, $card[19]);

    var _7_of_clubs = new Card(7, $card[20]);
    var _7_of_diamonds = new Card(7, $card[21]);
    var _7_of_hearts = new Card(7, $card[22]);
    var _7_of_spades = new Card(7, $card[23]);

    var _8_of_clubs = new Card(8, $card[24]);
    var _8_of_diamonds = new Card(8, $card[25]);
    var _8_of_hearts = new Card(8, $card[26]);
    var _8_of_spades = new Card(8, $card[27]);

    var _9_of_clubs = new Card(9, $card[28]);
    var _9_of_diamonds = new Card(9, $card[29]);
    var _9_of_hearts = new Card(9, $card[30]);
    var _9_of_spades = new Card(9, $card[31]);

    var _10_of_clubs = new Card(10, $card[32]);
    var _10_of_diamonds = new Card(10, $card[33]);
    var _10_of_hearts = new Card(10, $card[34]);
    var _10_of_spades = new Card(10, $card[35]);

    var _ace_of_clubs = new Card(11, $card[36]);
    var _ace_of_diamonds = new Card(11, $card[37]);
    var _ace_of_hearts = new Card(11, $card[38]);
    var _ace_of_spades = new Card(11, $card[39]);

    var _jack_of_clubs = new Card(12, $card[40]);
    var _jack_of_diamonds = new Card(12, $card[41]);
    var _jack_of_hearts = new Card(12, $card[42]);
    var _jack_of_spades = new Card(12, $card[43]);

    var _queen_of_clubs = new Card(13, $card[44]);
    var _queen_of_diamonds = new Card(13, $card[45]);
    var _queen_of_hearts = new Card(13, $card[46]);
    var _queen_of_spades = new Card(13, $card[47]);

    var _king_of_clubs = new Card(14, $card[48]);
    var _king_of_diamonds = new Card(14, $card[49]);
    var _king_of_hearts = new Card(14, $card[50]);
    var _king_of_spades = new Card(14, $card[51]);

    //array with cards as objects
    var $take = [
        _2_of_clubs, _2_of_diamonds, _2_of_hearts, _2_of_spades,
        _3_of_clubs, _3_of_diamonds, _3_of_hearts, _3_of_spades,
        _4_of_clubs, _4_of_diamonds, _4_of_hearts, _4_of_spades,
        _5_of_clubs, _5_of_diamonds, _5_of_hearts, _5_of_spades,
        _6_of_clubs, _6_of_diamonds, _6_of_hearts, _6_of_spades,
        _7_of_clubs, _7_of_diamonds, _7_of_hearts, _7_of_spades,
        _8_of_clubs, _8_of_diamonds, _8_of_hearts, _8_of_spades,
        _9_of_clubs, _9_of_diamonds, _9_of_hearts, _9_of_spades,
        _10_of_clubs, _10_of_diamonds, _10_of_hearts, _10_of_spades,
        _ace_of_clubs, _ace_of_diamonds, _ace_of_hearts, _ace_of_spades,
        _jack_of_clubs, _jack_of_diamonds, _jack_of_hearts, _jack_of_spades,
        _queen_of_clubs, _queen_of_diamonds, _queen_of_hearts, _queen_of_spades,
        _king_of_clubs, _king_of_diamonds, _king_of_hearts, _king_of_spades
    ];

    var $player_name = prompt("What's your name?");
    $('.player_name').html($player_name + ": ");
    alert("Hello " + $player_name + "!" + "\nGood luck and have fun!");
    var $tpoints = 0;
    $('.stand').addClass("btn disabled");
    $( ".stand" ).prop( "disabled", true );
    $('.surrender').addClass("btn disabled");
    $( ".surrender" ).prop( "disabled", true );
    var clear = function()
    {
        $('.hit').val("Preparing the deck");
        $('.hit').addClass("btn disabled");
        $( ".hit" ).prop( "disabled", true );
        $('.stand').addClass("btn disabled");
        $( ".stand" ).prop( "disabled", true );
        $('.surrender').addClass("btn disabled");
        $( ".surrender" ).prop( "disabled", true );
        var counter = 5;
        var interval = setInterval(function() {
            counter--;
            $('.hit').val(counter);
            if($('.hit').val() == 0) {
                $('.hit').removeClass("btn disabled");
                $( ".hit" ).prop( "disabled", false );
                $('.hit').val("Start");
                $('.points').html("0");
                $('.player_cards').html("");
                $('.computer_cards').html("");
                $('.pcomputer').html("0");
                $tpoints = 0;
                clearInterval(interval);
            }
        }, 1000);
    };

    //condition to start the game(if total points < maximum points the game continue)
    if($tpoints <= 21){
        $('.hit').click(function(){
            $('.hit').val("Hit");
            var $current_card = $take[Math.floor(Math.random() * 52 + 1)];
            var $image = "<li><img src= ' " + $current_card.src + " '></li>";
            var $points = $current_card.points;
            var $cpoints = Math.floor(Math.random() * 14 + 1);
            var $compCard = "<li><img src='assets/img/cards/back.png' /></li> ";
            $('.player_cards').append($image);
            $('.computer_cards').append($compCard);
            $('.pcomputer').html($tpoints)
            var $totalPoints = parseInt($('.points').html());
            $('.stand').removeClass("btn disabled");
            $( ".stand" ).prop( "disabled", false );
            $('.surrender').removeClass("btn disabled");
            $( ".surrender" ).prop( "disabled", false );

            //condition to add the points of each hand
            if($totalPoints < 21) {
                $totalPoints += $points;
                $('.points').html($totalPoints);
            }
            if($tpoints < 21){
                $tpoints += $cpoints;
                $('.pcomputer').html($tpoints);
            }
            if($totalPoints > 10) {
                if($current_card.points == 11) {
                    $current_card.points == 1;
                }
            }
            if($tpoints > 21 && $tpoints > $totalPoints) {
                    alert("You win! \nYour score: "+ $totalPoints + "\nComputer's score: " + $tpoints);
                    var $pscore = parseInt($('.player_score').html()) + 1;
                    $('.player_score').html($pscore);
                    clear();
            }

            if($totalPoints > 21 && $totalPoints) {
                alert("You lost! \nYour score: "+ $totalPoints + "\nComputer's score: "+ $tpoints);
                var $cscore = parseInt($('.computer_score').html()) + 1;
                $('.computer_score').html($cscore);
                clear();
            }
            else if ($totalPoints == 21) {
                alert("BlackJack! Double score! \nYour score: "+ $totalPoints + "\nComputer's score: "+ $tpoints);
                var $pscore = parseInt($('.player_score').html()) + 2;
                $('.player_score').html($pscore);
                $tpoints = 0;
                clear();
            }
            if ($tpoints == 21) {
                alert("You lost! \nYour score: "+ $totalPoints + "\nComputer's score: "+ $tpoints);
                var $cscore = parseInt($('.computer_score').html()) + 2;
                $('.computer_score').html($cscore);
                clear();
            }
            if($tpoints > 21 && $tpoints == $totalPoints){
                alert("Tie!");
                clear();
            }
        });
        $('.stand').click(function(){
            var $totalPoints = parseInt($('.points').html());
            var $tpoints = parseInt($('.pcomputer').html());
            if($totalPoints > $tpoints) {
                alert("You win! \nYour score: "+ $totalPoints + "\nComputer's score: "+ $tpoints);
                var $pscore = parseInt($('.player_score').html()) + 1;
                $('.player_score').html($pscore);
                clear();
            }
            else if($totalPoints == $tpoints) {
                alert("Tie!");
                clear();
            }
            else {
                alert("You lost \nYour score: "+ $totalPoints + "\nComputer's score: "+ $tpoints);
                var $cscore = parseInt($('.computer_score').html()) + 1;
                $('.computer_score').html($cscore);
                clear();
            }
        });
        $('.surrender').click(function(){
            alert("You lost! \nDouble score for Computer")
            var $cscore = parseInt($('.computer_score').html()) + 2;
            $('.computer_score').html($cscore);
            clear();
        });
    }
    $('.reset').click(function(){
        $('.computer_score').html("0");
        $('.player_score').html("0");
        alert("Score reseted!");
    });
});
blackjack();
