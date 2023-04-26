import PageWrapper from "../layout/PageWrapper/PageWrapper";
import starList from "../../mocks/starList";
import "./App.css";

export default function App() {
  return (
    <PageWrapper stars={starList} />
  );
}
