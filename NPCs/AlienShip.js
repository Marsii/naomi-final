class AlienShip extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'LightSlateGray', 'white');

		this.dialog = [
			/* this number is the index in the dialog list, advanced by dialogIndex */
			/* 0 */ { npc: "Alien Ship" },

			/* ab response, two options, either index number for dialog or options 
				tries each index in order to see if it is available
				if none are chosen go to default
			*/
			/* 1 */ { npc: "Steal Alien Ship?", response: 1, a: 2, b: 10, default: 4 },
			/* 2 */ { npc: "Do you need to know what else you require to steal it or do you want to take off? ", response: 1, a: 3, b: 0 },

			/* requirements are for the ship to display what is done */
			/* 3 */ { npc: "You'll need certain things:", requirements: true, next: 0, },
			/* 4 */ { npc: "(...)", next: 0, },
			/* 5 */ { npc: "Take off?", response: 1, a: 0, b: 1 },
			/* 6 */	{},
			/* 7 */	{},
			/* 8 */	{},
			/* 9 */ {},

			/* item will give item to character 
				surface will surface an item 
				needs -- item must be surfaced
				maybe just needsSurfaced: 'icepick' ... */
			/* 10 */ { npc: "You've decided to not steal the ship for now.", next:0}, 
		];

		this.requirements = [
			{ needed: "You need an unfrozen, marked map", achieved: "You have a marked map", done: false },
			{ needed: "You need an unfrozen key", achieved: "You have the unfrozen key", done: false },
			{ needed: "You need a battery with energy", achieved: "Your battery has energy", done: false },
			{ needed: "You need to be alone with the ship.", achieved: "You're alone with the ship.", done: false },
		];

	}
}
/*

if (this.alienShip.dialogCount == 0) {
                dialog = "Take Alien Ship?";
            } else if (this.alienShip.dialogCount == 0.5) {
                humanDialogUfo = " [1] Yes || [2] No ";
                if (key == "1") {
                    this.alienShip.dialogCount = 5;
                } else if (key == "2") {
                    this.alienShip.dialogCount = 2;
                }
            }

            if (this.alienShip.dialogCount == 2) {
                dialog = "You've decided not to take the ship for now";
            } else if (this.alienShip.dialogCount == 2.5) {
                humanDialogUfo = "(Press enter if you change your mind)";
            } else if (this.alienShip.dialogCount == 3) {
                this.alienShip.dialogCount = 0;
            }

            if (this.alienShip.dialogCount == 5) {
                if (this.unfrozenkey == true && this.markedmap == true) {
                    if (this.partBattery == true || this.fullBattery == true) {
                        if (this.shipUnattended == true) {
                            this.alienShip.dialogCount = 10;
                        }
                    }
                }
                dialog = "You'll need certain things:";
            } else if (this.alienShip.dialogCount == 5.5) {
               
                }
                 // console.log("Ship free", this.shipUnattended);
                if (this.shipUnattended == false) {
                    fill('red');
                    text("You need to be alone with the ship.", this.alienShip.x - 50, this.alienShip.y);
                } else if (this.shipUnattended == true) {
                    fill('green');
                    text("You're alone with the ship.", this.alienShip.x - 50, this.alienShip.y);
                }
            } else if (this.alienShip.dialogCount == 6.5) {
                this.alienShip.dialogCount = 0;
            }

            if (this.alienShip.dialogCount == 10) {
                dialog = "You have everything you need to go. Ready to go?"
            } else if (this.alienShip.dialogCount == 10.5) {
                humanDialogUfo = " [1] Yes || [2] No ";
                if (key == "1") {
                    //changeScene('badend');
                    // this.alienShip.dialogCount = 5;
                    // END GAME ("Bad" end - screwed some people over. They might be back for revenge)
                } else if (key == "2") {
                    this.alienShip.dialogCount = 10;
                }
            }

*/