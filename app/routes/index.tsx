import { useState } from "react"
import qr1 from "~/qr/1.png"
import qr2 from "~/qr/2.png"
import qr3 from "~/qr/3.png"
import qr4 from "~/qr/4.png"
import qr5 from "~/qr/5.png"
import qr6 from "~/qr/6.png"

const scooters = [
  { qrSrc: qr1, name: "Frederiksberg Have Scooter" },
  { qrSrc: qr2, name: "Glahns Scooter" },
  { qrSrc: qr3, name: "ITU Scooter" },
  { qrSrc: qr4, name: "Fields Scooter" },
  { qrSrc: qr5, name: "Lufthavn Scooter" },
  { qrSrc: qr6, name: "Planetarium Scoot" },
]

export default function Index() {
  const [currentScooter, setCurrentScooter] = useState(0)
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Scooter booking</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          placeItems: "center",
        }}
      >
        <button
          onClick={() => setCurrentScooter(currentScooter - 1)}
          disabled={currentScooter === 0}
        >
          Previous scooter
        </button>
        <button
          onClick={() => setCurrentScooter(currentScooter + 1)}
          disabled={currentScooter === scooters.length - 1}
        >
          Next scooter
        </button>
      </div>
      <h2>
        {scooters[currentScooter].name}
      </h2>
      <p>
        Scooter {currentScooter + 1} of {scooters.length}
      </p>
      <img
        src={scooters[currentScooter].qrSrc}
        alt={`Scooter ${currentScooter + 1}`}
      />
    </div>
  )
}
