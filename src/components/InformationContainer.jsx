import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id='information'>
      <div className='info-card'>
        <AiFillPhone id='phone-icon' className='contact-icon'/>
        <div>
          <h3>Telefone</h3>
          <p>(49)99171 2726</p>
        </div>
      </div>
      <div className='info-card'>
        <AiOutlineMail id='email-icon' className='contact-icon'/>
        <div>
          <h3>E-mail</h3>
          <p>cleijllahm@gmail.com</p>
        </div>
      </div>
      <div className='info-card'>
        <AiFillEnvironment id='pin-icon' className='contact-icon'/>
        <div>
          <h3>Localização</h3>
          <p>Guarujá do Sul / SC</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer