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
                människors minnen och ta del av upplevelser som formats här. Vår
                interaktiva karta låter dig utforska berättelser från de som
                gått på samma gator som du. Här kan du också dela med dig av
                dina egna Lindholmen-minnen och sätta dina egna fotavtryck.
              </p>
            </div>
            <div
              style={{
                backgroundImage: "url('/cloud.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",

                backgroundPosition: "center",
                // margin: "50px 0px",
                height: "auto",
                position: "relative",
              }}
            >
              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "100px 60px 130px 60px",
                  fontSize: "12px",
                }}
              >
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
              <p>Sätt ditt avtryck på en plats du besökt</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <p>
                {" "}
                Vad väntar du på? Gå vidare och bli en del av Lindholmens
                levande historia.
              </p>
            </div>
            <IntroButton
              text={"GÅ TILL KARTA"}
              setIntroToggle={setIntroToggle}
            />
          </div>
        </section>
      )}
    </>
  );
}
