class goodend extends Scene {
//these scenes will either be pictures or short gifs that go over what happened after you got home with sentences describing the affects of your actions.  
/*
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
	
*/
    setup() {
		this.hitEnter = false;
        let img1 = loadImage('images/marsii/endings/astship_ending.gif');
        let img2 = loadImage('images/marsii/endings/ceremony_ending.gif');
        let img3 = loadImage('images/marsii/endings/.gif');
        let img4 = loadImage('images/marsii/endings/rooftop_ending.gif');
        let img5 = loadImage('images/marsii/endings/.gif');
        let img6 = loadImage('images/marsii/endings/.gif');
        //I probably shouldn't define let inside of setup. I'll recheck the example soon.
}
	}

	draw() {
		background(0);
		textSize(60);
		noFill();
		textAlign(CENTER, CENTER  - 150);
		strokeWeight(2);
		stroke('pink')

		textSize(20);


		if (keyIsPressed) {
			if (keyCode == ENTER) this.hitEnter = true;
		} else {
			if (this.hitEnter) {
				this.hitEnter = false;
			}
		}
/*
        image(img1, CENTER, CENTER);
		text('You got off the planet! Though it will take you a while, you’re finally able to head back to earth and you didn’t screw anyone over.', width/2, 200);

        image(img2, CENTER, CENTER);
        text('When you get back, you’re praised for your struggle to get back to earth and the humanity you retained during.  Some doubt your tales', width/2, 200);

        image(img3, CENTER, CENTER);
        text('The improvements made to your ship introduce some new tech to the world.', width/2, 200);

        image(img4, CENTER, CENTER);
        text('You find yourself content with what you’ve done, though you do wish you were able to bring more alien knowledge home.', width/2, 200);

        image(img5, CENTER, CENTER);
        text('Lucky for you, the aliens you helped come to visit earth, thankful for your previous help and curious about the land you hail from.', width/2, 200);

        image(img6, CENTER, CENTER);
        text('Earth begins a new era or advancement thanks to interaction from alien species.', width/2, 200);


I haven't finished up all the gifs yet, but I think there's only about 5~6 more unique ones I have to do? 
I'm not sure why that one gif with the stars blinks since none of the panels have the stars completely dimmed. I've tried working around it, and just redoing the stars but it doesn't seem to help :/. I hope this isn't an issue that will carry over to other gifs... though the others seem fine? I really hope it doesn't.
Perhaps the blinking issue can be fixed if i process it through different means (I'm currently making them in firealpaca and exporting them through there. Idk why it's having an issue with that one, but it's the reason for the different versions.)  
Maybe I should try piskel if it's not too big? We'll see.
*/
		
	}
}