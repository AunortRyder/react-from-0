import "./styles.css";

import Header from "./components/Header";
import MyInfo from "./components/MyInfo";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MyInfo />
      <ContactCard
        contact={{
          name: "Polly Sweet",
          imgUrl: "https://placekitten.com/400/200",
          phone: "69-69-69"
        }}
      />
      <ContactCard
        contact={{
          name: "Riley Reid",
          imgUrl: "https://placekitten.com/400/201",
          phone: "420-420"
        }}
      />
      <ContactCard
        contact={{
          name: "Marcelin Abadir",
          imgUrl: "https://placekitten.com/400/202",
          phone: "13-13-13"
        }}
      />
      <ContactCard
        contact={{
          name: "Lolly Lips",
          imgUrl: "https://placekitten.com/400/203",
          phone: "66-66-66"
        }}
      />
      <Footer />
    </div>
  );
}
