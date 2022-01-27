class neutralend extends Scene {
//these scenes will either be pictures or short gifs that go over what happened after you got home with sentences describing the affects of your actions.  
	setup() {
		this.hitEnter = false;
        let img1 = loadImage('images/marsii/endings/astship_ending.gif');
        let img2 = loadImage('images/marsii/endings/ceremony_ending.gif');
        let img3 = loadImage('images/marsii/endings/ .gif');
        let img4 = loadImage('images/marsii/endings/ .gif');
        let img5 = loadImage('images/marsii/endings/rooftop_ending.gif');

        
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
		text('You got off the planet. You mostly didn’t screw anyone over.', width/2, 200);

        image(img2, CENTER, CENTER);
        text('When you get back, you’re praised for your struggles to get back to earth, some praise you for kindness and others condemn you for your misdeeds.', width/2, 200);

        image(img3, CENTER, CENTER);
        text('The improvements made to your ship and the odd energy found flowing within your battery introduce new tech to the world.', width/2, 200);

        image(img4, CENTER, CENTER);
        text('The stolen chronicle you got allowed for people to learn about new life and types of other alien species.', width/2, 200);

        image(img5, CENTER, CENTER);
        text('You’re allowed to retire to a peaceful and compensated life. Part of you wonders if you should have done things differently.', width/2, 200);


*/
		
	}
}