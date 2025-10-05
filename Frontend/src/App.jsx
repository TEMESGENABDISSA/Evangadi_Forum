import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
function App() {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}
 export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";
// import Questions from "./pages/Questions/Questions";
// import QuestionPage from "./pages/QuestionPage/QuestionPage";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Signup" element={< signup />} />
//         <Route path="/Questions" element={<Questions />} /> {/* Added questions route */}
//         <Route path="/Questionpage" element={<QuestionPage />} />
//       </Routes>
//     </Router>
//   );
// }

// // Add missing component
// function QuestionDetailPage() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Question Detail Page</h1>
//       <p>Individual question details will go here</p>
//     </div>
//   );
// }

// export default App;
