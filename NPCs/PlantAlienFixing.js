class PlantAlienFixing extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'MediumSpringGreen', 'LightCyan');
//currently partially untested, for now - 12-18. Once known to work on it's own, it can be moved to the proper place and the ship actually disabled while doing this. 
//I'd include this in plant alien's code, but i'm pretty sure location is a constant so i can't move them.
		this.dialog = [ 

            /* 0 */ { npc: "(...)", auto:1 , default: 0  }, 
			/* 1 */ { needsSurfaced:"fixShip", animation:"plantFixingShip", human: "!!. H-hi. You appeared so suddenly." }, //ship would be disabled here or in last ran line of regular plant alien's code
			/* 2 */ { npc: "Hey. I'm just looking over your ship, it doesn't look too bad. It won't take me too long." },
			/* 3 */ { human: "Okay."  },
			/* 4 */ { npc: "I'll just fix it then spend some time studying it and gathering data if that's alright with you." },
			/* 5 */ { human: "Sure, take as long as you want. There's other things I can do in a meantime" },


			/* 6 */ { human: "(You have nothing else to say to them right now.)", auto:[7], default:6 },

			/* 7 */ { needsSurfaced: "alienDevice", human: "Hey, do have any thing that could make someone less intimidating?" },
            /* 8 */ { npc: "I've been working on a device like that for a while. I've made a few prototypes, but none fully work." },
			/* 9 */ { npc: "-Now, that I think about it, your ship might just give me what I need to complete them!" },
            /* 10 */ { human: "...You're not gonna steal something from my ship are you?" },
            /* 11 */ { npc: "Of course not, it just gave me inspiration. Here, you can take this prototype device for now.", item:'badDevice'}, 
            /* 12 */ { npc: "I'll give you a properly working once I'm back at my workshop. Just let me know once you really need me to head over there." },
            /* 13 */ { human: "Will do."} ,
            /* 14 */ { npc: "In the meantime, I'll keep gathering extra data from your ship. I won't be able to come back to it afterall."},
            /* 15 */ { human: "Won't be able to come back? Why not? I wouldn't mind if you wanted to take another look."},

            /* 16 */ { npc: "I can only teleport twice a day." },
            /* 17 */ { human: "Hmm, good to know.", next:19 },
            
            /* 18 */ { npc: "(They continue with their work.)", next: 19 },

            /* 19 */ { npc: "(Ask them to go back to their workshop? They won't leave it after this)", response: ' [1] Yes || [2] No ', a: 20, b: 18 },
            
            /* 20 */ { npc: "Alright, are you sure?", response: " [1] Yeah, I'm sure || [2] Wait a minute... ", a: 22, b: 21 },
            /* 21 */ { human: "Actually, no not yet.", next:18 },

            /* 22 */ { npc: "Okay, I'll see you there", surface:'fixingComplete', animation: 'plantFixDone', next: 23 },

            /* 23 */ { npc: "(They've left. You can now continue using your ship.)", isEnd: true, } //ship renabled here



		];


	}
}



/*

            
*/