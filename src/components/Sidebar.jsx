import { SocialNetworks } from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/11.png'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Cleiton Lahm" />
      <p className="title">Desenvolvedor Frontend</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar