import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default App;
