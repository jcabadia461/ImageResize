const functions = require('firebase-functions');
const {getImageBuffer, getResizedImage} = require('./utils');

exports.resizeImage = functions
    .runWith({memory: '1GB', timeoutSeconds: 60})
    .https.onRequest(async (req, res) => {
      const {image, width} = req.body;
      if (!image) {
        res.status(400).send('Without image in the body');
        return;
      }
      if (isNaN(width)) {
        res.status(400).send('No valid value for image width');
        return;
      }
      try {
        // eslint-disable-next-line max-len
        const resizedImageBuffer = await getResizedImage(getImageBuffer(image), width);
        res.set('Content-Type', 'application/json');
        res.status(200).send({image: resizedImageBuffer, width});
      } catch (error) {
        res.status(500).send('Error when resizing the image');
      }
    });
