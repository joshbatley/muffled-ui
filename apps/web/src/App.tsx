import {Badge, Button, useMuffledSettings} from '@muffled-ui/react'
import LogoLight from './assets/logo-light.svg';
import LogoDark from './assets/logo-dark.svg';
import ReactLogo from './assets/react-light.svg';

function App() {
  const { theme } = useMuffledSettings();


  return (
    <div className="flex place-items-center justify-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:w-auto gap-3 items-end -mt-50 mx-auto sm:mx-7.5">
        <img src={theme === 'dark' ? LogoDark : LogoLight} className="w-full h-20.5 mx-auto col-span-1 sm:col-span-2"/>
        <div className="mt-10">
          <p className="text-sm sm:text-xs">&nbsp;</p>
          <a href="/react">
            <Button size="lg" className="w-full justify-center py-8 px-20 text-lg">
              <img src={ReactLogo} className="h-5" />
              <p>React</p>
            </Button>
          </a>
        </div>

        <div className="flex justify-center flex-wrap mt-10">
          <Badge tag="Coming Soon" position="N" variant="destructive">
            <Button  size="lg" className="w-full justify-center py-8 px-20 text-lg" disabled>
              <img src={ReactLogo} className="h-5" />
              <p>React Native</p>
            </Button>
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default App
