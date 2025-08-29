import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;
  
  // 40 Plumbing Projects - 20 ongoing, 20 completed
  const projects = [
    // Ongoing Projects (20)
    { id: 1, title: 'Commercial Office Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Residential Complex Installation', category: 'ongoing', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Shopping Center Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'Hotel Renovation Project', category: 'ongoing', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 5, title: 'Industrial Pipe System', category: 'ongoing', image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 6, title: 'Apartment Building Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 7, title: 'School Water System', category: 'ongoing', image: 'https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 8, title: 'Hospital Plumbing Upgrade', category: 'ongoing', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 9, title: 'Restaurant Kitchen Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 10, title: 'Warehouse Drainage System', category: 'ongoing', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 11, title: 'University Campus Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 12, title: 'Sports Complex Installation', category: 'ongoing', image: 'https://images.unsplash.com/photo-1460661419203-fd19e4c5cce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 13, title: 'Mall Water System', category: 'ongoing', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 14, title: 'Theater Plumbing Upgrade', category: 'ongoing', image: 'https://images.unsplash.com/photo-1542300054-42b75d0a0af9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 15, title: 'Library Water System', category: 'ongoing', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 16, title: 'Museum Plumbing Project', category: 'ongoing', image: 'https://images.unsplash.com/photo-1589656384667-54a6f4c7a4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 17, title: 'Convention Center Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 18, title: 'Office Tower Installation', category: 'ongoing', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 19, title: 'Retail Store Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 20, title: 'Car Dealership Plumbing', category: 'ongoing', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },

    // Completed Projects (20)
    { id: 21, title: 'Modern Kitchen Installation', category: 'completed', image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 22, title: 'Bathroom Renovation', category: 'completed', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 23, title: 'Pipe System Installation', category: 'completed', image: 'https://images.unsplash.com/photo-1633873355538-52d02d3d68dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 24, title: 'Water Heater Repair', category: 'completed', image: 'https://images.unsplash.com/photo-1600585154520-6f4a83b0eb0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 25, title: 'Drainage System', category: 'completed', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 26, title: 'Luxury Villa Plumbing', category: 'completed', image: 'https://images.unsplash.com/photo-1572364769167-198dcb7b520c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 27, title: 'Restaurant Plumbing', category: 'completed', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 28, title: 'Hotel Bathroom Upgrade', category: 'completed', image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 29, title: 'Office Building Plumbing', category: 'completed', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 30, title: 'Garden Irrigation System', category: 'completed', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 31, title: 'Swimming Pool Plumbing', category: 'completed', image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 32, title: 'Basement Waterproofing', category: 'completed', image: 'https://images.unsplash.com/photo-1589656384667-54a6f4c7a4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 33, title: 'Laundry Room Installation', category: 'completed', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 34, title: 'Bar Plumbing System', category: 'completed', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 35, title: 'Spa Plumbing Installation', category: 'completed', image: 'https://images.unsplash.com/photo-1560241804-02b7b1d9edb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 36, title: 'Gym Shower Installation', category: 'completed', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 37, title: 'Cafe Plumbing System', category: 'completed', image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 38, title: 'Bakery Water System', category: 'completed', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 39, title: 'Butchery Plumbing', category: 'completed', image: 'https://images.unsplash.com/photo-1570235230742-6c3dcc5c4ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 40, title: 'Photography Studio Plumbing', category: 'completed', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>Our Projects Gallery</h2>
        <p className="gallery-subtitle">Showing {filteredProjects.length} projects across all categories</p>
        
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => { setActiveFilter('all'); setCurrentPage(1); }}
          >
            All Projects ({projects.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ongoing' ? 'active' : ''}`}
            onClick={() => { setActiveFilter('ongoing'); setCurrentPage(1); }}
          >
            Ongoing ({projects.filter(p => p.category === 'ongoing').length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
            onClick={() => { setActiveFilter('completed'); setCurrentPage(1); }}
          >
            Completed ({projects.filter(p => p.category === 'completed').length})
          </button>
        </div>

        <div className="gallery-grid">
          {currentProjects.map(project => (
            <div key={project.id} className="gallery-item">
              <img src={project.image} alt={project.title} />
              <div className="gallery-item-info">
                <h3>{project.title}</h3>
                <p className={`project-status ${project.category}`}>
                  {project.category === 'ongoing' ? '🟡 Ongoing Project' : '✅ Completed Project'}
                </p>
                <p className="project-id">Project #{project.id}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {filteredProjects.length > projectsPerPage && (
          <div className="pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ← Previous
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                >
                  {number}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next →
            </button>
          </div>
        )}

        <div className="gallery-stats">
          <p>Showing projects {indexOfFirstProject + 1} to {Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length}</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;