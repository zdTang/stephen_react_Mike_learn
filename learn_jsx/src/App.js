import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
const App = () => {
  const items = [
    {
      id: "sdsdd",
      label: "how to do it?",
      content: "hello",
    },
    {
      id: "wewsfe",
      label: "how to do it?",
      content: "hello",
    },
    {
      id: "evxne",
      label: "how to do it?",
      content: "hello",
    },
  ];

  return (
    <div>
      <ButtonPage />
      <Accordion items={items} />
    </div>
  );
};

export default App;
