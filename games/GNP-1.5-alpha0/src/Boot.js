/**
 * GNP
 * Copyright (C) 2014 DeathsbreedGames
 * License: GNU Affero GPLv3
 * 
 */
var DeathsbreedGames = DeathsbreedGames || {};

DeathsbreedGames.Boot = function() {};

DeathsbreedGames.Boot.prototype = {
	preload:function() {
		// Load the most basic assets (needed for the loading screen.
		this.load.image('DGL', 'assets/gfx/DeathsbreedGames_Production.png');
		this.load.image('LoadingBar', 'assets/gfx/LoadingBar.png');
	},

	create:function() {
		// Create the essentials and move on to the preloader
		this.game.stage.backgroundColor = '#000';

		this.scale.pageAlignHorizontally = true;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.state.start('Preload');
	}
};
