# ImageResize
firebase function for resize image

This function is published at https://us-central1-tuto-1115e.cloudfunctions.net/resizeImage


### This function receives 2 parameters in the body of the POST request.
* image, in base64 format 
* width, width to resize the image

### The function returns the resized image in base64 format and the received width.