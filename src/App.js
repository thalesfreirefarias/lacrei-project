import React from 'react';
import './App.css';
import Banner from './componentes/Banner/Index';
import Footer from './componentes/footer';

function App() {
  return (
    <div className='App'>
      <Banner />

      <div className='section-container'>
        <section className='section-1'>
          <section className='custom-section'>
            <p className='custom-section1'>Junte-se à nossa comunidade</p>
            <p className='custom-section2'>Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde</p>
          </section>
          <section>
            <a href="https://www.linkedin.com/company/lacrei-saude/" target="_blank" rel="noopener noreferrer">
              <button className="button1">Buscar atendimento</button>
            </a>
            <a href="https://www.linkedin.com/company/lacrei-saude/" target="_blank" rel="noopener noreferrer">
            <button className='button2'>Oferecer atendimento</button>
            </a>
          </section>
        </section>

        <section className='section-2'>
          <img className='main_image' src='img/imagem.jpg' alt="" />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
