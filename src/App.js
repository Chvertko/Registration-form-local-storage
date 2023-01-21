
import { Form } from "./components/Form";
import { Wrapper } from "./components/Wrapper";
import { LoginPage } from "./pages/LoginPage";


function App() {
  return (
    <Wrapper>
      <LoginPage>
        <Form/>
      </LoginPage>
    </Wrapper>
  );
}

export default App;
