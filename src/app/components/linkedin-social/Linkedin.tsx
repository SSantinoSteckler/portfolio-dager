import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';

const Linkedin = () => {
  return (
    <section className='bg-gray-200 z-[100] h-[500px] overflow-y-scroll p-4 flex flex-col gap-3 '>
      <div className='flex flex-col justify-between'>
        <div className='bg-orange-400 rounded-t-xl h-[130px] bg-dagerLinkedin bg-cover'>
          <img
            src='/dagerlinkedin.jpg'
            className='w-[110px] h-[110px]  bg-orange-500 border-2 border-black rounded-full relative bottom-[-50px] left-[20px] '
          />
        </div>
        <div className='bg-white h-full p-4 rounded-b-xl'>
          <div className='flex  flex-row justify-between '>
            <div className='mt-14'>
              <h3>Dot Dager</h3>
              <p className='text-[10px] max-w-[300px]'>
                Full-Stack/Lead Developer en University of Nebraska-Lincoln
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2 items-center'>
                <img className='w-[40px] h-[40px]' src='/nebraska.jpg' />
                <a
                  href='https://www.unl.edu/'
                  className='text-[9px] max-w-[150px]'
                  target='_blank'
                >
                  University of Nebraska–Lincoln
                </a>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <img
                  className='w-[40px] h-[40px]'
                  src='
                /irso.png'
                />
                <a
                  href='http://irso.edu.ar/'
                  className='text-[9px] max-w-[160px]'
                  target='_blank'
                >
                  Instituto Raúl Scalabrini Ortiz.
                </a>
              </div>
            </div>
          </div>
          <div>
            <span className='text-[9px] text-gray-500'>
              |Buenos Aires y alrededores
            </span>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-xl p-4'>
        <h3 className='font-bold text-[12px]'>Acerca de</h3>
        <p className='text-[9px] mt-2'>
          Senior full-stack/lead software developer with a passion for SOLID
          code and amazing products.
        </p>
      </div>
      <div className='bg-white p-4 rounded-xl'>
        <h3 className='text-[12px]'>Educación</h3>
        <Education
          title={'Instituto Raúl Scalabrini Ortiz'}
          subtitle={
            'Systems Analyst, Análisis de sistemas informáticos/AnalistaSystemsAnalyst, Análisis de sistemas informáticos/Analista 2018 - 2022'
          }
          img={'/irso.png'}
        />
        <Education
          title={'Universidad de Buenos Aires'}
          subtitle={'  Bachelor`s in Philosophy, Philosophy 2016 - 2024'}
          img={'/uba.jpg'}
        />
      </div>
      <div className='bg-white p-4 rounded-xl flex flex-col gap-6'>
        <h3 className='text-[12px]'>Experiencia</h3>
        <Experience
          img='/nebraska.jpg'
          title='Lead Developer'
          subtitle='  University of Nebraska-Lincoln · Jornada completaUniversity'
          extrasubtitle='dic. 2020 - actualidad · 4 años'
          data=' Full-stack (.NET, Java, MySQL, AWS) software development, dev team
          leading & systems design consulting.'
        />
        <Experience
          img='/grupoalpha.jpg'
          title='Sofware Developer '
          subtitle='Grupo Alpha 2000 · Profesional independiente'
          extrasubtitle='dic. 2018 - actualidad · 6 años
Buenos Aires, Argentina'
          data='Software development, mostly on .NET, including, ASP.NET/Core, RESTful APIs, Xamarin,
Winforms, tons of microservices and fun stuff.'
        />
        <Experience
          img='/bloc.png'
          title='Freelance Software Developer '
          subtitle='Profesional independiente · Profesional independiente'
          extrasubtitle='mar. 2016 - actualidad · 8 años 9 meses'
          data='Full-stack software development and general IT consulting, especially around optimization and automation of processes.'
        />
        <Experience
          img='/atento_logo.jpg'
          title='
Help Desk Technician '
          subtitle='Atento · Jornada parcial'
          extrasubtitle='ago. 2017 - dic. 2018 · 1 año 5 mesesago. 2017 - dic. 2018 · 1 año 5 meses
Buenos Aires, Argentina'
          data='Logotipo de Atento
Help Desk Technician
Help Desk Technician
Atento · Jornada parcialAtento · Jornada parcial
ago. 2017 - dic. 2018 · 1 año 5 meses
Remote help desk support for one of the largest telecom companies in Argentina. Issues were
broad, ranging from VoIP and Internet/Wi-Fi, to general networking and router config, CATV, DTV,
UHF TV.'
        />
      </div>
      <div className='bg-white p-4 rounded-xl'>
        <h3 className='my-5'>Licencias y certificaciones</h3>
        <Certifications
          title='EF SET English Certificate 84/100 (C2 Proficient)'
          subtitle='EF SET'
          img='/efset_logo.jpg'
          link='https://cert.efset.org/4Dx3UW'
        />
        <Certifications
          title='C#'
          subtitle='TestDome'
          img='/Logo-csharp.png'
          link='https://www.testdome.com/certificates/0c58eabca611492cab2b4a541ab5f17a'
        />
      </div>
    </section>
  );
};

export default Linkedin;
