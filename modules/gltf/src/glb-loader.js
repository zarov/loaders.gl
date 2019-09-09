// Binary container format for glTF

import parseGLBSync from './lib/parse-glb';

export default {
  name: 'GLB',
  extension: ['glb'],
  text: true,
  binary: true,
  parseSync,
  defaultOptions: {
    strict: false // Enables deprecated XVIZ support (illegal CHUNK formats)
  }
};

function parseSync(arrayBuffer, options) {
  const {byteOffset = 0} = options;
  const glb = {};
  parseGLBSync(glb, arrayBuffer, byteOffset, options);
  return glb;
}
