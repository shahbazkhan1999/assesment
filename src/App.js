import "./App.scss";
import SelectImportName from "./components/SelectImportName";
import UploadFile from "./components/UploadFile/UploadFile";
import UploadFileProgress from "./components/UploadFile/UploadFileProgress";
import ElapsedDataChecking from "./components/ElapsedDataChecking";
import TolerenceWindow from "./components/TolerenceWindow";
import SplitSchedule from "./components/SplitSchedule";
import LocationChecking from "./components/LocationChecking";
import Client from "./components/Client";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <section className="mainForm">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>Document Upload</h2>
          </div>
          <div className="formMain">
            <div className="formPortion-1">
              <form>
                <SelectImportName />
                <UploadFile />
                <UploadFileProgress />
                <ElapsedDataChecking />
                <TolerenceWindow />
              </form>
            </div>
            <div className="formPortion-2">
              <form>
                <SplitSchedule />
                <LocationChecking />
                <Client />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
