class PlantAlien extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'MediumSpringGreen', 'LightCyan');
//currently untested - may contain mistakes/error near end. 
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
            /* 11 */ { npc: "Well just give me whatever you can spare. Hm, if you also get me a piece of that anomaly to the left of my tree I'll fix your ship.", surface: 'anomalyPiece'}, 
            /* 12 */ { human: "I can probably manage that.", surface:'backupTech' },
            /* 13 */ { npc: "Great, let me know when you have everything."} ,


            /* 14 */ { npc: "*They have nothing else to say to you right now.*", auto: 15, default: 14},

            /* 15 */ { needsCollected: ['backupTech', 'anomalyPiece'], npc: "I see you got your tech and the piece. I'll enjoy studying them both. Thanks.", next:17},

            
            /* 16 */ { npc: "*They'll continue waiting for your go ahead.*", next: 17},

            /* 17 */ { npc: "Do you want me to start fixing your ship?", response: ' [1] Yes || [2] No ', a: 18, b: 19 },
            
            /* 18 */ { npc: "Are you sure? I won't be able to leave your ship until I'm absolutely done. And you won't be able to access it while I'm there.", response: " [1] Yup, I'm sure || [2] On second thought... ", a: 20, b: 19 },
            /* 19 */ { human: "No, not yet, I still have a few things I need to do.", next:16 },

            /* 20 */ { npc: "Alright, I'll head over there now. See ya, there", next:21 },
            /* 21 */ { human: "(Woah, I didn't think they'd just disappear. I'm suprised they trust me enough to leave me alone in their workshop.)", surface:'fixShip', animation: 'goneFixing', next: 22 },

            /* 22 */ { human: "(...)", auto: 23 , default: 22 },

            //character disappears to go work on the ship. Leaves opportunity to be alone with the ship. Returns once you tell them to. 

            /* 23 */ { needsSurfaced:'fixingComplete', animation: 'returnPlantQC', npc: "Thanks for letting me fix your ship, I learned a lot :)", next: 25, auto: 24  } ,
            
            /* 24 */ { npc: "(They're happy and you have nothing else to say to them.)", next: 25, default: 24 }, 

            /* 25 */ { needsCollected: 'badDevice', human: "So now that you're back here can you fix the device.?"}, 
            /* 26 */ { npc: "Oh right! To be honest, your ship was just what I needed to help me figure it out. Here ya go.", remove:'badDevice', item:'goodDevice' },
            /* 27 */ { npc: " (They're happy and you have nothing else to say to them.)", isEnd: true, }


            /*Just realized there's an easy way to relate the two events without complicating it with a timer.*/

            /* I really wish I had put dates on the comments, since some seem outdated, but I didn't think that'd be necessary at the time.  */
            
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
                dialog = "Yeah, I'm working on a device to do that. It's not quite finished, I just couldn't figure it out until now. But your ship has given me a good idea, I can give you a complete one later. 
                
                (Human) "Couldn't you do it now? If you're done fixing the ship, you could just come back later when I don't need it. 


            I just want to collect as much extra info as I can before then, teleporting isn't easy and I can only do it once more to get back to my homebase. Once you really need it, let me know."
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