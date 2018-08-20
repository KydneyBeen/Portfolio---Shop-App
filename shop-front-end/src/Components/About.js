import React, { Component } from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";

class About extends Component {
    render () {
        return (
            <div className = "container">
            <Header />
            <br/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin auctor orci et imperdiet. Etiam vel sapien in ipsum aliquam euismod. Nam ultricies, libero sed dapibus finibus, dolor urna malesuada ex, vitae placerat magna ante et augue. Mauris sed eleifend sapien, in interdum sapien. Mauris consectetur mauris risus, vehicula luctus nisl fermentum et. Integer libero enim, fringilla quis malesuada quis, aliquam vitae felis. Integer nec eleifend neque.
            </p>
            <p>
                Nulla pharetra dolor quis augue aliquam, id varius augue placerat. Aliquam congue aliquam vulputate. Aenean pharetra efficitur libero. Suspendisse porta ligula nec odio vehicula, id accumsan lacus finibus. In lobortis scelerisque enim ut fermentum. Nulla luctus, sem et congue eleifend, nisi lectus viverra ipsum, pharetra convallis tortor dolor lobortis odio. Morbi interdum aliquet feugiat. In ultrices aliquam tellus, eu sagittis dui. Cras accumsan nulla nibh, a iaculis massa blandit sed. Curabitur sit amet risus ligula. Vivamus ut mauris nec urna consequat gravida. Fusce egestas mauris nec vestibulum posuere. Vivamus vestibulum dui vitae felis tincidunt, eget scelerisque urna semper.
            </p>
            <Footer />
            </div>
        )
    }
}

export default About;