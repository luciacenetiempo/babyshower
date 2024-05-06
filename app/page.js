import Image from "next/image";
import Form from "./components/form";

export default function Home() {
  return (
    <>
    <div className="wrapper">
      <span className="iconFixed iconFixed--luna"></span>
      <span className="iconFixed iconFixed--luna iconFixed--luna--clone"></span>
      <span className="iconFixed iconFixed--nuvola"></span>
      <span className="iconFixed iconFixed--nuvola iconFixed--nuvola--clone"></span> 
      <span className="iconFixed iconFixed--stella"></span>
      <span className="iconFixed iconFixed--stella iconFixed--stella--clone"></span>
      <div className="logo celeste">
        <span>Celeste</span>		
      </div>
      <div className="hero">
        <div className="hero__col hero__col--txt">
          <h1>Ready to pop!</h1>
          <p>Pannolini, unicorni e drink! Siamo pronte per festeggiare l'arrivo di Celeste!</p>
        </div>
        <div className="hero__col hero__col--img">
          <div className="hero__ball">
          </div>

          <span className="hero__ball__img">
              <span className="icon icon--star"></span>
              <span className="icon icon--ciuccio"></span>
              <Image
                src="/unicorn-1.png"        
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Cele"
                priority={true}	
                fill
                layout='fill'
                objectFit='contain'
              />
            </span>
        </div>
      </div>
      <div className="copy">
        <div className="copy__text">
          <span className="icona">
            <Image
              src="/spillo.png"        
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Cele"
              priority={true}	
              fill
              layout='fill'
              objectFit='contain'
            />
          </span>
          <h2>Non prendere impegni.</h2>
          <p>Quando?<br/><span>22 Giugno 2024</span><br/>ore 19:00</p>
        </div>
      </div>
      <div className="hero hero--reverse">
        <div className="hero__col hero__col--txt hero__col--txt--center">
          <h2>Ci vediamo qui!</h2>
          <span className="logo-arci"><img src="/logo-arci.png" /></span>
          <p><strong>Via G.Bellezza 16/A – Milano</strong><br/>La tessera Arci è obbligatoria, rubala a qualche amico oppure <a href="https://www.arcibellezza.it/tesseramento/" target="_blank">falla qui</a></p>
        </div>
        <div className="hero__col hero__col--img hero__col--left">
          <div className="hero__ball hero__ball--orange">
          </div>

          <span className="hero__ball__img hero__ball__img--orange">
              <span className="icon icon--biberon"></span>
              <Image
                src="/unicorn-2.png"        
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Cele"
                priority={true}	
                fill
                layout='fill'
                objectFit='contain'
              />
            </span>
        </div>
      </div>
      <div className="copy"> 
        <div className="copy__text">
          <span className="icona">
            <Image
              src="/spillo.png"        
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Cele"
              priority={true}	
              fill
              layout='fill'
              objectFit='contain'
            />
          </span>
          <h2>Ci sarai? Cele non vede l'ora!</h2>
          <p><span className="medium">Conferma la tua partecipazione.</span></p>
          <div className="copy__text__cta">
            <form>
              <input type="text" placeholder="Nome e cognome" />
              <button>Ci sarò!</button>
            </form>
          </div>
        </div>
      </div>

      <div className="hero hero--close">
        <div className="hero__col hero__col--txt hero__col--txt--center">
          <h2>Ready to poop!</h2>
          <p>Tutto quello che vogliamo è la tua presenza! Ma se la tua domanda è <strong>"Cosa vi serve?"</strong> qui trovi una lista di cose utili non futili... forse!</p>
          <a className="amazon" target="_blank" href="https://www.amazon.it/baby-reg/cristina-dicillo-agosto-2024-milano/2BIVN6750TILS?ref_=cm_sw_r_apin_dp_AR0GF729TK2ZBXQSBS10&language=it_IT">
            <img src="/logo-amazon-b.png" />
          </a>      
        </div>
        <div className="hero__col hero__col--img">
          <div className="hero__ball">
          </div>

          <span className="hero__ball__img">
              <Image
                src="/pannolone-2.png"        
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Cele"
                priority={true}	
                fill
                layout='fill'
                objectFit='contain'
              />
            </span>
        </div>
      </div>
    </div>
    <div className="footer">
    </div>
    </>
  );
}
