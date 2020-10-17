var theme="trip4",
canvas = document.getElementById("oscilloscope"),
stream=document.getElementsByTagName("audio")[0],
canvasCtx = canvas.getContext("2d"),
canvas = document.getElementById("oscilloscope"),
y=0,
audioCtx = new(window.AudioContext || window.webkitAudioContext)(),
analyser = audioCtx.createAnalyser(),
bufferLength = analyser.frequencyBinCount,
dataArray = new Uint8Array(bufferLength),
gainNode1 = audioCtx.createGain(),
gainNode2 = audioCtx.createGain(),
source = audioCtx.createMediaElementSource(stream);
source.connect(analyser);
analyser.connect(audioCtx.destination)


analyser.fftSize = 2048;

analyser.getByteFrequencyData(dataArray);
canvasCtx.translate(canvas.width*0.5, canvas.height*0.5);
function draw() {

  requestAnimationFrame(draw);
  
  analyser.getByteFrequencyData(dataArray);

  //canvasCtx.clearRect(0,0,canvas.width, canvas.height)
  var sliceWidth = canvas.width * 1.0 / bufferLength;
  var x = 0;
  
  for (var i = 27; i < analyser.frequencyBinCount; i++) {
    var v = dataArray[i] / 1.28;
    //if(theme=="rainbow"){canvasCtx.fillStyle=`hsl(${i*0.3},100%, ${v}%)`}//гейская тема
    canvasCtx.rotate(0.008726646259971648);
    if(theme=="bw"){canvasCtx.fillStyle=`hsl(0,0%, ${v}%)`}//чёрно-белая
        
    if(theme=="wood"){canvasCtx.fillStyle=`hsl(33, 49%, ${v}%)`}//дерево

    if (theme=="trip1") {canvasCtx.fillStyle=`hsl(${v*3.6},100%, ${v}%)`}
    if (theme=="trip2") {canvasCtx.fillStyle=`hsl(${v*3.6},100%, ${v?50:0}%)`}
    if (theme=="trip3") {canvasCtx.fillStyle=`hsl(${v*3.6},100%, ${v}%)`}
    if (theme=="trip4") {canvasCtx.fillStyle=`hsl(${v*3.6},100%, ${v}%)`}
    canvasCtx.fillRect(x, y, sliceWidth, 400)
    
    //x += sliceWidth;
  }
  //imgBefore=canvasCtx.getImageData(0,1,canvas.width,canvas.height-1);

  //canvasCtx.putImageData(imgBefore,0,0)
}

draw();