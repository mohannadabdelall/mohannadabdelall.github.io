let controls = new THREE.OrbitControls(camera);
controls.addEventListener('change', renderer);

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
