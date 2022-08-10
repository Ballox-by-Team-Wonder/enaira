import { useRef, useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


export function Verification() {
    const [isCameraOpen, setIsCameraOpen] = useState(false)

    const inputRef = useRef()

    const handleTakePhoto = (dataUri) => {
        // Do stuff with the photo...
        console.log('photo taken');
        setIsCameraOpen(false)
    }

    const handleUploadVideo = () => {
        inputRef.current.click()
    }

    const handleOpenCamera = () => setIsCameraOpen(true)


  return (
    <>
      <h3>Proof of life</h3>
      <p>You can either upload a video not more than 5 seconds or take a snapshot of yourself.
        You must hold up a piece of paper to your chest which states your name, date of birth,
        iSwear code, state of origin, current date and time.
        A sample of the format is shown below.
      </p>

      { isCameraOpen ? (
            <Camera
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            />
        ) : (
            <img
                src="/assets/images/proof-of-life.jpg"
                alt=""
                style={{
                    maxWidth: '500px',
                    margin: '10px auto 30px auto'
                }}
            />
        )}
      

      <input type="file" style={{ display: 'none' }} ref={inputRef} />

        
        <div className="mb-4">
            <button className="btn btn-primary" type="button" onClick={handleUploadVideo}>
                upload video
            </button>&nbsp;&nbsp;

            <button className="btn btn-primary" type="button" onClick={handleOpenCamera}>
                take photo
            </button>
        </div>

      

      <div className="mb-3 col-12 col-md-12">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" checked />I verify
          that ever information provided is valid and accurate and I am liable
          to legal actions if found otherwise.
        </div>
      </div>

        
    </>
  );
}
