import { useContext } from "react";
import "./App.css";
import { LevelContext } from "./text";
// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={GetImg(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: "Aklilu Lemma",
//           imageId: "OKS67lh",
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{
//           name: "Lin Lanying",
//           imageId: "1bX5QH6",
//         }}
//       />
//     </div>
//   );
// }

// export default function form() {
//   const [to, setTo] = useState("Alice");
//   const [message, setMessage] = useState("Hello");
//   function handelSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said${massage} to ${to}`);
//     }, 2000);
//   }
//   return (
//     <from onSubmit={handelSubmit}>
//       <label>
//         To:{" "}
//         <select value={to} onChange={(e) => setTo(e.target.value)}>
//           <option>Alice</option>
//           <option>Bob</option>
//         </select>
//       </label>
//       <textarea
//         placeholder="massasge"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">send</button>
//     </from>
//   );
// }

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}

export function connect(serverUrl, roomId) {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}
