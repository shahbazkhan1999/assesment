import BreakContainer2 from '../UIComponents/BreakContainer2'
import '../../App.scss'

export default function UploadFileProgress(){
    return(
        <>
              <div className="displayUpload-file">
                <div className="uploadFileIcon_div">
                  <span className="upload-icon"><i className="fas fa-file" style={{color: 'orange'}}></i></span>
                </div>
              
                <div className="progressBar_div">
                  <span className="file-info"><p>WN-DAL-0726-NH20166.csv</p><p>5.7MB</p></span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '3%', backgroundColor: 'orange', ariaValuenow:"0", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                  </div>
                </div>
              </div>
              <BreakContainer2/>
        </>
    )
}