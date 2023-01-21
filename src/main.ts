import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//
const app = document.getElementById("app");

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;
camera.position.y = 1;

//cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xfdbe02 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//plane
const planeGeometry = new THREE.PlaneGeometry(5, 5, 32);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0x482b4c,
  wireframe: true,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

//helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(1);
app?.appendChild(renderer.domElement);

//controls
const controls = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();

function animate() {
  const time = clock.getElapsedTime();

  // camera.position.x = Math.sin(time) * 3;
  // camera.position.z = Math.sin(time) * 10;
  // cube.rotation.z = time;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
