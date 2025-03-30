import Header from './Header.jsx';
import CardList from './CardList.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import DropdownButton from './DropdownButton.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      {/* Filter Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
          gap: '1rem',
        }}
      >
        {/* Left Filters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Sort by */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                marginBottom: '0.2rem',
                color: '#757575',
                fontWeight: 'normal',
                fontFamily: 'Arial',
              }}
            >
              Sort by
            </span>
            <DropdownButton
              label="Recently Accessed"
              options={[
                'Recently Accessed',
                'Recently Enrolled',
                'Title: A-to-Z',
                'Title: Z-to-A',
              ]}
            />
          </div>

          {/* Filter by */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                marginBottom: '0.2rem',
                color: '#757575',
                fontWeight: 'normal',
                fontFamily: 'Arial',
              }}
            >
              Filter by
            </span>
            <DropdownButton
              label="Categories"
              options={[
                'Favorites',
                'All Categories',
                'Development',
                'Teaching and Academics',
                'Archived',
              ]}
            />
          </div>

          {/* Additional Filters */}
          <DropdownButton
            label="Progress"
            options={['In Progress', 'Not Started']}
          />
          <DropdownButton
            label="Instructor"
            options={[
              'AbcEdu Online',
              'Colt Stele',
              'Nathan Farrer',
              'Gary Pettie',
            ]}
          />
        </div>

        {/* Search Dropdown */}
        <div>
          <DropdownButton
            label="Search my courses"
            options={[
              'Linked List',
              'Intro to Algolab',
              'Python DSA',
              'Array',
            ]}
          />
        </div>
      </div>

      {/* Course Cards */}
      <div>
        <CardList />
      </div>
    </BrowserRouter>
  );
}

export default App;
