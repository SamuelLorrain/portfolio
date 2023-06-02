export const lerp = (x, y, a) => x * (1 - a) + y * a;

export const fixResize = (camera, renderer) => {
  // TODO to change
  const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onWindowResize, false)
}
