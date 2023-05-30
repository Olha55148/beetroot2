
import './App.scss';

import Header1 from './Components/Header1/Header1';
import Banner from './Components/Banner/Banner';
import Blog from './Components/Blog/Blog';
import News from './Components/News/News';
// const data = [
//   {
//   id: 2,
//   title: "title 2"
// },
// {
//   id: 2,
//   title: "title 2"
// },
// ]
function App() {

  return (
    <>
      <div className='wrapper'>
        <Header1>
        </Header1>
        <Banner></Banner>
        <main className='main2'>
         
          <Blog> </Blog>
          <News></News>
          {/* {data.map(({title, id}) => <Title key={id} title={title}/>)} */}
        </main>
      </div>
    </>
  );
}

export default App;
