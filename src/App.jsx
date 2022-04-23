import NavigationBar from "./Components/NavigationBar";
import LandingPage from "./Components/LandingPage";
import CardPage from "./Components/CardPage";
import Footer from "./Components/Footer";

import { ReactComponent as GrowUpLogoDesktop } from './images/grow-together-desktop.svg'
import { ReactComponent as GrowUpLogoMobile } from './images/grow-together-mobile.svg'
import { ReactComponent as FlowingConversationDesktop } from './images/flowing-conversation-desktop.svg'
import { ReactComponent as FlowingConversationMobile } from './images/flowing-conversation-mobile.svg'
import { ReactComponent as YourUsersDesktop } from './images/your-users-desktop.svg'
import { ReactComponent as YourUsersMobile } from './images/your-users-mobile.svg'

import './App.css'

const App = () => {
  const blogs = [
    {
      title: 'Grow Together',
      description: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      mobile_img: <GrowUpLogoMobile />,
      desktop_img: <GrowUpLogoDesktop />,
      addition_css: 'mt-10',
      delay: 0.2
    },

    {
      title: 'Flowing Conversations',
      description: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      mobile_img: <FlowingConversationMobile />,
      desktop_img: <FlowingConversationDesktop />,
      delay: 0.4
    },

    {
      title: 'Your Users',
      description: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      mobile_img: <YourUsersMobile />,
      desktop_img: <YourUsersDesktop />,
      addition_css: "mb-10",
      delay: 0.6
    }
    
  ]

  return (
    <div className="min-h-screen">
      <NavigationBar>
        <LandingPage />
        <CardPage blogs={blogs} />
        <Footer />
        
      </NavigationBar>
    </div>
  );
}

export default App;
