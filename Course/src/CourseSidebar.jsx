import React from 'react';

const lessons = [
  { title: 'Introduction to Linked Lists', duration: '8 min' },
  { title: 'Singly Linked List – Concept & Implementation', duration: '15 min' },
  { title: 'Doubly Linked List – Concept & Implementation', duration: '23 min' },
  { title: 'Circular Linked List – Concept & Implementation', duration: '25 min' },
  { title: 'Insert Node at Beginning of Linked List', duration: '15 min' },
  { title: 'Insert Node at End of Linked List', duration: '15 min' },
  { title: 'Insert Node at Specific Position in Linked List', duration: '5 min' },
  { title: 'Delete Node from Linked List', duration: '5 min' },
  { title: 'Reverse a Linked List', duration: '42 min' },
  { title: 'Remove Duplicates from a Linked List', duration: '42 min' },
  { title: 'Sort a Linked List', duration: '56 min' },
];

const Sidebar = () => {
  return (
    <div className="custom-sidebar">
      <h3 className="sidebar-title">Content</h3>
      <ul className="lesson-list">
        {lessons.map((lesson, index) => (
          <li key={index} className="lesson-item">
            <div className="lesson-header">
            <span className="check-box">✔</span>
            <span className="lesson-number">{index + 1}.</span>
              <div className="lesson-info">
                <p className="lesson-title">{lesson.title}</p>
                <span className="lesson-duration">{lesson.duration}</span>
              </div>
            </div>
            <div className="resource-container">
                <button className="resource-btn">📁 Resources</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
