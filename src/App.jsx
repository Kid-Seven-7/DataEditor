import useEffect from 'react'
import Header from "./components/Header";
import Card from "./components/Card";

function UpdateValue() {

}

function GetValue() {
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('https://localhost:3001/users')
      const data = res.json();
      console.log(data)
    }

    fetchUser()
  })

}

function App() {
  return (
    <div className="container">
      <Header />
      <Card
        onUpdate={UpdateValue}
        id={'1'}
        name={'Joey'}
        phone={'0987654321'}
        text={'Edit'}
      />
    </div>
  );
}

export default App;
