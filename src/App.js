import './App.css';

const data = [
  'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT',
  'NINE', 'TEN', 'ELEVEN', 'TWELEVE'
];

function App() {
  return (
    <div className='assign-container'>

      {
        data?.map((val, ind) => {
          return (
            <div className='assign-box' key={ind}>
              <p>{val}</p>
            </div>
          );
        })
      }

    </div>
  );
}

export default App;
