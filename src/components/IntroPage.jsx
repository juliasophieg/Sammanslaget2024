import FormButton from "./FormButton";

export default function IntroPage() {
  return (
    <section style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#eeffff",
          height: "100%",
          width: "100%",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        <p>
          Upptäck Lindholmen på ett helt nytt sätt genom att dyka in i
          människors minnen och upplevelser som formats här. Vår interaktiva
          karta låter dig utforska, läsa och lyssna på berättelser från de som
          gått samma vägar som du. Här kan du också skapa och dela dina egna
          minnen, sätta dina fotavtryck och låta musiken du väljer sätta tonen.
        </p>
        <p>
          ”Det var i början av 90-talet när jag flyttade in i en lägenhet mitt
          emot Aftonstjärnan. Då hade de inte visat film där på flera decennier,
          men efter återinvigningen 94 strömmade människor dit igen...”
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{ backgroundColor: "black", width: "50px", height: "50px" }}
          ></div>
          <p>Dela ett minne kopplat till platsen</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{ backgroundColor: "black", width: "50px", height: "50px" }}
          ></div>
          <p>Sätt ditt avtryck på en plats du besökt och uppskattar</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{ backgroundColor: "black", width: "50px", height: "50px" }}
          ></div>
          <p>Musiksätt platsen </p>
        </div>
        <div>
          Vad väntar du på? Gå vidare och bli en del av Lindholmens
          levande historia.
        </div>
        <FormButton text={"PUBLICERA"} />
      </div>
    </section>
  );
}
