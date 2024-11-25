import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from '../../assets/Rectangle 1.png'
import slider2 from '../../assets/Rectangle 26.png'
import slider3 from '../../assets/Rectangle 27.png'
import slider4 from '../../assets/Rectangle 28.png'

const Slider = () => {
    return (
        <div>
            <AwesomeSlider>
                <div data-src={slider1}>Cox Bazar</div>
                <div data-src={slider2}></div>
                <div data-src={slider3}></div>
                <div data-src={slider4}>4</div>
            </AwesomeSlider>
        </div>
    );
};

export default Slider;