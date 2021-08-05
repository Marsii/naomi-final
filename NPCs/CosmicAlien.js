class CosmicAlien extends NPC {
	constructor(x, y, spriteSheet) {
		super(x, y, spriteSheet, 'Pink', 'LightCyan' );
//Fully tested! Works great :3

		this.dialog = [
			/* 0 */ { npc: "Hello, human. You are a human, correct?" },
			/* 1 */ { human: "Oh- uh, Yes? How did you know?" },
			/* 2 */ { npc: "I don't know much about your race. I would like to know more but it's hard to get information on isolated races." },
			/* 3 */ { human: "Can you give me something useful in exchange for some info?"  },
			/* 4 */ { npc: "I doubt I'd have anything you would want, but what do you need?" },
			/* 5 */ { human: "Well... you seem... worldly? Any chance you'd have a map?" },
			/* 6 */ { npc: "No, but if you do get a map, I'll mark it for you for free. It's hard to navigate around here" },
			/* 7 */ { human: "Thanks, I don't really know how I got here. I'll come back when I have one." },

            /* You can't get the map without getting the blackhole first so the next conversation should be about that once the need is surfaced 
            
            /* 8 */ { human: "(I don't have a reason to bother her again yet.)",  auto: 9, default: 8 },

			/* 9 */ { needsSurfaced: 'blackHole', human: "Hm, do you know where I can get a black hole? I need one to trade for a map"},
			/* 10 */ { npc: "Oh! I can make those, I'll give you one for human data.", surface: 'log' },
			/* 11 */ { human: "Ok great, I should have something that should work on my ship. I'll be back." },
			/* 12 */ { human: "(I should get a log before I talk to her again.)", auto: [13, 15], default: 12 },


			/* 13 */ { needsCollected: 'realLog', npc: "Did you get the info?" },
            /* 14 */ { human: "*You give her the real log*", remove:'realLog', next: 17},

            /* 15 */ { needsCollected: 'fakeLog', remove:'fakeLog', npc: "Did you get the info?" },
            /* 16 */ { human: "*You give her the fake log*", next: 17},


			/* 17 */ { human: "Yup, here you go." },
			/* 18 */ { npc: " Thanks so much human! I really look forward to reading this. Here's a blackhole, be very careful with that.", item: 'blackHole', animation: 'cosmicQC' },

			/* 19 */ { human: "(She's seems content.)"},
            /* 20 */ { human: "(You have nothing else to say to her right now.)", auto: [21, 23, 25, 34], default: 19 },
 /* Do things unsurface automatically after an item is obtained or would that require something like 'removed'? If so I imagine this line wouldn't work right and might end up turning into an odd accidental loop. */
 /* Tbh, I doubt I fully understand the auto function, so this line may just need re-writing eitherway. */            

 /* Map getting marked*/
			/* 21 */ { needsCollected:'unmarkedmap', npc: "Oh! I see you have the map, I'll mark it", item:'markedMap', remove:'unmarkedMap'},
			/* 22 */ { human: "Thank you. *Your map has been marked* ", next: 19  },

/* Losing astronaut journal and gaining collectionJournal*/
            /* 23 */ { needsCollected: 'astJournal', human: "Here's my journal" },
			/* 24 */ { npc: "Awesome! Here's the collection", item:'cJournal', remove:'astJournal', next: 19 }, //item: ['cJournal', 'astJournal']

 /* Finding out about the collectionJournal and surfacing need for astronaut journal */
			/* 25 */ { needsSurfaced:'cJournal', human: "Hey, you collect information on various different species right?" },
			/* 26 */ { npc: "That's right." },
            /* 27 */ { human: "Can I have a copy of some of that information?" },
			/* 28 */ { npc: "Um, maybe. Do you have something you can give me in exchange?" },
            /* 29 */ { human: "What? But I already gave you my log, can't you just give me it?" },
			/* 30 */ { npc: "Well... the information in the collection is personal accounts of 'alien' life. Your log is mostly... professional. Do you have something more personal?" },
            /* 31 */ { human: "Not on me. I may have a journal in my ship. I was hoping to keep it though." },
			/* 32 */ { npc: "Well, I'll add it to the collection and you can have that." },
            /* 33 */ { human: "*sighs* Fine.", surface:'astJournal', next: 19 },

             /* Obtaining anomaly piece */
            /* 34 */ { needsSurfaced:'anomalyPiece', human: "Hey, you see that... anomaly, behind you?" },
			/* 35 */ { npc: "Yes. I'm guessing you want a piece?" },
            /* 36 */ { human: "Yeah, can I please have one?" },
			/* 37 */ { npc: "Sure, no problem", item:'anomalyPiece', next: 19 },


		];


	}
}