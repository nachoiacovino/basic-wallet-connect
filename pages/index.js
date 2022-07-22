import { useAddress, useCoinbaseWallet, useDisconnect, useMetamask, useWalletConnect } from '@thirdweb-dev/react';

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWIthCoinbaseWallet = useCoinbaseWallet();
  const disconnectWallet = useDisconnect();
  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <>
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
        <button onClick={connectWithWalletConnect}>Connect with WalletConnect</button>
        <button onClick={connectWIthCoinbaseWallet}>Connect with Coinbase Wallet</button>
        </>
      )}
    </div>
  );
}
