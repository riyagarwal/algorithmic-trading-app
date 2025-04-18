import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Trading Studio</h1>
          <p className="text-lg mb-8">
            Create trading strategies and backtest their performance on historical data
          </p>
          <Link href="/create-strategy" className="btn-primary">
            Create New Strategy
          </Link>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h2 className="text-xl font-semibold mb-4">Advanced Analytics</h2>
            <p>Real-time market analysis and predictive modeling</p>
          </div>
          <div className="card text-center">
            <h2 className="text-xl font-semibold mb-4">Easy Strategy Building</h2>
            <p>Create, test, and optimize your trading strategies</p>
          </div>
          <div className="card text-center">
            <h2 className="text-xl font-semibold mb-4">Comprehensive Testing</h2>
            <p>Backtest your strategies with historical market data</p>
          </div>
        </div>
      </div>
    </main>
  );
}