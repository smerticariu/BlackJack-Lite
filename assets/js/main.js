var blackjack = (function(){
    //card constructor: image + value of each card
    function Card(points, src) {
        this.points = points;
        this.src = src;
    }

    //object with cards using card constructor
    var cards = {
        "2OfClubs": new Card(2, 'assets/img/cards/2_of_clubs.svg'),
        "2OfDiamonds": new Card(2, 'assets/img/cards/2_of_diamonds.svg'),
        "2OfHearts": new Card(2, 'assets/img/cards/2_of_hearts.svg'),
        "2OfSpades": new Card(2, 'assets/img/cards/2_of_spades.svg'),

        "3OfClubs": new Card(3, 'assets/img/cards/3_of_clubs.svg'),
        "3OfDiamonds": new Card(3, 'assets/img/cards/3_of_diamonds.svg'),
        "3OfHearts": new Card(3, 'assets/img/cards/3_of_hearts.svg'),
        "3OfSpades": new Card(3, 'assets/img/cards/3_of_spades.svg'),

        "4OfClubs": new Card(4, 'assets/img/cards/4_of_clubs.svg'),
        "4OfDiamonds": new Card(4, 'assets/img/cards/4_of_diamonds.svg'),
        "4OfHearts": new Card(4, 'assets/img/cards/4_of_hearts.svg'),
        "4OfSpades": new Card(4, 'assets/img/cards/4_of_spades.svg'),

        "5OfClubs": new Card(5, 'assets/img/cards/5_of_clubs.svg'),
        "5OfDiamonds": new Card(5, 'assets/img/cards/5_of_diamonds.svg'),
        "5OfHearts": new Card(5, 'assets/img/cards/5_of_hearts.svg'),
        "5OfSpades": new Card(5, 'assets/img/cards/5_of_spades.svg'),

        "6OfClubs": new Card(6, 'assets/img/cards/6_of_clubs.svg'),
        "6OfDiamonds": new Card(6, 'assets/img/cards/6_of_diamonds.svg'),
        "6OfHearts": new Card(6, 'assets/img/cards/6_of_hearts.svg'),
        "6OfSpades": new Card(6, 'assets/img/cards/6_of_spades.svg'),

        "7OfClubs": new Card(7, 'assets/img/cards/7_of_clubs.svg'),
        "7OfDiamonds": new Card(7, 'assets/img/cards/7_of_diamonds.svg'),
        "7OfHearts": new Card(7, 'assets/img/cards/7_of_hearts.svg'),
        "7OfSpades": new Card(7, 'assets/img/cards/7_of_spades.svg'),

        "8OfClubs": new Card(8, 'assets/img/cards/8_of_clubs.svg'),
        "8OfDiamonds": new Card(8, 'assets/img/cards/8_of_diamonds.svg'),
        "8OfHearts": new Card(8, 'assets/img/cards/8_of_hearts.svg'),
        "8OfSpades": new Card(8, 'assets/img/cards/8_of_spades.svg'),

        "9OfClubs": new Card(9, 'assets/img/cards/9_of_clubs.svg'),
        "9OfDiamonds": new Card(9, 'assets/img/cards/9_of_diamonds.svg'),
        "9OfHearts": new Card(9, 'assets/img/cards/9_of_hearts.svg'),
        "9OfSpades": new Card(9, 'assets/img/cards/9_of_spades.svg'),

        "10OfClubs": new Card(10, 'assets/img/cards/10_of_clubs.svg'),
        "10OfDiamonds": new Card(10, 'assets/img/cards/10_of_diamonds.svg'),
        "10OfHearts": new Card(10, 'assets/img/cards/10_of_hearts.svg'),
        "10OfSpades": new Card(10, 'assets/img/cards/10_of_spades.svg'),

        "aceOfClubs": new Card(11, 'assets/img/cards/ace_of_clubs.svg'),
        "aceOfDiamonds": new Card(11, 'assets/img/cards/ace_of_diamonds.svg'),
        "aceOfHearts": new Card(11, 'assets/img/cards/ace_of_hearts.svg'),
        "aceOfSpades": new Card(11, 'assets/img/cards/ace_of_spades.svg'),

        "jackOfClubs": new Card(12, 'assets/img/cards/jack_of_clubs.svg'),
        "jackOfDiamonds": new Card(12, 'assets/img/cards/jack_of_diamonds.svg'),
        "jackOfHearts": new Card(12, 'assets/img/cards/jack_of_hearts.svg'),
        "jackOfSpades": new Card(12, 'assets/img/cards/jack_of_spades.svg'),

        "queenOfClubs": new Card(13, 'assets/img/cards/queen_of_clubs.svg'),
        "queenOfDiamonds": new Card(13, 'assets/img/cards/queen_of_diamonds.svg'),
        "queenOfHearts": new Card(13, 'assets/img/cards/queen_of_hearts.svg'),
        "queenOfSpades": new Card(13, 'assets/img/cards/queen_of_spades.svg'),

        "kingOfClubs": new Card(14, 'assets/img/cards/king_of_clubs.svg'),
        "kingOfDiamonds": new Card(14, 'assets/img/cards/king_of_diamonds.svg'),
        "kingOfHearts": new Card(14, 'assets/img/cards/king_of_hearts.svg'),
        "kingOfSpades": new Card(14, 'assets/img/cards/king_of_spades.svg')
    }

    //convert cards object to an array
    var cardsArray = Object.keys(cards).map(function(key){
        return cards[key];
    });

    var $playerCards = $('.player_cards');
    var $computerCards = $('.computer_cards');
    var $pcomputer = $('.pcomputer');
    var $stand = $('.stand');
    var $surrender = $('.surrender');
    var $hit = $('.hit');
    var $playerScore = $('.player_score');
    var $computerScore = $('.computer_score');
    var $_points = $('.points');
    var $_playerName = $('.player_name');
    var $reset = $('.reset');

    var $username = $('.username');
    var $form = $('form');
    var $informations = $('.informations');

    //set username's player
    $('.ok').click(function(){
        $_playerName.html($username.val() + ": ");
        $form.slideUp('slow');
    });

    $_playerName.click(function(){
        $form.slideDown('slow');
    });

    var $tpoints = 0;
    $stand.addClass("disabled");
    $stand.prop( "disabled", true );
    $surrender.addClass("disabled");
    $surrender.prop( "disabled", true );
    var clear = function()
    {
        $hit.val("Preparing the deck").addClass("disabled").prop( "disabled", true );
        $stand.addClass("disabled").prop( "disabled", true ).prop( "disabled", true );
        $surrender.addClass("disabled");

        var counter = 5;
        var interval = setInterval(function() {
            counter--;
            $hit.val(counter);
            if($hit.val() == 0) {
                $hit.removeClass("disabled").prop( "disabled", false ).val("Start");
                $_points.html("0");
                $playerCards.html("");
                $computerCards.html("");
                $pcomputer.html("0");
                $informations.html("").removeClass('tie success fail');
                $tpoints = 0;
                clearInterval(interval);
            }
        }, 1000);
    };

    //condition to start the game(if total points < maximum points the game continue)
    if($tpoints <= 21){
        $hit.click(function(){
            $(this).val("Hit");
            var $current_card = cardsArray[Math.floor(Math.random() * 52 + 1)];
            var $image = "<li><img src= ' " + $current_card.src + " '></li>";
            var $points = $current_card.points;
            var $cpoints = Math.floor(Math.random() * 14 + 1);
            var $compCard = "<li><img src='assets/img/cards/back.png' /></li> ";
            var $totalPoints = parseInt($('.points').html());

            $playerCards.append($image);
            $computerCards.append($compCard);
            $pcomputer.html($tpoints)
            $stand.removeClass("disabled").prop( "disabled", false );
            $surrender.removeClass("disabled").prop( "disabled", false );

            //condition to add the points of each hand
            if($totalPoints < 21) {
                $totalPoints += $points;
                $_points.html($totalPoints);
            }
            if($tpoints < 21){
                $tpoints += $cpoints;
                $pcomputer.html($tpoints);
            }
            if($tpoints > 21 && $tpoints > $totalPoints) {
                    $informations.html("You win! \nYour score: "+ $totalPoints + "\nComputer's score: " +
                    $tpoints).addClass('success');

                    var $pscore = parseInt($playerScore.html()) + 1;
                    $playerScore.html($pscore);
                    clear();
            }

            if($totalPoints > 21 && $totalPoints) {
                $informations.html("You lost! \nYour score: "+ $totalPoints + "\nComputer's score: "+
                $tpoints).addClass('fail');

                var $cscore = parseInt($computerScore.html()) + 1;
                $computerScore.html($cscore);
                clear();
            }
            else if ($totalPoints == 21) {
                $informations.html("BlackJack! Double score! \nYour score: "+ $totalPoints + "\nComputer's score: "+
                $tpoints).addClass('win');

                var $pscore = parseInt($playerScore.html()) + 2;
                $playerScore.html($pscore);
                $tpoints = 0;
                clear();
            }
            if ($tpoints == 21) {
                $informations.html("You lost! \nYour score: "+ $totalPoints + "\nComputer's score: "+
                $tpoints).addClass('fail');

                var $cscore = parseInt($computerScore.html()) + 2;
                $computerScore.html($cscore);
                clear();
            }
            if($tpoints > 21 && $tpoints == $totalPoints){
                $informations.html('Tie!').addClass('tie');
                clear();
            }
        });
        $stand.click(function(){
            var $totalPoints = parseInt($_points.html());
            var $tpoints = parseInt($pcomputer.html());
            if($totalPoints > $tpoints) {
                $informations.html("You win! \nYour score: "+ $totalPoints + "\nComputer's score: "+
                $tpoints).addClass('success');

                var $pscore = parseInt($playerScore.html()) + 1;
                $playerScore.html($pscore);
                clear();
            }
            else if($totalPoints == $tpoints) {
                $informations.html('Tie!').addClass('tie');
                clear();
            }
            else {
                $informations.html("You lost \nYour score: "+ $totalPoints + "\nComputer's score: "+
                $tpoints).addClass('fail');

                var $cscore = parseInt($computerScore.html()) + 1;
                $computerScore.html($cscore);
                clear();
            }
        });
        $surrender.click(function(){
            $informations.html("You lost! \nDouble score for Computer").addClass('fail');
            var $cscore = parseInt($computerScore.html()) + 2;
            $computerScore.html($cscore);
            clear();
        });
    }
    $reset.click(function(){
        $computerScore.html("0");
        $playerScore.html("0");
    });
});
blackjack();
