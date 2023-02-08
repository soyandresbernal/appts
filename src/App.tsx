interface Props {
    title:string;
}
function App({title}:Props) {
  return (
    <h1 className="text-center">{title}</h1>
  );
}

export default App;
