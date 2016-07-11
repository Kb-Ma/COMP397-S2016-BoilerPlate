/// <reference path="_reference.ts"/>

/**
 * @author Tom Tsiliopoulos ttsliop@my.centennialcollege.ca
 * @studentID 300818577
 * @date July 11, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {

    // Variable Declarations
    // declare a reference to the PreLoader
    export let assets: createjs.LoadQueue;

    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");

    // create a reference to a stage container
    export let stage: createjs.Stage;

    let helloLabel: objects.Label;

    let startButton: objects.Button; // reference to our button class

    // declare variables to work with different scenes
    let currentScene: objects.Scene;
    let scene: number;

    // asset manifest for images and sounds
    let assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" }
    ];

    /**
     * This method preloads assets for the game
     * 
     * @method preload
     * @returns {void}
     */
    function preload() {
        assets = new createjs.LoadQueue(); // Instantiates the loader   
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }

    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event

        // setup the default scene
        scene = config.Scene.MENU;
    }

    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {

        // call the active scene's update
        currentScene.Update();
        
        stage.update(); // refreshes the stage
    }

    /**
     * This is the startButton click event handler
     * 
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    function changeScene(): void {
        // Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                // menu = new scenes.Menu();
                // currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                // play = new scenes.Play();
                // currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                // over = new scenes.Over();
                // currentScene = over;
                break;
        }
    }

    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++