const scene = new THREE.Scene(); // Create scene
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // Create camera with FOV of 75, aspect ratio of width/over height, near clipping plane of 0.1 and far clipping plane of 1000

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create a cube
const geometry = new THREE.BoxGeometry(1, 3, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x9000ff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5; // Set the camera position

function animate() { // Draw the scene
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01; // Spin  the cube
    cube.rotation.y += 0.01;


	renderer.render( scene, camera );
}
animate();