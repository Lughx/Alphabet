import { useEffect, useState } from 'react';
import './App.css';
import Letter from './components/Letter';
import { getRandomInt } from './functions';


function App() {
  const [letters, setLetters] = useState([
    {
      main: "A",
      dynamic: "",
      static: false
    },
    {
      main: "B",
      dynamic: "",
      static: false
    },
    {
      main: "C",
      dynamic: "",
      static: false
    },
    {
      main: "D",
      dynamic: "i",
      static: true
    },
    {
      main: "E",
      dynamic: "",
      static: false
    },
    {
      main: "F",
      dynamic: "",
      static: false
    },
    {
      main: "G",
      dynamic: "",
      static: false
    },
    {
      main: "H",
      dynamic: "",
      static: false
    },
    {
      main: "I",
      dynamic: "d",
      static: true
    },
    {
      main: "J",
      dynamic: "j",
      static: true
    },
    {
      main: "K",
      dynamic: "",
      static: false
    },
    {
      main: "L",
      dynamic: "",
      static: false
    },
    {
      main: "M",
      dynamic: "",
      static: false
    },
    {
      main: "N",
      dynamic: "",
      static: false
    },
    {
      main: "O",
      dynamic: "",
      static: false
    },
    {
      main: "P",
      dynamic: "",
      static: false
    },
    {
      main: "Q",
      dynamic: "",
      static: false
    },
    {
      main: "R",
      dynamic: "",
      static: false
    },
    {
      main: "S",
      dynamic: "",
      static: false
    },
    {
      main: "T",
      dynamic: "",
      static: false
    },
    {
      main: "U",
      dynamic: "",
      static: false
    },
    {
      main: "V",
      dynamic: "",
      static: false
    },
    {
      main: "X",
      dynamic: "",
      static: false
    },
    {
      main: "Y",
      dynamic: "",
      static: false
    },
    {
      main: "Z",
      dynamic: "",
      static: false
    },
  ])

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    updateDynamics()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
      if (counter >= 600) {
        reset()
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);

  }, [counter])

  const reset = () => {
    updateDynamics()
    setCounter(0)
  }

  const updateDynamics = () => {
    let temporal = []
    let last
    let count = 0
    for (let i = 0; i < letters.length; i++) {
      const element = letters[i];

      if (element.static) {
        temporal.push(element)
        last = element.dynamic
      } else {
        const random = getRandomInt(3)
        let dynamic = ""
        if (random === 0) dynamic = "i"
        else if (random === 1) dynamic = "d"
        else if (random === 2) dynamic = "j"

        if (last === dynamic) count++
        else count = 0

        console.log(count)
        if (count > 0) {
          switch (dynamic) {
            case "i":
              dynamic = "j"
              break;
            case "j":
              dynamic = "d"
              break;
            case "d":
              dynamic = "i"
              break;
          }
          count = 0
        }
        temporal.push({
          main: element.main,
          dynamic: dynamic,
          static: false
        })
        last = dynamic
      }
    }
    setLetters(temporal)
  }

  return (
    <div className='max-w-5xl w-full mx-auto grid grid-cols-1'>
      <div className='h-[100px]'></div>
      <div className='text-4xl font-semibold text-center mb-3'>
        {((600 - counter)).toFixed()} segundos
      </div>
      <div className='ml-4 flex justify-center mb-7'>
        <button onClick={() => reset()} className='bg-mauve text-md font-semibold rounded-xl px-5 py-1'>Reset</button>
      </div>
      <div className='grid grid-cols-5 w-full'>
        {
          letters.map(letter => (
            <Letter main={letter.main} dynamic={letter.dynamic} key={letter.main} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
