let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene(); // Create scene
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // Create camera with FOV of 75, aspect ratio of width/over height, near clipping plane of 0.1 and far clipping plane of 1000

    // Set up renderer
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 3, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x9000ff } );

    // const texture = new THREE.TextureLoader().load('./textures/euph-logo.png');
    // const material = new THREE.MeshBasicMaterial( { map:texture } );


    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5; // Set the camera position
}

function animate() { // Draw the scene
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01; // Spin  the cube
    cube.rotation.y += 0.01;


	renderer.render( scene, camera );
}

function onResize() {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Run
init()
window.addEventListener('resize', onResize(), false);
animate();
