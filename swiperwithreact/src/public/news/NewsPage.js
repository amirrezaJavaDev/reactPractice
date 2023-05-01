// import React,{useState} from "react";
// import { useTimout } from 'primereact/hooks';
// import { Editor } from "primereact/editor";
// import Layout from "../../components/layout/Layout";
// // theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// //core
// import "primereact/resources/primereact.min.css";
// const NewsPage = ()=>{
//     const [text, setText] = useState('');
//     const [clearTimeout] = useTimeout(() => {
//         toast.current.show({ severity: 'info', summary: 'Loaded' });
//     }, 3000);
//     console.log("text is here", text);
//    return(
//             <Layout>
//             <div>
//                 <div className="card">
//                     <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '100vh' }} />
//                 </div>
//             </div>
//             <div>
//                 {text}
//             </div>
//         </Layout>
//    );
// }
// export default NewsPage;
