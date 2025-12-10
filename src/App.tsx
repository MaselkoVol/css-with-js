import { useContext, useEffect } from "react";
import "./App.scss";
import Button from "./components/ui/button/button";
import ThemeContext from "./contexts/theme/theme-context";
import { BorderRadius } from "./utils/design/static/variables/config";
import { Box } from "./components/box/box";

function App() {
  const { setThemeMode } = useContext(ThemeContext);

  return (
    <div>
      <div className="container">
        <Button
          onClick={() => {
            setThemeMode("dark");
          }}
        >
          dark
        </Button>
        <Button
          onClick={() => {
            setThemeMode("light");
          }}
        >
          Light
        </Button>

        <Button>primary contained</Button>
        <Button color="secondary">secondary contained</Button>
        <Button color="accent">accent contained</Button>
        <Button color="bg">bg contained</Button>
        <Button color="error">error contained</Button>
        <Button color="disabled">disabled contained</Button>
        <Button borderRadius={BorderRadius.full} color="success">
          success contained
        </Button>

        <Button variant="outlined">primary outlined</Button>
        <Button variant="outlined" color="secondary">
          secondary outlined
        </Button>
        <Button variant="outlined" color="accent">
          accent outlined
        </Button>
        <Button variant="outlined" color="bg">
          bg outlined
        </Button>
        <Button variant="outlined" color="error">
          error outlined
        </Button>
        <Button variant="outlined" color="disabled">
          disabled outlined
        </Button>
        <Button variant="outlined" color="success">
          success outlined
        </Button>

        <Button variant="text">primary text</Button>
        <Button variant="text" color="secondary">
          secondary text
        </Button>
        <Button variant="text" color="accent">
          accent text
        </Button>
        <Button variant="text" color="bg">
          bg text
        </Button>
        <Button variant="text" color="error">
          error text
        </Button>
        <Button variant="text" color="disabled">
          disabled text
        </Button>
        <Button variant="text" color="success">
          success text
        </Button>
      </div>
      <Box color="accent" />
      <Box color="bg" />
      <Box color="error" />
      <Box color="disabled" />
      <Box color="info" />
      <Box color="warning" />
      <Box color="primary" />
      <Box color="secondary" />
      <Box color="success" />
    </div>
  );
}

export default App;
