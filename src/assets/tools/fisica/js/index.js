// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var circA = Bodies.circle(250, 250, 50);
var circB = Bodies.circle(150, 50, 30);
var t = Matter.Body.create({
    position: { x: 200, y: 400 },
    vertices: [{ x: 0, y: 0 }, { x: 200, y: 0 }, { x: 0, y: 200 }],
    isStatic: true
});
var ground = Bodies.rectangle(400, 610, 810, 160, { isStatic: true });

Matter.Body.rotate(t, -25);

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, circA, circB, t, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);