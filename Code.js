/**
 * ToneForge LUT — Google Apps Script Web App Entry Point
 */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('ToneForge LUT - Lightroom to .CUBE Color Engine')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag(
      'viewport',
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
    );
}

/**
 * Optional helper if you ever split CSS or JS into separate HTML partials.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}