import { Link } from 'react-router-dom';
import skin from '../assets/skinvision.webp';
import car from '../assets/rash.png';
import Footer from './Footer';
import './Home.css';

function HomePage() {
  const diseases = {
    fungal: {
      title: 'Fungal Infections',
      items: [
        { name: 'Athlete\'s Foot', symptoms: ['Itching', 'Cracks', 'Burning', 'Peeling skin'] },
        { name: 'Nail Fungus', symptoms: ['Thickened nails', 'Discoloration', 'Brittle nails', 'Bad odor'] },
        { name: 'Ringworm', symptoms: ['Ring-shaped rash', 'Itching', 'Scaly skin', 'Inflammation'] },
      ]
    },
    bacterial: {
      title: 'Bacterial Infections',
      items: [
        { name: 'Cellulitis', symptoms: ['Fever', 'Redness', 'Swelling', 'Warm skin'] },
        { name: 'Impetigo', symptoms: ['Sores', 'Blisters', 'Itching', 'Crusting'] },
      ]
    },
    viral: {
      title: 'Viral Infections',
      items: [
        { name: 'Chickenpox', symptoms: ['Fever', 'Rashes', 'Fluid-filled blisters', 'Tiredness'] },
        { name: 'Shingles', symptoms: ['Burning pain', 'Rash', 'Blisters', 'Nerve pain'] },
      ]
    },
    parasitic: {
      title: 'Parasitic Infections',
      items: [
        { name: 'Cutaneous Larva Migrans', symptoms: ['Red lines on skin', 'Rashes', 'Itching', 'Painful swelling'] },
      ]
    }
  };

  return (
    <div className='main'>
      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1>
              Say No to<br />
              <span className='highlight'>Skin Diseases!</span>
            </h1>
            <p>
              Upload a photo of your skin condition and get AI-powered analysis with instant results,
              doctor recommendations, and personalized care instructions.
            </p>
            <Link to="/upload" className="hero-cta">
              Check Your Skin Now <i className="fas fa-arrow-right"></i>
            </Link>
            <p className='hero-disclaimer'>
              *Results are not a diagnosis. Consult your doctor for accurate diagnosis and treatment.
            </p>
          </div>
          <div className='hero-images'>
            <img src={car} alt='Skin analysis' className='hero-img-accent' />
            <img src={skin} alt='Idemdrem skin analysis' className='hero-img-main' />
          </div>
        </div>
      </section>

      {/* Disease Info Section */}
      <div className='section-header'>
        <h2>Detect & Understand in Minutes</h2>
        <p>Risk detection and assessment for 8 skin conditions powered by deep learning</p>
      </div>

      <div className='infections-container'>
        {Object.entries(diseases).map(([key, section]) => (
          <div key={key} className='infection-section'>
            <div className='infection-section-title'>
              <h3>{section.title}</h3>
              <span className='line'></span>
            </div>
            <div className='cards-grid'>
              {section.items.map((disease, idx) => (
                <div key={idx} className='disease-card'>
                  <h4>{disease.name}</h4>
                  <p className='symptoms-label'>Symptoms</p>
                  <ul>
                    {disease.symptoms.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
