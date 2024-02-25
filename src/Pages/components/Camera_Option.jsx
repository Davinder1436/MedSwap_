import React, { useState, useRef } from 'react';
import { Button, Flex, Heading, Spacer, Box } from '@chakra-ui/react';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photoData, setPhotoData] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    videoRef.current.srcObject = null;
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL('image/png');
    setPhotoData(dataURL);
    stopCamera()
  };




  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!photoData) {
      alert('Please capture a photo or select from local storage');
      return;
    }

    // Create form data and append the captured photo
    const formData = new FormData();

    if (typeof photoData === 'string') {
      // If photoData is a base64 string (captured photo)
      formData.append('photo', photoData);
    } else {
      // If photoData is a file (uploaded from local storage)
      formData.append('photo', photoData);
    }
    console.log(photoData)

    try {
      const response = await fetch('http://localhost:3000/api/upload/camera', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error during image upload:', error);
    }
  };

  return (
    <div>
      <Flex direction="column" align-items="center" justify-content="center" h="auto" w="100vw">
        <Box>
          <Heading as="h1" mx="auto" size="lg">
            Camera options
          </Heading>
        </Box>

        <Box>
          <Button onClick={startCamera}>Start Camera</Button>
          <Button onClick={stopCamera}>Stop Camera</Button>
          <Button onClick={capturePhoto}>Capture Photo</Button>
        </Box>

        {photoData && (
          <div>
            <img src={photoData} alt="Captured" />
            <Button type="button" onClick={handleFormSubmit}>
              Submit Photo
            </Button>
          </div>
        )}

        <video ref={videoRef} autoPlay />
        <canvas ref={canvasRef} style={{ display: 'none' }} />

        
      </Flex>
    </div>
  );
};

export default CameraComponent;

