import React, { useState } from 'react';


const App = () => {
 
const [file,setFile] = useState(null);


  const handleUpload = async () => {
    if (!file) {
      console.error("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    console.log(formData);
    try {
      const response = await fetch('http://localhost:3000/api/upload/file', {
        method: 'POST',
        body: formData,
      });
      
      
        const responseData = await response.json();
        console.log(responseData)
        
    } catch (error) {
      console.error('Error during image upload:', error);
    }
  
};

  return (
    <div className ="container">
      
    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
  <button type ='button' onClick={handleUpload }>submit</button>
    
    </div>
  );
};

export default App;