class PlantAlien extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'MediumSpringGreen', 'LightCyan');
//currently untested - computer unreliable but I still want to try to make progress and migrate the dialogue from the old code. Likely contains mistakes/errors. 
		this.dialog = [ 

            /* 0 */ { npc: "Hey, what's up?" },
			/* 1 */ { human: "Hey, do you have something I can use to get off this planet?" },
			/* 2 */ { npc: "Depends. What do you need?" },
			/* 3 */ { human: "Well I see you have a ship behind you, any chance you could repair and upright mine?"  },
			/* 4 */ { npc: "Maybe? I built that ship, so I might be able to repair yours. Can't upright it though. What species made it?" },
			/* 5 */ { human: "I'm - not really sure.... There is some human tech but I don't recognize everything on it. Things are sorta foggy for me, probably thanks to the crash." },
			/* 6 */ { npc: "Interesting. It might be makeshift ship. Some species around here like to abduct others and make use of their tech. I can probably repair it." },
			/* 7 */ { human: "Alright, so what do you want in exchange?" },
            /* 8 */ { npc: "Exchange? I was gonna do it for free but whatever, I won't waste this opportunity..." },
			/* 9 */ { npc: "How about some non-essentials from 'your' ship, and some technology from your species?" },
            /* 10 */ { human: "Umm, I don't really have much of my own tech on me." },
            /* 11 */ { npc: "Well just give me whatever you can spare. Hm, if you also get me a piece of that anomaly up there I'll fix your ship.", surface:'backupLog', surface: 'anomalyPiece' }, 
            /* 12 */ { human: "I can probably manage that." },
            /* 13 */ { npc: "Great, let me know when you have everything."} ,


            /* 14 */ { npc: "*They have nothing else to say to you right now.*", auto: 15, default: 14},

            /* 15 */ { needsCollected: ['backuplog', 'anomalyPiece'], npc: "I see you got your tech and the piece. I'll enjoy studying it both. Thanks.", next:16},

            /* 16 */ { npc: "Alright great, I'll start fixing your ship", next:16 },

            /*Hmm I'm not quite sure how to progress with this one further. I'd assume using the requirements class could work, but I'm not sure how exactly. */

            /*Basically after you get the two things they ask, they offer to fix your ship. You need them to do this at least once. They should be near your ship for 90 seconds (allowing you time to steal theirs if you have the key).  */

            /*You also need to be able to ask them for a device to help out CreepyAlien. They can give you the incomplete device before they finish completing the ship if you ask for the prototype, or they can give you the complete version after (which will make the ship harder to steal later, if it can be stolen at all). */


		];


	}
}



/*

            if (this.plantAlien.dialogCount == 7) {
                dialog = "(They have nothing else to say to you right now.)"
                if (this.backuplog == true) {
                    this.plantAlien.dialogCount == 10
                }
            } else if (this.plantAlien.dialogCount == 7.5) {
                this.plantAlien.dialogCount = 7;
            }

            if (this.afufilled == true && this.bfufilled == true) {
                this.plantAlien.dialogCount = 15;
            }

            if (this.plantAlien.dialogCount == 15) {
                dialog = "Alright, I'll start fixing your ship"
                // Position needs to change to near ship.
            } else if (this.plantAlien.dialogCount == 15.5) {
                this.startcounter = true;
                this.plantAlien.dialogCount = 17;
            }


            if (this.plantAlien.dialogCount == 21.5) {
                humanDialogP = "Do you have anything that could make someone come off as less intimidating?"
            } else if (this.plantAlien.dialogCount == 22) {
                dialog = "Yeah, I'm working on a device to do that. It works, but it's not quite finished. I can give you a complete one after I'm done here."
            } else if (this.plantAlien.dialogCount == 22.5) {
                humanDialogP = "Can I see a prototype?"
            } else if (this.plantAlien.dialogCount == 23) {
                dialog = "Sure, here you go."
                this.baddevice = true;
                this.deviceNeed = false;
            }



            if (this.plantAlien.dialogCount == 17) {
                if (this.deviceNeed == true) {
                    this.plantAlien.dialogCount = 21.5;
                }
                dialog = "*They're currently fixing your ship and you have nothing to say to them*"
            } else if (this.plantAlien.dialogCount == 17.5) {
                this.plantAlien.dialogCount = 17;
            }
            
            
*/