import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import ResultsDisplay from "./components/ResultsDisplay";
import DivisionForm from "./components/DivisionForm";
import OrderList from "./components/OrderList";
import Footer from "./components/Footer";
import DocumentationModal from "./components/DocumentationModal";
 
import "./styles.css";

function App() {
  // Estados para los cálculos
  const [usdAmount, setUsdAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [sellRate, setSellRate] = useState("");
  const [commissionRate, setCommissionRate] = useState("");
  const [netProfit, setNetProfit] = useState(0);
  const [referralCommission, setReferralCommission] = useState(0);
  const [finalProfit, setFinalProfit] = useState(0);
  const [divideBy, setDivideBy] = useState("");
  const [divisionResult, setDivisionResult] = useState(0);
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para controlar el modal de documentación
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };
  
  const calculateRemittance = () => {
    const amount = parseFloat(usdAmount) || 0;
    const exchange = parseFloat(exchangeRate) || 0;
    const sell = parseFloat(sellRate) || 0;
    const commission = parseFloat(commissionRate) || 0;

    if (amount <= 0 || exchange <= 0 || sell <= 0 || commission < 0) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    const amountInBolivares = amount * sell;
    const costInBolivares = amount * exchange;
    const netProfitValue = amountInBolivares - costInBolivares;
    const referralCommissionValue = (netProfitValue * commission) / 100;
    const finalProfitValue = netProfitValue - referralCommissionValue;

    setNetProfit(netProfitValue);
    setReferralCommission(referralCommissionValue);
    setFinalProfit(finalProfitValue);
  };

  const registerOrder = () => {
    if (usdAmount === "" || netProfit === 0) {
      alert("Primero calcula una operación válida");
      return;
    }

    const newOrder = {
      id: `ORD-${Math.random().toString(36).substr(2, 12).toUpperCase()}`,
      usdAmount: parseFloat(usdAmount),
      netProfit,
      referralCommission,
      finalProfit,
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <>
      <div className="container">
        <h1>Calculadora de Remesas</h1>
        
        <CalculatorForm
          usdAmount={usdAmount}
          exchangeRate={exchangeRate}
          sellRate={sellRate}
          commissionRate={commissionRate}
          onUsdAmountChange={(value) => setUsdAmount(value)}
          onExchangeRateChange={(value) => setExchangeRate(value)}
          onSellRateChange={(value) => setSellRate(value)}
          onCommissionRateChange={(value) => setCommissionRate(value)}
          onCalculate={calculateRemittance}
        />
        
        <ResultsDisplay
          netProfit={netProfit}
          referralCommission={referralCommission}
          finalProfit={finalProfit}
        />
        
        <DivisionForm
          divideBy={divideBy}
          finalProfit={finalProfit}
          onDivideByChange={(value) => setDivideBy(value)}
          onCalculateDivision={() => {
            setDivisionResult(finalProfit / (parseFloat(divideBy) || 1));
          }}
          divisionResult={divisionResult}
        />
        
        <OrderList
          orders={orders}
          searchTerm={searchTerm}
          onSearchTermChange={(value) => setSearchTerm(value)}
          onRegisterOrder={registerOrder}
          onDeleteOrder={deleteOrder}
        />
      </div>
      
      <Footer 
  onShowDocumentation={() => {
    console.log("Mostrando modal"); // ← Esto debe aparecer al hacer clic
    setIsModalOpen(true);
  }} 
/>
      <DocumentationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default App;