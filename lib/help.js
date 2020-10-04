function checkAPICapabilities(capabilities) {
  if (!capabilities.every((c) => c in window)) {
    alert('File System Access not supported');
    return;
  }
}

function drawImage(canvas, src) {
  const image = new Image();

  image.onload = () => {
    const scale = window.devicePixelRatio;
    const ctx = canvas.getContext('2d');

    canvas.width = image.width;
    canvas.height = image.height;

    canvas.style.width = image.width / scale + 'px';
    canvas.style.height = image.height / scale + 'px';

    ctx.scale(scale, scale);

    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      canvas.width / scale,
      canvas.height / scale
    );
  };

  image.src = src;

  return image;
}
