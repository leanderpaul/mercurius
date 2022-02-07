/**
 * Importing NPM packages and components
 */

/**
 * Importing user-defined components
 */

/**
 * Importing user-defined utils
 */

/**
 * Types
 */
import type { AppProps } from 'next/app';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

/**
 * Styled components
 */

export default App;
