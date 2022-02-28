let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene(); // Create scene
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // Create camera with FOV of 75, aspect ratio of width/over height, near clipping plane of 0.1 and far clipping plane of 1000

    // Set up renderer
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Create a cube
    const tall_boxg = new THREE.BoxGeometry(1, 3, 1);
    const cubeg = new THREE.BoxGeometry(.5,.5,.5);
    const purple = new THREE.MeshBasicMaterial( { color: 0x9000ff } );
    const euph = new THREE.TextureLoader().load('./textures/euph-logo.png');
    const eupht = new THREE.MeshBasicMaterial({map:euph});

    // const texture = new THREE.TextureLoader().load('./textures/euph-logo.png');
    // const material = new THREE.MeshBasicMaterial( { map:texture } );


    tall_box = new THREE.Mesh( tall_boxg, purple );
    scene.add( tall_box );
    cube = new THREE.Mesh( cubeg, eupht );
    scene.add( cube );
    cube2 = new THREE.Mesh( cubeg, eupht );
    scene.add( cube2 );
    cube3 = new THREE.Mesh( cubeg, eupht );
    scene.add( cube3 );
    cube4 = new THREE.Mesh( cubeg, eupht );
    scene.add( cube4 );



    camera.position.z = 5; // Set the camera position

    
}

function animate() { // Draw the scene
	requestAnimationFrame( animate );

    tall_box.rotation.x += 0.01; // Spin  the cube
    tall_box.rotation.y += 0.01;

    cube.rotation.x -= 0.01; // Spin  the cube
    cube.rotation.y -= 0.01;
    cube.position.x += 0.007;

    cube2.rotation.x -= 0.01; // Spin  the cube
    cube2.rotation.y -= 0.01;
    cube2.position.x -= 0.007;

    cube3.rotation.x += 0.01; // Spin  the cube
    cube3.rotation.y -= 0.01;
    cube3.position.y -= 0.007;

    cube4.rotation.x += 0.01; // Spin  the cube
    cube4.rotation.y += 0.01;
    cube4.position.y += 0.007;



	renderer.render( scene, camera );
}

function onResize() {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function run() {
    scene = null;
    camera = null;
    renderer = null;
    cube = null;
    init()
    window.addEventListener('resize', onResize(), false);
    animate();
};

run();

