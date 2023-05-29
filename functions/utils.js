const sharp = require('sharp');

exports.getImageBuffer = (image) => {
  try {
    const imageBuffer = Buffer.from(image, 'base64');
    return imageBuffer;
  } catch (error) {
    throw new Error('not a valid image');
  }
};

exports.getResizedImage = async (imageBuffer, width) => {
  try {
    // eslint-disable-next-line max-len
    const resizedImageBuffer = await sharp(imageBuffer).resize({width}).toBuffer();
    return resizedImageBuffer;
  } catch (error) {
    throw new Error('failed to resize the image');
  }
};


