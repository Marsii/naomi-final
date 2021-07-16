class CosmicAlien extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'LightCyan', 'Pink');
//currently untested - computer unreliable but I still want to try to make progress and migrate the dialogue from the old code. Likely contains mistakes/errors. Still trying to figure out the logic somewhat.
		this.dialog = [
			/* 0 */ { npc: "Hello, human. You are a human, correct?" },
			/* 1 */ { human: "Oh- uh, Yes? How did you know?" },
			/* 2 */ { npc: "I don't know much about your race. I would like to know more but it's hard to get information on isolated races." },
			/* 3 */ { human: "Can you give me something useful in exchange for some info?"  },
			/* 4 */ { npc: "I doubt I'd have anything you would want, but what do you need?" },
			/* 5 */ { human: "Well... you seem... worldly? Any chance you'd have a map?" },
			/* 6 */ { npc: "No, but if you do get a map, I'll mark it for you for free. It's hard to navigate around here" },
			/* 7 */ { human: "Thanks, I don't really know how I got here. I'll come back when I have one." },

            /* You can't get the map without getting the blackhole first so the next conversation should be about that once the need is surfaced */
            
            /* 8 */ { human: "(I don't have a reason to bother her again yet.)", needsSurfaced: 'blackhole', auto: 9 },
			/* 9 */ { human: "Hey, do you know where I can get a black hole? I need one to trade for a map"},
			/* 10 */ { npc: "Oh! I can make those, I'll give you one for human data.", surface: 'logNeed' },
			/* 11 */ { human: "Ok great, I should have something that should work on my ship. I'll be back." },
			/* 12 */ { human: "(I should get a log before I talk to her again.)", needsCollected: 'reallog', auto: 13, needsCollected: 'fakelog', auto: 15, default: 12 },


			/* 13 */ { npc: "Did you get the info?" },
            /* 14 */ { human: "*You give her the real log*", auto: 17},

            /* 15 */ { npc: "Did you get the info?" },
            /* 16 */ { human: "*You give her the fake log*", auto: 17},


			/* 17 */ { human: "Yup, here you go." },
			/* 18 */ { npc: " Thanks so much human! I really look forward to reading this. Here's a blackhole, be very careful with that.", item: 'blackhole', animation: 'cosmicQC' },
			/* 19 */ { human: "(She's grateful but has nothing else to say to you right now.)", needsCollected:'unmarkedmap', auto:20, needsSurfaced:'cJournal', auto:22, needsCollected: 'astJournal', auto:31, needsSurfaced:'anomalyPiece', auto:33, default: 19 },
 /* Do things unsurface automatically after an item is obtained or would that require something like 'removed'? If so I imagine this line wouldn't work right and might end up turning into an odd accidental loop. */
 /* Tbh, I doubt I fully understand the auto function, so this line may just need re-writing eitherway. */            


            /* Map getting marked*/
			/* 20 */ { npc: "Oh! I see you have the map, I'll mark it", item:'markedMap', remove:'unmarkedMap'},
			/* 21 */ { human: "Thank you. *Your map has been marked* ", auto: 19, next: 19  },

            /* Finding out about the collectionJournal and surfacing need for astronaut journal */
			/* 22 */ { human: "Hey, you collect information on various different species right?" },
			/* 23 */ { npc: "That's right." },
            /* 24 */ { human: "Can I have a copy of some of that information?" },
			/* 25 */ { npc: "Um, maybe. Do you have something you can give me in exchange?" },
            /* 26 */ { human: "What? But I already gave you my log, can't you just give me it?" },
			/* 27 */ { npc: "Yeah but a lot of the information in here is personal. Your log is mostly professional. Do you have something more personal?" },
            /* 28 */ { human: "Not on me. I may have a journal in my ship. I was hoping to keep it though." },
			/* 29 */ { npc: "Well, I'll add it to the collection and you can have that." },
            /* 30 */ { human: "Ugh, Fine.", needsSurfaced:'astJournal', auto: 19, next: 19 },

            /* Losing astronaut journal and gaining collectionJournal*/
            /* 31 */ { human: "Here's my journal", remove:'astJournal' },
			/* 32 */ { npc: "Awesome! Here's the collection", item:'cJournal' }, 
            
            /* Obtaining anomaly piece */
            /* 33 */ { human: "Hey, you see that... anomaly, behind you?" },
			/* 34 */ { npc: "Yes. I'm guessing you want a piece?" },
            /* 35 */ { human: "Yeah, can I please have one?" },
			/* 36 */ { npc: "Sure, no problem", item:'anomalyPiece', auto: 19, next: 19 },



/* I'm not sure if I can have this aliens dialogue properly end since two of the things gained from her (the anomoly piece and the cjournal) can be gained in any order. Is character dialogues ending important for the game to work? */
			/* 40  { npc: "(You don't need anything else from her.)", isEnd: true, } */

		];


	}
}