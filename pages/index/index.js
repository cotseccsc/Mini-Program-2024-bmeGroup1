// pages/index/index.js
Page({
  data: {},

  onLoad: function () {
    this.drawCanvas();
  },

  drawCanvas: function () {
    const context = wx.createCanvasContext('sosCanvas');
    // Draw SOS icon and button using canvas
    context.setFillStyle('#94c4e3');
    context.fillRect(0, 0, 300, 300);

    context.drawImage('/images/index/sos.png', 50, 50, 200, 200);
    context.setFontSize(20);
    context.setFillStyle('#000000');
    context.fillText('一键呼救', 110, 30);

    context.draw();
  }
})
