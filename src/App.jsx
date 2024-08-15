import { useState } from 'react';
import './App.css';
import { InputBox } from './components';
import Usecurrency from './customhook/usecurrencyinfo';

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState('usd');
  const [to, setto] = useState('pkr');
  const [convertedamount, setconvertedamount] = useState(0);
  const currenyinfo = Usecurrency(from);
  const options = Object.keys(currenyinfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };
  const convert = () => {
    setconvertedamount(amount * currenyinfo[to]);
  };
  return (
    <>
    <h1 className='text-5xl font-extrabold font-sans py-8 bg-indigo-950 text-sky-300'>Currency Converter</h1>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?w=740&t=st=1723625628~exp=1723626228~hmac=418e0eba3c72a7806369dbe21f0b0143b5e7516bd3b8dc0ca7b880038af29d0b')`,
        }}
      >
        
        <div className="w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={options}
                onCurrencychange={(currency) => setfrom(currency)}
                selectcurrency={from}
                onAmountchange={(amount) => setamount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyoptions={options}
                onCurrencychange={(currency) => setto(currency)}
                selectcurrency={to}
                Amountdisable
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:text-yellow-600 w-full text-white px-3 py-4 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

