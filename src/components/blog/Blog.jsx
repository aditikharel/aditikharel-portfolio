import React from 'react';
import './Blog.css'; // Import the FirstBlog component
import Image1 from '../../assets/lspp.png';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Blogs</h2>

            <div className="blog__container grid">
                    <div className="blog__card">
                        <div className="blog__thumb">
                            <span className="blog__category">Fellowship/Leadership</span>
                            <img src={Image1} alt="" className='blog__img' />
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">Leapfrog Student Partnership Program Experience</h3>
                            <div className="blog__meta">
                                <span>10 April, 2024</span>
                                <span className="blog__dot">.</span>
                                <span>Aditi Kharel</span>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Blog;
