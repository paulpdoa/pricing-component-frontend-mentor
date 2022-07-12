import Toggle from "./components/Toggle";
import Card from "./components/Card";
import { PriceContextProvider} from "./helpers/PriceContext";

function App() {

  const monthly = [
    {
      title: "Basic",
      price: "19.99",
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      sendUpTo: "Send up to 3 GB"
    },
    {
      title: "Professional",
      price: "24.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      sendUpTo: "Send up to 10 GB"
    },
    {
      title: "Master",
      price: "39.99",
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      sendUpTo: "Send up to 20 GB"
    }
  ];

  return (
    <PriceContextProvider>
      <div className="container">
        <img className="bg-top" src="/images/bg-top.svg" alt="top" />
        <h1 className="title">Our Pricing</h1>
        <Toggle />
        <div className="card__container">
          { monthly.map((month,key) => (
            <Card
              key={key} 
              title={month.title} 
              price={month.price} 
              storage={month.storage} 
              users={month.users} 
              sendUpTo={month.sendUpTo} 
            />
          )) }
        </div>
        <img className="bg-bottom" src="/images/bg-bottom.svg" alt="bottom" />
      </div>
    </PriceContextProvider>
  );
}

export default App;
