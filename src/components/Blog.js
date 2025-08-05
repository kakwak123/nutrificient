import React, { useState } from 'react';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Blog articles data
  const articles = [
    {
      id: 1,
      title: "Nutrition Myths Debunked for Students",
      excerpt: "Separating fact from fiction in student nutrition. Learn which popular nutrition beliefs are actually myths and what science really says about eating for academic success.",
      content: "As a student, you've probably heard countless nutrition advice from friends, social media, and even well-meaning family members. But how much of it is actually backed by science? In this article, we'll debunk the most common nutrition myths that students encounter and provide evidence-based alternatives that will actually help you perform better academically and feel more energized throughout your day.",
      author: "Giryeong Park",
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["nutrition", "students", "myths"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Healthy Korean Meals You Can Make in 15 Min",
      excerpt: "Quick, nutritious Korean-inspired meals perfect for busy students and professionals. These recipes combine traditional flavors with modern convenience.",
      content: "Korean cuisine is known for its balance of flavors and nutritional benefits, but many people think it's too time-consuming to prepare. Not true! Here are some delicious Korean-inspired meals you can whip up in 15 minutes or less, perfect for those busy days when you need something healthy and satisfying without spending hours in the kitchen.",
      author: "Giryeong Park",
      date: "March 12, 2024",
      readTime: "8 min read",
      tags: ["recipes", "korean", "quick-meals"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "The Link Between Energy, Focus & What You Eat",
      excerpt: "Discover how your food choices directly impact your energy levels and cognitive performance. Learn which foods boost focus and which ones might be holding you back.",
      content: "Ever notice how some meals leave you feeling energized and focused, while others make you want to take a nap? There's a scientific reason for this. The foods you eat have a direct impact on your brain function, energy levels, and ability to concentrate. In this article, we'll explore the fascinating connection between nutrition and cognitive performance.",
      author: "Giryeong Park",
      date: "March 10, 2024",
      readTime: "6 min read",
      tags: ["energy", "focus", "cognitive-health"],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Budget-Friendly Nutrition for University Students",
      excerpt: "Eating healthy on a student budget is possible! Learn smart shopping strategies and affordable meal ideas that won't break the bank.",
      content: "Being a university student often means living on a tight budget, but that doesn't mean you have to sacrifice good nutrition. With some smart planning and strategic shopping, you can eat healthily without spending a fortune. Here are practical tips and affordable meal ideas that will keep you nourished throughout your studies.",
      author: "Giryeong Park",
      date: "March 8, 2024",
      readTime: "7 min read",
      tags: ["budget", "students", "meal-planning"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "How to Build a Healthy Relationship with Food",
      excerpt: "Move beyond diet culture and develop a sustainable, positive relationship with food that supports your long-term health and wellbeing.",
      content: "In a world obsessed with diets and quick fixes, developing a healthy relationship with food can feel like an uphill battle. But it's possible, and it's essential for long-term health and wellbeing. This article explores how to move beyond restrictive eating patterns and build a sustainable, positive relationship with food that nourishes both your body and mind.",
      author: "Giriyeong Park",
      date: "March 5, 2024",
      readTime: "9 min read",
      tags: ["mindful-eating", "wellness", "mental-health"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Nutrition Tips for Young Professionals",
      excerpt: "Balancing work demands with healthy eating. Practical strategies for maintaining good nutrition while building your career.",
      content: "As a young professional, you're juggling work responsibilities, social commitments, and personal development. Nutrition often takes a backseat, but it's crucial for maintaining energy, focus, and overall wellbeing. Here are practical strategies to help you maintain good nutrition habits while building your career and managing a busy lifestyle.",
      author: "Giriyeong Park",
      date: "March 3, 2024",
      readTime: "6 min read",
      tags: ["professionals", "work-life-balance", "energy"],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop"
    }
  ];

  // Available tags
  const tags = [
    { id: 'all', name: 'All Articles' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'students', name: 'Students' },
    { id: 'recipes', name: 'Recipes' },
    { id: 'energy', name: 'Energy & Focus' },
    { id: 'budget', name: 'Budget-Friendly' },
    { id: 'professionals', name: 'Young Professionals' },
    { id: 'wellness', name: 'Wellness' }
  ];

  // Filter articles based on selected tag
  const filteredArticles = selectedTag === 'all' 
    ? articles 
    : articles.filter(article => article.tags.includes(selectedTag));

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const handleTagClick = (tagId) => {
    setSelectedTag(tagId);
    setCurrentPage(1); // Reset to first page when changing tags
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Nutrition Blog</h1>
        <p>Evidence-based nutrition insights for students and young professionals</p>
      </section>

      {/* Tag Filter */}
      <section className="section" style={{ padding: '2rem' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          justifyContent: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {tags.map(tag => (
            <button
              key={tag.id}
              onClick={() => handleTagClick(tag.id)}
              style={{
                padding: '0.5rem 1rem',
                border: selectedTag === tag.id ? '2px solid #4CAF50' : '2px solid #e1e5e9',
                borderRadius: '25px',
                background: selectedTag === tag.id ? '#4CAF50' : 'white',
                color: selectedTag === tag.id ? 'white' : '#333',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="cards-container">
          {currentArticles.map(article => (
            <article key={article.id} className="card" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              height: '100%'
            }}>
              <img 
                src={article.image} 
                alt={article.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}
              />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem', 
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {article.tags.map(tag => (
                      <span key={tag} style={{
                        background: '#f0f0f0',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        color: '#666'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    marginBottom: '0.5rem',
                    color: '#333',
                    lineHeight: '1.4'
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {article.excerpt}
                  </p>
                </div>
                
                <div style={{ 
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  borderTop: '1px solid #f0f0f0'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    color: '#888',
                    marginBottom: '1rem'
                  }}>
                    <span>By {article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>
                      {article.date}
                    </span>
                    <button style={{
                      background: 'transparent',
                      border: '2px solid #4CAF50',
                      color: '#4CAF50',
                      padding: '0.5rem 1rem',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease'
                    }}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="section" style={{ textAlign: 'center' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #e1e5e9',
                background: 'white',
                borderRadius: '5px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.5 : 1
              }}
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #e1e5e9',
                  background: currentPage === page ? '#4CAF50' : 'white',
                  color: currentPage === page ? 'white' : '#333',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #e1e5e9',
                background: 'white',
                borderRadius: '5px',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.5 : 1
              }}
            >
              Next
            </button>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="section" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2>Stay Updated with Nutrition Insights</h2>
        <p style={{ marginBottom: '2rem' }}>
          Get the latest nutrition tips, recipes, and wellness insights delivered to your inbox.
        </p>
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input 
            type="email" 
            placeholder="Enter your email address"
            style={{
              padding: '1rem',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '1rem',
              minWidth: '300px'
            }}
          />
          <button className="cta-button" style={{ margin: 0 }}>
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog; 