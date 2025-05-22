import React from 'react';
import './App.css';
import FirstSection from './components/modme/firstsection/firstsection'; // To‘g‘ri import
// import SecondSection from './components/modme/secondsection/secondsection'; // To‘g‘ri import

function App() {
  return (
    <div className="App">
      <FirstSection />
      {/* <SecondSection /> */}
    </div>
  );
}

export default App;













// import React from 'react';
// import './App.css';

// import Home from './components/portfolio/home/home';
// import About from './components/portfolio/about/about';
// import Contact from './components/portfolio/contact/contact';
// import Scils from './components/portfolio/scils/scils';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <About />
//       <Contact />
//       <Scils />
//     </div>
//   );
// }

// export default App;




// Add

// import React, { useState } from "react";

// function App() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleAdd = () => {
//     if (inputValue.trim() !== "") {
//       setItems([...items, inputValue]);
//       setInputValue("");
//     }
//   };

//   return (
//     <div>
//       <h3>Qo‘shish</h3>
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Yangi element yozing"
//       />
//       <button onClick={handleAdd}>Qo‘shish</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// Delete

// import React, { useState } from "react";

// function App() {
//   const [items, setItems] = useState(["Olma", "Banan", "Uzum"]);

//   const handleDelete = (indexToDelete) => {
//     const newItems = items.filter((_, index) => index !== indexToDelete);
//     setItems(newItems);
//   };

//   return (
//     <div>
//       <h2>Mevalar ro'yxati</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}{" "}
//             <button onClick={() => handleDelete(index)}>O‘chirish</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// Edit

// import React, { useState } from "react";

// function App() {
//   // Dastlabki ma'lumotlar
//   const [items, setItems] = useState(["Olma", "Banan", "Uzum"]);
//   const [isEditing, setIsEditing] = useState(null); // Hozirda qaysi itemni tahrirlayapmiz
//   const [editValue, setEditValue] = useState("");  // Tahrir qilinadigan qiymat

//   // Tahrir qilish funksiyasi
//   const handleEdit = (index) => {
//     setIsEditing(index); // Qaysi itemni tahrirlayapmiz, shu yerga saqlanadi
//     setEditValue(items[index]); // O‘sha itemning qiymatini inputga qo‘yish
//   };

//   // O‘chirish funksiyasi
//   const handleDelete = (index) => {
//     const newItems = items.filter((_, itemIndex) => itemIndex !== index);
//     setItems(newItems);
//   };

//   // Tahrirni saqlash funksiyasi
//   const handleSaveEdit = (index) => {
//     const newItems = [...items];
//     newItems[index] = editValue;
//     setItems(newItems);
//     setIsEditing(null); // Tahrir qilishni tugatish
//   };

//   return (
//     <div>
//       <h2>Mevalar ro'yxati</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {isEditing === index ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editValue}
//                   onChange={(e) => setEditValue(e.target.value)}
//                 />
//                 <button onClick={() => handleSaveEdit(index)}>Saqlash</button>
//               </div>
//             ) : (
//               <span>
//                 {item}
//                 <button onClick={() => handleEdit(index)}>Tahrir qilish</button>
//                 <button onClick={() => handleDelete(index)}>O‘chirish</button>
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




// modme
// import React, { useState } from 'react';
// import './App.css';
// import FirstSection from './components/modme/firstsection/firstsection';
// import SecondSection from './components/modme/secondsection/secondsection';

// function App() {
//   return(
//     <div>
//       <FirstSection />
//       <SecondSection />
//     </div>
//   )
// }
