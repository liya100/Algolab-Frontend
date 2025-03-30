import React from 'react';

const CourseScreen = () => {
  return (
    <div>
      {/* Tabs */}
      <div className="course-tabs">
        <button>Overview</button>
        <button>Q&A</button>
        <button>Notes</button>
        <button>Reviews</button>
      </div>

      {/* Course Info */}
      <div className="course-info">
        <h2>Linked Lists: Complete Course</h2>
        <div className="rating-row">
          <span>⭐ <strong>4.9</strong></span>
          <span>101,765 Students</span>
          <span>17 hours Total</span>
        </div>

        <hr />

        <div className="course-stats">
          <div><strong>By the numbers</strong></div>
          <div><strong>Skill level:</strong> All Levels</div>
          <div><strong>Captions:</strong> Yes</div>
          <div><strong>Students:</strong> 101,989</div>
          <div><strong>Lectures:</strong> 61</div>
          <div><strong>Languages:</strong> English</div>
          <div><strong>Video:</strong> 17 total hours</div>
        </div>

        <hr />

        <div className="instructors">
          <strong>Instructors</strong>
          <p>
            Murat Yıldızdağ &nbsp;•&nbsp;
            Stephen Hubbard &nbsp;•&nbsp;
            Dr. Angela Yu &nbsp;•&nbsp;
            Philipp Muellauer
          </p>
        </div>

        <hr />

        <div className="course-description">
          <strong>Description</strong>
          <p>
            Linked List Course Description<br />
            This course covers everything from Singly, Doubly, and Circular Linked Lists with real coding examples in Java, Python, and C++.
            <br /><br />
            Topics include:
          </p>
          <ul>
            <li>Singly Linked List: Insertion, deletion, and traversal</li>
            <li>Doubly Linked List: Efficient forward and backward traversal</li>
            <li>Circular Linked List: Memory optimization and pointer concepts</li>
            <li>Real-World Applications: Used in system design, databases, and memory management</li>
          </ul>
          <p>
            Full Lifetime Access. Satisfaction or Money-Back Guarantee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseScreen;
