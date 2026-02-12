import './ab.css';
import sim from '../assets/simp.png';
import acc from '../assets/access.png';
import Footer from './Footer';

function Apage() {
    return (
        <>
            <div className='about-container'>
                <div className='about-hero'>
                    <h1>About <span>Idemdrem</span></h1>
                    <p className='tagline'>Early Detection Saves Lives!</p>
                    <p>
                        Idemdrem helps in early detection, guiding users on whether to seek medical advice.
                        Our AI-powered technology enhances easy accessibility to skin health monitoring with
                        quick and reliable analysis.
                    </p>
                </div>

                <h2 className='about-section-title'>Why <span>Idemdrem</span> is worth using?</h2>

                <div className='features-grid'>
                    <div className='feature-card'>
                        <div className='feature-icon'>
                            <img src={sim} alt='Simple to use' />
                        </div>
                        <h3>Simple to Use</h3>
                        <p>
                            Place your phone near rashes on your skin or other formation and within
                            few minutes you will find out if there is cause for concern.
                        </p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>
                            <img src={acc} alt='Easily accessible' />
                        </div>
                        <h3>Easily Accessible</h3>
                        <p>
                            Idemdrem is available anytime, anywhere. Keep your health in check
                            at your fingertips even when you are on the go.
                        </p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>
                            <i className="fas fa-brain" style={{ fontSize: '28px', color: 'var(--accent-cyan)' }}></i>
                        </div>
                        <h3>AI-Powered Analysis</h3>
                        <p>
                            Deep learning models analyze your skin images and provide accurate predictions
                            with confidence scores for multiple conditions.
                        </p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-icon'>
                            <i className="fas fa-hospital" style={{ fontSize: '28px', color: 'var(--accent-cyan)' }}></i>
                        </div>
                        <h3>Hospital Finder</h3>
                        <p>
                            Get recommended nearby hospitals based on your location, complete with
                            directions and contact information.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Apage;