import { maintenanceData } from "./Database";
import { Header } from "./components/Header";
import { columns } from "./components/Tables/columns";
import { DataTable } from "./components/Tables/data-table";
import "./globals.css";

function App() {
  const data = maintenanceData;
  return (
    <>
      <div>
        <Header />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
