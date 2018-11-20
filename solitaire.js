(function() {
    var cards = [];
    var suits = ['h', 's', 'c', 'd'];
    var displays = {
        n1: 'A',
        n2: '2',
        n3: '3',
        n4: '4',
        n5: '5',
        n6: '6',
        n7: '7',
        n8: '8',
        n9: '9',
        n10: '10',
        n11: 'J',
        n12: 'Q',
        n13: 'K'
    };
    var icons = {
        h: '<div class="icon heart"><span class="a"></span><span class="b"></span><span class="c"></span></div>',
        s: '<div class="icon spade"><span class="c"></span><span class="a"></span><span class="b"></span><span class="d"></span></div>',
        c: '<div class="icon club"><span class="a"></span><span class="b"></span><span class="c"></span><span class="d"></span></div>',
        d: '<div class="icon diamond"><span></span></div>'
    };

    var lastLocation = {};
    var activeCards = [];

    var currentGame = {};
    var priorGame = {};
    var hasStarted = false;

    function renderStartBoard() {
        document.body.innerHTML = '<div id="start-container" class="start-container">'+
                                        '<h1>Solitaire</h1>'+
                                        '<button id="startnew">New game</button>'+ 
                                    '</div>';
    }

    document.addEventListener('click', function(e) {
        //e.target.name
        //e.target.id
        //e.target.className
        //e.target.getAttribute('attributeName')
        if (e.target.id === 'startnew') {
            startNewGame();
            return false;
        }
    });

    function startNewGame() {
        cards = [];
        var game = {
            stacks: {
                stack1: [],
                stack2: [],
                stack3: [],
                stack4: [],
                stack5: [],
                stack6: [],
                stack7: [],
            },
            refuse: [],
            closets: {
                c: [],
                d: [],
                h: [],
                s: []
            }
        };
        for (var s = 0; s < suits.length; s++) {
            for (var c = 1; c < 14; c++) {
                cards.push({
                    suit: suits[s],
                    num: c
                });
            }
        }

        cards = shuffle(cards);
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    renderStartBoard()
})();
