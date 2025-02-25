import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/themes";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App( ) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Header />
			<Main />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
