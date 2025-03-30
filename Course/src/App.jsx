import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FaExpand, FaCompress } from 'react-icons/fa';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Sidebar from './CourseSidebar';
import CourseArea from './CourseArea';
import './index.css';
import outputVideo from './assets/output.mp4';

function App() {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <div className="header">
          <Header />
        </div>

        <div className="content-layout">
          <div className="main-area">
            {/* EXPANDED MODE */}
            {isVideoExpanded ? (
              <>
                <div className="video-preview expanded">
                  <div className="video-placeholder">
                    <video
                      className="video-element"
                      src={outputVideo}
                      controls
                    >
                      Your browser does not support the video tag.
                    </video>
                    <button
                      className="fullscreen-btn"
                      onClick={() => setIsVideoExpanded(false)}
                    >
                      <FaCompress size={20} />
                    </button>
                  </div>
                </div>

                <div className="course-and-sidebar-row">
                  <div className="course-info-content">
                    <CourseArea />
                  </div>
                  <div className="sidebar-container">
                    <Sidebar />
                  </div>
                </div>
              </>
            ) : (
              // SHRINKED MODE
              <div className="shrinked-row">
                <div className="left-column">
                  <div className="video-preview">
                    <div className="video-placeholder">
                      <video
                        className="video-element"
                        src={outputVideo}
                        controls
                      >
                        Your browser does not support the video tag.
                      </video>
                      <button
                        className="fullscreen-btn"
                        onClick={() => setIsVideoExpanded(true)}
                      >
                        <FaExpand size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="course-info-content">
                    <CourseArea />
                  </div>
                </div>
                <div className="sidebar-container">
                  <Sidebar />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
