import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Link from "./components/Link";

const App = () => {
  return (
    <div>
      <Link to={'/button'}>Go to Button</Link>
      <Link to={'/accordion'}>Go to Accordion</Link>
      <ButtonPage />
      <AccordionPage />
      <DropdownPage />
    </div>
  );
};

export default App;
