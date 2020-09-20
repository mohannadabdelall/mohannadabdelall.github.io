let loader = new THREE.GLTFLoader();
loader.load('scene.gltf', function(gltf){
  car = gltf.scene.children[0];
  car.scale.set(0.5,0.5,0.5);
  scene.add(gltf.scene);
  animate();
});
