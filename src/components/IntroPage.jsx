import { useState } from "react";
import IntroButton from "./IntroButton";

export default function IntroPage() {
  const [introToggle, setIntroToggle] = useState(true);
  return (
    <>
      {introToggle && (
        <section style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#D6F3F0",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingBottom: "2rem",
              gap: "1rem",
              zIndex: 1211,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <img src="/logo.svg" style={{ width: "200px" }}></img>
            <div>
              <p>
                Upptäck Lindholmen på ett helt nytt sätt genom att dyka in i
                människors minnen och upplevelser som formats här. Vår
                interaktiva karta låter dig utforska, läsa och lyssna på
                berättelser från de som gått samma vägar som du. Här kan du
                också skapa och dela dina egna minnen, sätta dina fotavtryck och
                låta musiken du väljer sätta tonen.
              </p>
            </div>
            <div>
              <p>
                ”Det var i början av 90-talet när jag flyttade in i en lägenhet
                mitt emot Aftonstjärnan. Då hade de inte visat film där på flera
                decennier, men efter återinvigningen 94 strömmade människor dit
                igen...”
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src="/memoryicon.svg" style={{ width: "45px" }}></img>
              <p>Dela ett minne kopplat till platsen</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src="/stepsicon.svg" style={{ width: "45px" }}></img>
              <p>Sätt ditt avtryck på en plats du besökt och uppskattar</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img src="/musicicon.svg" style={{ width: "45px" }}></img>
              <p>Musiksätt platsen </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>
                {" "}
                Vad väntar du på? Gå vidare och bli en del av Lindholmens
                levande historia.
              </p>
            </div>
            <IntroButton
              text={"Gå till karta"}
              setIntroToggle={setIntroToggle}
            />
          </div>
        </section>
      )}
    </>
  );
}
