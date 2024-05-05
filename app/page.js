import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="wrapper">
      <div className="logo celeste">
        <span>Celeste</span>		
      </div>
      <div className="hero">
        <div className="hero__col hero__col--txt">
          <h1>Ready to pop!</h1>
          <p>Velit voluptate cillum tempor aute ex ut enim laboris exercitation qui tempor.</p>
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
      {/* <div className="maps">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.0468113219304!2d9.195179999999999!3d45.4487128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c41a11d2dafd%3A0x524fe7539c28512a!2sCircolo%20Arci%20Bellezza!5e0!3m2!1sit!2sit!4v1714913280472!5m2!1sit!2sit" 
        width="600" 
        height="450" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div> */}
    </div>
    <div className="footer">
    </div>
    </>
  );
}
