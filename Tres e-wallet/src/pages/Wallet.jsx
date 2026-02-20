import { useEffect, useState } from "react";
import algosdk from "algosdk";

const algodClient = new algosdk.Algodv2(
  "",
  "https://testnet-api.algonode.cloud",
  ""
);

const indexerURL = "https://testnet-idx.algonode.cloud";

// 🔥 DEMO MNEMONIC (TestNet only!)
const mnemonic = "behave walk section liquid twist jelly vacuum grain width chalk weekend maze vacuum empty ivory average wage extra claim afraid arena cherry custom able issue";

export default function Wallet() {
  const account = algosdk.mnemonicToSecretKey(mnemonic);

  const [balance, setBalance] = useState(null);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchBalance();
    fetchTransactions();
  }, []);

  const fetchBalance = async () => {
    const response = await fetch(
      `${indexerURL}/v2/accounts/${account.addr}`
    );
    const data = await response.json();
    setBalance(data.account.amount / 1_000_000);
  };

  const fetchTransactions = async () => {
    const response = await fetch(
      `${indexerURL}/v2/accounts/${account.addr}/transactions`
    );
    const data = await response.json();
    setTransactions(data.transactions.slice(0, 5));
  };

  const sendAlgo = async () => {
    const params = await algodClient.getTransactionParams().do();

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      sender: account.addr,
      receiver,
      amount: Math.floor(Number(amount) * 1_000_000),
      suggestedParams: params,
    });

    const signedTxn = txn.signTxn(account.sk);

    await algodClient.sendRawTransaction(signedTxn).do();

    await fetchBalance();
    await fetchTransactions();

    setReceiver("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-bold mb-6">
          Wallet Dashboard
        </h2>

        <p className="mb-4 text-sm text-slate-600">
          Address: {account.addr}
        </p>

        <p className="text-xl font-semibold mb-6">
          Balance: {balance !== null ? `${balance} ALGO` : "Loading..."}
        </p>

        <div className="mb-8">
          <h3 className="font-semibold mb-2">Send ALGO</h3>

          <input
            type="text"
            placeholder="Receiver Address"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded mb-3"
          />

          <button
            onClick={sendAlgo}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Send
          </button>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Recent Transactions</h3>

          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="border p-3 rounded mb-2 text-sm"
            >
              <p>TX ID: {tx.id}</p>
              <p>
                Amount: {tx["payment-transaction"]?.amount / 1_000_000} ALGO
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}