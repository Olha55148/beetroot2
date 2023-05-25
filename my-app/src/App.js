
import './App.scss';

import Header1 from './Components/Header1/Header1';
import Banner from './Components/Banner/Banner';
import Blog from './Components/Blog/Blog';
import News from './Components/News/News';
function App() {
  let text = 'Some'
  return (
    <>
      <div className='wrapper'>
        <Header1>
        </Header1>
        <Banner></Banner>
        <main className='main2'>
          <Blog></Blog>
          <News></News>
        </main>
      </div>
    </>
  );
}

export default App;
