(function(){
    
    angular.module('gameBones', [])
    
    .controller('gameNav', function(){
        
        var nav = this;
        var map = [
            // row 1
            [
                // 1.1
                new Room(
                    /*north*/ true, 
                    /*east*/ true, 
                    /*south*/ false, 
                    /*west*/ false, 
                    /*loot*/ 'Small Key', 
                    /*text*/ 'It\'s quiet in here. Except for the house. The house groans in the wind, creaking plaintively and it shifts from side to side with each gust.'),
               // 1.2
                new Room(
                    /*north*/ true, 
                    /*east*/ true, 
                    /*south*/ false, 
                    /*west*/ true, 
                    /*loot*/ '', 
                    /*text*/ 'Looks like a storage room.'),
                // 1.3
                new Room(
                    /*north*/ false, 
                    /*east*/ false, 
                    /*south*/ false, 
                    /*west*/ true, 
                    /*loot*/ 'Oily heater fuel receipt.', 
                    /*text*/ 'What a mess.'),
                // 1.4
                new Room(
                    /*north*/ true, 
                    /*east*/ false, 
                    /*south*/ false, 
                    /*west*/ false, 
                    /*loot*/ 'Handgun', 
                    /*text*/ 'The lights don\'t work, and the heat must be off. It\'s cold and dark in here. And weirdly quiet.'),
                ],
            
        ];
        
        function Room(hasNorth, hasEast, hasSouth, hasWest, whatLoot, flavorText){
            this.hasNorth = hasNorth;
            this.hasEast = hasEast;
            this.hasSouth = hasSouth;
            this.hasWest = hasWest;
            this.whatLoot = whatLoot;
            this.flavorText = flavorText;
        }
        
        nav.location = map[0][0].flavorText;
        
    })
    
    
})();