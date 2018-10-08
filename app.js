(function(){

    var globalGameSpace = {
        heroStats: {
            name: 'Bogart',
            hp: 150,
            atk: 20
        },
        curRoom: {

        },
        gps: {
            curRow: 0,
            curColumn: 0,
            curRoom: {}
        },
        battle: {
            enemyIndex: 0
        },
        defeatedEnemy: {
            name: '--',
            hp: 0,
            atk: 0
        }
    }



    /* var heroStats = {
        name: 'Bogart',
        hp: 150,
        atk: 20
    }
    var templateObj = {
        defeatedEnemy: {
        name: '--',
        hp: '--',
        atk: '--'
        }
    }

    var gps = {};

globalGameSpace.gps.curRow = 0;
        globalGameSpace.gps.curColumn = 0;
        globalGameSpace.curRoom ={};

    var curRoom = {};
    var worldMap = [];*/
    var newMap = [
        // row 1
        [
            // 1.1
            new Room(
                /*north*/ true,
                /*east*/ true,
                /*south*/ false,
                /*west*/ false,
                /*loot*/ '1 Small Key',
                /*text*/ 'It\'s quiet in here. Except for the house. The house groans in the wind, creaking plaintively and it shifts from side to side with each gust.',
                /*battleObj*/ new Battle([
                    new Enemy('Vampire', 100, 10),
                    new Enemy('Gnome', 80, 12),
                    new Enemy('Goblin', 120, 8)], 'sandals')),
            // 1.2
            new Room(
                /*north*/ true,
                /*east*/ true,
                /*south*/ false,
                /*west*/ true,
                /*loot*/ '2',
                /*text*/ 'Looks like a storage room.',
                /*battle*/ new Battle([
                    new Enemy('Grunt', 80, 5),
                    new Enemy('Snake', 60, 12),
                    new Enemy('Bat', 80, 10)], 'toga')),
            // 1.3
            new Room(
                /*north*/ false,
                /*east*/ false,
                /*south*/ false,
                /*west*/ true,
                /*loot*/ '3 Oily heater fuel receipt.',
                /*text*/ 'What a mess.'),
            // 1.4
            new Room(
                /*north*/ true,
                /*east*/ false,
                /*south*/ false,
                /*west*/ false,
                /*loot*/ '4 Handgun',
                /*text*/ 'The lights don\'t work, and the heat must be off. It\'s cold and dark in here. And weirdly quiet.'),
        ],
        [
            // 2.1
            new Room(
                /*north*/ true,
                /*east*/ true,
                /*south*/ false,
                /*west*/ false,
                /*loot*/ 'Small Key',
                /*text*/ 'It\'s quiet in here. Except for the house. The house groans in the wind, creaking plaintively and it shifts from side to side with each gust.'),
            // 2.2
            new Room(
                /*north*/ true,
                /*east*/ true,
                /*south*/ false,
                /*west*/ true,
                /*loot*/ '',
                /*text*/ 'Looks like a storage room.'),
            // 2.3
            new Room(
                /*north*/ false,
                /*east*/ false,
                /*south*/ false,
                /*west*/ true,
                /*loot*/ 'Oily heater fuel receipt.',
                /*text*/ 'What a mess.'),
            // 2.4
            new Room(
                /*north*/ true,
                /*east*/ false,
                /*south*/ false,
                /*west*/ false,
                /*loot*/ 'Handgun',
                /*text*/ 'The lights don\'t work, and the heat must be off. It\'s cold and dark in here. And weirdly quiet.'),
        ],
        [ // 3.1
            new Room(
                /*north*/ true,
                /*east*/ true,
                /*south*/ false,
                /*west*/ false,
                /*loot*/ 'Small Key',
                /*text*/ 'It\'s quiet in here. Except for the house. The house groans in the wind, creaking plaintively and it shifts from side to side with each gust.'),
            // 3.2
            new Room(
                /*north*/ true,
                /*east*/ true,
                /*south*/ false,
                /*west*/ true,
                /*loot*/ '',
                /*text*/ 'Looks like a storage room.'),
            // 3.3
            new Room(
                /*north*/ false,
                /*east*/ false,
                /*south*/ false,
                /*west*/ true,
                /*loot*/ 'Oily heater fuel receipt.',
                /*text*/ 'What a mess.'),
            // 3.4
            new Room(
                /*north*/ true,
                /*east*/ false,
                /*south*/ false,
                /*west*/ false,
                /*loot*/ 'Handgun',
                /*text*/ 'The lights don\'t work, and the heat must be off. It\'s cold and dark in here. And weirdly quiet.'),
        ]
    ];

    angular.module('gameBones', [])

        .controller('gameNav', function(){

        var nav = this;

        //initialize
        loadMap(newMap);
        updateRoom();

        function updateFlavorText(){
            var tempObj = globalGameSpace.curRoom;
            nav.curRoom = tempObj;
        }

        function loadMap(newMap){
            worldMap = newMap;
        }




        function updateRoom(){
            console.log('curRow: ' + globalGameSpace.gps.curRow);
            console.log('curColumn: ' + globalGameSpace.gps.curColumn);


            globalGameSpace.curRoom = worldMap[globalGameSpace.gps.curRow][globalGameSpace.gps.curColumn];
            curRoom = globalGameSpace.curRoom;
            nav.curRoom = globalGameSpace.curRoom;
            console.log(nav.curRoom);

        }

        // Move current room one based on direction input
        nav.travel = function (direction){

            // 1. Determine which direction
            switch (direction){
                case 'north':
                    console.log(('north ' + direction))
                    if(globalGameSpace.gps.curRow < (worldMap.length - 1)){
                        globalGameSpace.gps.curRow++;
                    } else { 
                        console.log('Can\'t go any further north')};
                    break;
                case 'east':
                    console.log(worldMap[globalGameSpace.gps.curRow].length);
                    console.log(globalGameSpace.gps.curColumn);
                    if(globalGameSpace.gps.curColumn < (worldMap[globalGameSpace.gps.curRow].length - 1)){
                        globalGameSpace.gps.curColumn++;
                    } else {
                        console.log('Can\'t go any further east');
                    }
                    break;
                case 'south':
                    if (globalGameSpace.gps.curRow > 0){ 
                        globalGameSpace.gps.curRow--;
                    } else { 
                        console.log('Can\'t go any further south')};
                    break;
                case 'west':
                    if (globalGameSpace.gps.curColumn > 0){ 
                        globalGameSpace.gps.curColumn--;
                    } else { 
                        console.log('Can\'t go any further west')};
                    break;
                default:
                    console.log(('Function Error: Function Travel could not complete. Requested direction was ' + direction))
            }
            // 2. Refresh the curRoom
            updateRoom();

        }
        // create way to upload maps to play i.e. arrays of rooms to travel through //



    })

        .controller('battleRoom', function(){

        var battle = this;

        battle.curEnemy = {};
        battle.hero = {};

        if(curRoom.battle){
            loadBattle();
            refreshStats();
        }





        battle.heroAttack = function(){
           if(battle.curEnemy && battle.curEnemy.hp !== 0){
                           console.log('heroattack');
               console.log(battle.curEnemy);

            var newEnemyHealth = globalGameSpace.curRoom.battle.curEnemy.hp - globalGameSpace.heroStats.atk;


            if(newEnemyHealth < 1 && globalGameSpace.curRoom.battle.enemyIndex < (globalGameSpace.curRoom.battle.enemies.length - 1)){

                globalGameSpace.curRoom.battle.enemyIndex++;
                globalGameSpace.curRoom.battle.curEnemy = globalGameSpace.curRoom.battle.enemies[globalGameSpace.curRoom.battle.enemyIndex];

                refreshStats();

            } else if (newEnemyHealth < 1 && globalGameSpace.curRoom.battle.enemyIndex >= (globalGameSpace.curRoom.battle.enemies.length - 1)){
                globalGameSpace.curRoom.battle.curEnemy = globalGameSpace.defeatedEnemy;
                console.log('globalGameSpace.battle Over, no more enemies.')

                refreshStats();

            } else {

                globalGameSpace.curRoom.battle.curEnemy.hp = newEnemyHealth;
                refreshStats();

                globalGameSpace.battle.enemyAttack();
            };
           } else {
               console.log('no enemy currently');
           };
        }

        globalGameSpace.battle.enemyAttack = function(){
            console.log('Enemy HP is now: ' + globalGameSpace.curRoom.battle.curEnemy.hp);

            var newHeroHealth = globalGameSpace.heroStats.hp - globalGameSpace.curRoom.battle.curEnemy.atk;

            globalGameSpace.heroStats.hp = newHeroHealth;

        };

        function refreshStats(){
            battle.curEnemy = globalGameSpace.curRoom.battle.curEnemy;
            battle.hero = globalGameSpace.heroStats;
        };

        function loadBattle(){
            globalGameSpace.heroStats = globalGameSpace.heroStats;


            globalGameSpace.curRoom.battle.curEnemy = globalGameSpace.curRoom.battle.enemies[globalGameSpace.curRoom.battle.enemyIndex];

        }
    })
    
     .controller('inventoryControl', function(){
    var inv = this;
        
        inv.contents = [
            new Item (
                'Health Potion',
                2,
                'Drink to restore an amount of health!',
                
                function(){
                    if(this.howMany > 0){
                    globalGameSpace.heroStats.hp += 20;
                    if(globalGameSpace.heroStats.hp > 150){
                        globalGameSpace.heroStats.hp = 150}
                    this.howMany -= 1;
                        } else {
                            console.log('no more ' + this.name + ' left!');
                        }
                    }
                )]        
    })

    function Item(name, howMany, description, useItem){
        this.name = name;
        this.howMany = howMany;
        this.description = description;
        this.useItem = useItem;
        this.itemStats = this.itemStats;
    }
    

    function Room(hasNorth, hasEast, hasSouth, hasWest, whatLoot, flavorText, battle){
        this.hasNorth = hasNorth;
        this.hasEast = hasEast;
        this.hasSouth = hasSouth;
        this.hasWest = hasWest;
        this.whatLoot = whatLoot;
        this.flavorText = flavorText;
        this.battle = battle;
    }

    function Battle(enemies, loot){
        this.enemies = enemies;
        this.loot = loot;
        this.curEnemy = {};
        this.enemyIndex = 0;
    }

    function Enemy(name, hp, atk){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
    }

})();
