// import './App.css'
// import {useState,useEffect} from 'react'

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   const header = document.querySelector('.header-text')
  //   header.style.color = 'purple'
  // }

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  // useEffect(() => {
  //   console.log('useEffect')
  //   const header = document.querySelector('.header-text')
  //   header.style.color = 'green'
  // }, [])

  // useEffect(() => {
    // if (count > 6) {
    //   console.log('useEffect')
    //   const header = document.querySelector('.header-text')
    //   header.style.color = 'purple'
    // }
  // }, [count])
  return (
    <>
      <h1 className="header-text">React App</h1>
      <p>Blank Template</p>
      {/* <p>{count}</p> */}
      {/* <p>
        {count > 6 ? (
          <div className="flex-container">
            <div>Box 1</div>
            <div>Box 2</div>
            <div>Box 3</div>
          </div>
        ) : (
          <p>Count lesser than 6</p>
        )}
      </p> */}
      <div className="flex-container">
        <div>Box 1</div>
        <div>Box 2</div>
        <div>Box 3</div>
      </div>
      {/* <button onClick={handleClick}>Click Me</button> */}
    </>
  );
}

export default App;
