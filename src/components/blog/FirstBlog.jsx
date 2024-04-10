import React from 'react'; // You may want to create this CSS file for styling

import Image1 from '../../assets/lspp.png'; // Import the image

const FirstBlog = () => {
    return (
        <div className="blog-content container">
            <div className="blog-image">
                <img src={Image1} alt="Leapfrog Student Partnership Program" />
            </div>
            <div className="blog-text">
                <h2>Leapfrog Student Partnership Program Experience</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ante nec enim volutpat gravida.
                    In facilisis, dolor at fermentum vestibulum, nulla sapien rutrum ante, sit amet malesuada lorem urna id nisl.
                    Quisque tincidunt dui vel mi rhoncus, at malesuada eros sodales. In ultricies eros nec velit venenatis blandit.
                    Nulla vel felis nec tellus dapibus egestas. Nullam at nunc ut sem placerat hendrerit vel sed turpis.
                    Fusce convallis semper ex sit amet pharetra. Nulla facilisi.
                </p>
                <p>
                    Donec euismod fermentum diam at gravida. Nulla rhoncus felis vitae nunc rhoncus, nec convallis felis volutpat.
                    Nam non nisi eu eros pharetra vehicula vitae vel velit. Morbi volutpat lobortis nisl nec vehicula.
                    Nullam ut purus auctor, iaculis diam at, vulputate sem. Fusce sit amet eros id metus vehicula ullamcorper.
                    Vestibulum ut volutpat purus, id condimentum lorem. Morbi sit amet nunc in justo dapibus aliquam.
                </p>
            </div>
        </div>
    );
};

export default FirstBlog;
