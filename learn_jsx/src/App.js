import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Link from "./components/Link";
import Route from "./components/Route";

const App = () => {
  return (
    <div>
      <Link to={"/button"}>Go to Button</Link>
      <Link to={"/accordion"}>Go to Accordion</Link>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  );
};

export default App;
