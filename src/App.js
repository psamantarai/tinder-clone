import "./App.css";
import Header from "./componets/header/header.componet";
import SwipeButtons from "./componets/swipe-button/swipe-button.component";
import TinderCards from "./componets/tinder-card/tinder-card.component";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwiperButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
