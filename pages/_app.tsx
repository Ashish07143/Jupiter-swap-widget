import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import { Network } from "@thirdweb-dev/sdk/solana";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'


// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
// Refresh once if you get any error 
const network: Network = "devnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider network={network}
      // clientId="217969d8c16fc9060a34befcd40fa90b"
      >
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default MyApp;
