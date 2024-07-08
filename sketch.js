let img1, img2;
let shaderProgram;
let canvasContainer;

function preload() {
  shaderProgram = loadShader('blend.vert', 'blend.frag');
}

function setup() {
  noCanvas();
  
  const fileInput1 = select('#fileInput1');
  const fileInput2 = select('#fileInput2');
  const blendButton = select('#blendButton');
  canvasContainer = select('#canvasContainer');

  fileInput1.changed(() => loadImage(URL.createObjectURL(fileInput1.elt.files[0]), img => img1 = img));
  fileInput2.changed(() => loadImage(URL.createObjectURL(fileInput2.elt.files[0]), img => img2 = img));

  blendButton.mousePressed(() => {
    if (img1 && img2) {
      const cnv = createCanvas(img1.width, img1.height, WEBGL);
      cnv.parent('canvasContainer');
      blendImages();
    }
  });
}

function blendImages() {
  // Use shader
  shader(shaderProgram);

  // Pass images as textures to the shader
  shaderProgram.setUniform('texture1', img1);
  shaderProgram.setUniform('texture2', img2);

  // Draw a rectangle that covers the entire canvas
  rect(-width / 2, -height / 2, width, height);
}
