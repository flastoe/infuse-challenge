const { useState } = React;

const App = () => {
  const [string, setString ] = useState('');
  const [reversed, setReversed ] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setReversed('');
    setString(e.target.value);
  }
  const submit = async () => {
    try {
      setLoading(true);
      const response = await fetch('../data', {
        method: 'POST',
        body: JSON.stringify({ string }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setReversed(data.reversed);
      console.log('Response', data);
    } catch (e) {
      console.log('Error', e);
    }
    setLoading(false);
  }
  return (
    <div class="wrapper">
      <div class="data-box">
        <h1>Infuse Challenge</h1>
        <input type="text" value={string} onChange={handleChange} placeholder="String..." />
        <button onClick={submit}>Submit</button>
        <div class="reversed">{reversed}</div>
      </div>
    </div>
  )
};
console.l
ReactDOM.render(<App />, document.querySelector("#app"));