import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";

export default function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}
