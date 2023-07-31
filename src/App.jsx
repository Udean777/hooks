// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const [datas, setDatas] = useState();

//   useEffect(() => {
//     const url_api = "https://jsonplaceholder.typicode.com/todos/1";
//     fetch(url_api)
//       .then((raw) => {
//         return raw.json();
//       })
//       .then((data) => {
//         setDatas(data);
//       });
//   }, []);

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//       {count % 2 == 0 ? <p>Ini angka genap!!!</p> : <p>ini angka ganjil!!!</p>}
//       {/* <p>{data}</p> */}
//       {datas ? <p>Sudah ada {JSON.stringify(datas)}</p> : <p>Loading...</p>}
//     </>
//   );
// }

// export default App;

//
// import { useState, useEffect } from "react";

// export default function App() {
//   // const [count, setCount] = useState(0);
//   const [resource, setResource] = useState("posts");
//   const [items, setItems] = useState();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resource}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));

//     return console.log("Cleaning up shit");
//   }, [resource]);

//   // useEffect(() => {
//   //   console.log(`Count: ${count}`);
//   // }, [count]);

//   // const decrement = () => {
//   //   setCount(count - 1);
//   // };

//   // const increment = () => {
//   //   setCount(count + 1);
//   // };

//   return (
//     <div>
//       {/* <h1>Count {count}</h1> */}
//       <div>
//         {/* <button onClick={decrement}>Increment</button>
//         <button onClick={increment}>Decrement</button> */}
//         <div>
//           <button onClick={() => setResource("posts")}>posts</button>
//           <button onClick={() => setResource("comments")}>comments</button>
//           <button onClick={() => setResource("users")}>users</button>
//           <h1>{resource}</h1>
//         </div>
//       </div>
//       {items.map((item) => {
//         return <p>{JSON.stringify(item)}</p>;
//       })}
//     </div>
//   );
// }

//
// import { useState, useEffect } from "react";

// function ChatRoom({ roomId }) {
//   useEffect(() => {
//     alert(`You're about to switching to ${roomId} room`);
//   });

//   return (
//     <>
//       <h1>Met datang di room {roomId}!!</h1>
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     console.log(`Connected to ${roomId}`);

//     return console.log(`Disconnected to ${roomId}`);
//   }, [roomId]);

//   return (
//     <>
//       <label>
//         Pilih room chat:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="General">General</option>
//           <option value="Travel">Travel</option>
//           <option value="Music">Music</option>
//         </select>
//         <button onClick={() => setShow(!show)}>
//           {show ? "Close chat" : "Open chat"}
//         </button>
//         {show && <hr />}
//         {show && <ChatRoom roomId={roomId} />}
//       </label>
//     </>
//   );
// }

//
// import { useRef } from "react";
// import "./App.css";

// export default function Slider() {
//   const listRef = useRef(null);

//   function scrollToIndex(index) {
//     const listNode = listRef.current;

//     const imgNode = listNode.querySelectorAll("li > img")[index];
//     imgNode.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }
//   return (
//     <>
//       <nav>
//         <button onClick={() => scrollToIndex(0)}>Summer Fest</button>
//         <button onClick={() => scrollToIndex(1)}>Valkyrie</button>
//         <button onClick={() => scrollToIndex(2)}>OFC</button>
//       </nav>
//       <div>
//         <ul ref={listRef}>
//           <li>
//             <img src="/frame-pc-top.png" alt="summer fest" />
//           </li>
//           <li>
//             <img src="/banner.jpg" alt="valkyrie" />
//           </li>
//           <li>
//             <img src="/banner1.jpg" alt="ofc" />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

//
// import { useState, useEffect } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [api, setApi] = useState();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((json) => setApi(json));
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => clearInterval(intervalId);

// console.log(`Update ${count}`);

// document.title = `Update ${count}`;
// }, []);

// const decrement = () => {
//   setCount((prevCount) => prevCount - 1);
// };

// const increment = () => {
//   setCount((prevCount) => prevCount + 1);
// };

// return (
//   <>
{
  /* <h1>Count: {count}</h1> */
}
{
  /* <button onClick={decrement}>tambah</button>
      <button onClick={increment}>kurang</button> */
}
{
  /* {api ? <p>{JSON.stringify(api)}</p> : <p>Loading...</p>} */
}
//     </>
//   );
// }

// import { useState, useEffect } from "react";

// export default function App() {
//   const [times, setTimes] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimes(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);
//   return (
//     <div>
//       <h1>Times</h1>
//       <h2>{times}</h2>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import "./App.css";
// import DarkMode from "./components/DarkMode";

// export default function App() {
//   const [task, setTask] = useState("");
//   const [taskList, setTaskList] = useState([]);

//   useEffect(() => {
//     const storedTaskList = localStorage.getItem("taskList");
//     if (storedTaskList) {
//       setTaskList(JSON.parse(storedTaskList));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("taskList", JSON.stringify(taskList));
//   }, [taskList]);

//   const handleTaskChanged = (event) => {
//     setTask(event.target.value);
//   };

//   const handleTaskSubmit = (event) => {
//     event.preventDefault();
//     if (task.trim() !== "") {
//       setTaskList([...taskList, { name: task, checked: false }]);
//       setTask("");
//     }
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedTasks = [...taskList];
//     updatedTasks[index].checked = !updatedTasks[index].checked;
//     setTaskList(updatedTasks);
//   };

//   const handleTaskDelete = (index) => {
//     const updatedTasks = [...taskList];
//     updatedTasks.splice(index, 1);
//     setTaskList(updatedTasks);
//   };

//   return (
//     <div className="mx-auto text-cente min-h-screen">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold py-10">
//           To do List <DarkMode />
//         </h1>
//       </div>
//       <form onSubmit={handleTaskSubmit} className="flex justify-center">
//         <div className="flex justify-center gap-3">
//           <input
//             className="border-2 border-gray-300 rounded-md placeholder:p-3 dark:text-slate-600"
//             type="text"
//             value={task}
//             onChange={handleTaskChanged}
//             placeholder="Enter your task..."
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 p-1 rounded-lg hover:bg-blue-600 text-white transition ease-in-out hover:scale-105"
//           >
//             Add task
//           </button>
//         </div>
//       </form>
//       <ul className="py-5 transition-all ease-out m-auto w-80">
//         {taskList.map((task, index) => (
//           <li className="font-bold text-start mb-3" key={index}>
//             <input
//               type="checkbox"
//               id={`checkbox-${index}`}
//               className="me-3 before:bg-green-500"
//               checked={task.checked}
//               onChange={() => handleCheckboxChange(index)}
//             />
//             <label htmlFor={`checkbox-${index}`}>{task.name}</label>
//             <button
//               className="font-normal ms-2 bg-red-500 p-1 rounded-lg hover:bg-red-600 text-white transition ease-in-out hover:scale-105"
//               onClick={() => handleTaskDelete(index)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
// <div className="flex justify-center">
//   <footer className="fixed bottom-0 py-5 text-slate-700 dark:text-slate-100 font-bold text-lg">
//     Made by{" "}
//     <a
//       target="_blank"
//       rel="noreferrer"
//       href="https://github.com/Udean777"
//       className="text-blue-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all ease-in-out"
//     >
//       Udean
//     </a>
//   </footer>
// </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import "./App.css";
// import DarkMode from "./components/DarkMode";

// const quotes = [
//   "You can have anything you want if you want it badly enough. You can be anything you want to be, do anything you set out to accomplish if you hold to that desire with singleness of purpose.",
//   "Men moving only in an official circle are apt to become merely official not to say arbitrary in their ideas, and are apter and apter with each passing day to forget that they only hold power in a representative capacity.",
//   "There's a lot of capital flowing into 'information-age' companies. These are 25 companies that are leading the charge in building the bandwidth for the world economy.",
//   "With the physical trade still quiet because of the summer slowdown, the markets seem to be at the whim of the funds, so more exogenous issues such as the equities, oil, bonds and the dollar, or any other event that impacts the funds, needs to be watched closely",
//   "There's a lot of capital flowing into 'information-age' companies. These are 25 companies that are leading the charge in building the bandwidth for the world economy.",
//   "With the physical trade still quiet because of the summer slowdown, the markets seem to be at the whim of the funds, so more exogenous issues such as the equities, oil, bonds and the dollar, or any other event that impacts the funds, needs to be watched closely",
//   "Should the global economy suffer a period of slower demand, which is a distinct possibility given rising interest rates, a slowing housing market and high debt, then the demand profile on the metals could suffer. In turn, these lofty metal prices would then look out of place.",
//   "The jury is therefore still out as to whether this was just another mini correction or whether more selling will follow. The wider markets are showing some strength, equities are heading higher, mining stocks are showing some strength.",
// ];

// export default function Quote() {
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     console.log("Generated");
//   }, [quote]);

//   const randomQuotes = () => {
//     const random = Math.floor(Math.random() * quotes.length);
//     setQuote(quotes[random]);
//     setAnimate(true);
//   };

//   return (
//     <div className="m-auto text-center py-10">
//       <h1 className="text-3xl font-mono font-bold text-blue-600 py-5 dark:text-slate-50">
//         Random{" "}
//         <span className="bg-blue-600 dark:bg-slate-50 rounded-md text-slate-50 dark:text-blue-600 px-1">
//           Quote
//         </span>
//       </h1>
//       <div className="py-5">
//         <button
//           className="bg-blue-600 p-1 px-5 text-slate-50 font-bold rounded-md hover:scale-105 transition ease-in"
//           onClick={randomQuotes}
//         >
//           Generate
//         </button>
//         <div className="w-80 flex justify-center m-auto backdrop-blur-sm bg-white/30 mt-5 p-5 rounded-md">
//           {quote ? (
//             <p className="">{quote}</p>
//           ) : (
//             <p>Click the button to generate random Quotes</p>
//           )}
//         </div>
//         <div className="py-5">
//           <DarkMode />
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <footer className="fixed bottom-0 py-5 text-slate-700 dark:text-slate-100 font-bold text-lg">
//           Made by{" "}
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="https://github.com/Udean777"
//             className="text-blue-800 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200 transition-all ease-in-out"
//           >
//             Udean
//           </a>
//         </footer>
//       </div>
//     </div>
//   );
// }
import Register from "./Register.jsx";

export default function App() {
  return <Register />;
}
