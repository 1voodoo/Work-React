import App from "./src/components/App";
import showToast from "native-toast";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";

(async () => {
   
        const app = await App();
        const header = await Header();
        const footer = await Footer();
        
        const root = document.getElementById("root");
        root.before(header);
        root.append(app);
        root.append(footer);

        showToast({ 
            message: "All Characters Loaded",
            position: "center",
            rounded: true,
            type: "success",
            
        });
    
})();















// import showToast, { success } from "native-toast";

// showToast({ 
//     message: "Hello World",
//     position: "center",
//     rounded: true,
//     type: "success",
// });
