// JSX: JavaScript + XML (HTML)

interface ButtonProps{
  title: String;
}
function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}
function App() {
  return (
    <div>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Hello World"/>
    </div>
  )
}

export default App
