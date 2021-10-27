import logo from './logo.svg';
// import useState
import { useState } from 'react';
import './App.css';

function App() {
  // search Client Side
  // 2. Search List React
      // buat ui, buat 1 input, 1 button search
      // kita tangkap value, 'daffa'
      // kita filter ada nilainya sama seperti input tannya
      // jika ada list,
      // jika tidak ada list kita kosongkan
      


  // username, email, experience, dan lvl. -> ini Data List

  // 1. Listing data ke dalam FE / React JS
    // import useState -> buat define State, done 
    // kita buat state, setter getter state, done
    // inisiasi nilai awal state, done
    // tampilkan list data state ke dalam ui,
    const [formPlayer, setFormPlayer] = useState({
      username: '',
      email: '',
      exp: '',
      lvl: 1
    })

      // AMBIL DATA, SET DATA
    const [player, setPlayer] = useState([
      {
        username: 'ricky',
        email: 'ricky@email.com',
        exp: '90',
        lvl: 10
      },
      {
        username: 'ricky2',
        email: 'ricky3@email.com',
        exp: '90',
        lvl: 11
      },
      {
        username: 'daffa',
        email: 'ricky3@email.com',
        exp: '90',
        lvl: 11
      },
    ])

    // coba buat logic untuk nambahin data
    const addData = () => {
      // let databaru =  {
      //   username: 'ricky4',
      //   email: 'ricky4@email.com',
      //   exp: '90',
      //   lvl: 11
      // }
      setPlayer([...player, formPlayer])
      setFormPlayer({
        username: '',
        email: '',
        exp: '',
        lvl: 1
      })

      // alert('function tambah data')
    }
    
    const changeHandler = (e) => {
      // console.log(e.target.value) // test input
      // console.log(e.target.name) // username
      setFormPlayer({
        ...formPlayer,
        // 'username': 'a'
        // 'username': 'test input'
        [e.target.name] : e.target.value
      })
    }

  return (
    <div className="App">
      {/* kita bisa jalanin js dalam tag/penanda {jscode} */}
      {
        // looping state player
        // array []
        player.map((data, index) => {
          return (
            <>
              <h5>{data.username}</h5>
              {/* tambahin ui */}
            </>
          )
        })
      }

      {/* Form Submit */}
      {/* <form> */}
        <input
          type="text"
          value={formPlayer.username}
          name="username"
          onChange={changeHandler}
        />

      <input
          type="email"
          value={formPlayer.email}
          name="email"
          onChange={changeHandler}
        />
      {/* </form> */}
      {/* button Submit */}
      <button onClick={addData}>Submit</button>
    </div>
  );
}

export default App;
