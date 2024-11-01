import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
const App = () => {
  const items = [
    {
      label: "how to do it?",
      content: "hello",
    },
    {
      label: "how to do it?",
      content: "hello",
    },
    {
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
