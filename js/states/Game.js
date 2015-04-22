PlatformGame.Game= function(){

}

PlatformGame.Game.prototype = {
	create: function(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

	    //  A simple background for our game
	    this.game.add.tileSprite(0, 0, this.game.width, 600, 'sky');

	    //  The platforms group contains the ground and the 2 ledges we can jump on
	    this.platforms = game.add.group();

	    //  We will enable physics for any object that is created in this group
        this.platforms.enableBody = true;

		var ground = this.platforms.create(0, game.world.height - 128, 'platform');
		var valorx = (game.world.width - 400)/400;
		var valory = (game.world.height - (game.world.height - 128))/32;

		ground.scale.setTo(Math.round(valorx), Math.round(valory));

		ground.body.immovable = true;

		var ledges = this.platforms.create(400, 400, 'platform');

		ledges.body.immovable = true;

		ledges = this.platforms.create(-150, 250, 'platform');

		ledges.body.immovable = true;

		this.player = this.game.add.sprite(32, game.world.height - 180, 'dude');
			
		this.game.physics.arcade.enable(player);

		this.player.body.bounce.y = 0.2;
		this.player.body.gravity.y = 300;
		this.player.body.collideWorldBounds = true;

		this.player.animations.add('left', [0,1,2,3], 10, true);
		this.player.animations.add('right', [5,6,7,8], 10, true);
		
	},

	update: function(){
		this.game.physics.arcade.collide(player, platforms);

		//reset velocity
		player.body.velocity.x = 0;

	    if (cursors.left.isDown)
	    {
	        //  Move to the left
	        player.body.velocity.x = -150;

	        player.animations.play('left');
	    }
	    else if (cursors.right.isDown)
	    {
	        //  Move to the right
	        player.body.velocity.x = 150;

	        player.animations.play('right');
	    }
	    else
	    {
	        //  Stand still
	        player.animations.stop();

	        player.frame = 4;
	    }

	    //  Allow the player to jump if they are touching the ground.
	    if (cursors.up.isDown && player.body.touching.down)
	    {
	        player.body.velocity.y = -350;
	    }
	    
	}
};