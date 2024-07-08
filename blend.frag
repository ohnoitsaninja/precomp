#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D texture1;
uniform sampler2D texture2;
varying vec2 vTexCoord;

void main() {
  vec4 color1 = texture2D(texture1, vTexCoord);
  vec4 color2 = texture2D(texture2, vTexCoord);
  gl_FragColor = (color1 + color2) / 2.0;
}
