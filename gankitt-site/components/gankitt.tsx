import React from "react";
import Form from "./form";
import Results from "./results";
import Image  from "next/image";
import logo from "../public/PaonsData_GD.svg";

const GanKitt: React.FC = () => {

    const CHARACTER_LIMIT: number = 32;
   
    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
  
    const apiUrl = `https://s74bg84508.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords?prompt=${prompt}`

  
    const onSubmit = () => {
      console.log("Submitting: " + prompt);
      setIsLoading(true);
      fetch(apiUrl)
        .then(response => response.json())
        .then(onResult);
    };
  
    const onResult = (data: any) => {
      setSnippet(data.snippet);
      setKeywords(data.keywords);
      setHasResult(true);
      setIsLoading(false);
    };

    const onReset = () => {
        setPrompt("");
        setHasResult(false);
        setIsLoading(false);
      };

    let displayedElement = null;

    if (hasResult) {
        displayedElement = (
        <Results 
          snippet={snippet} 
          keywords={keywords} 
          onBack={onReset} 
          prompt={prompt}/>
      );
    } else {
        displayedElement = (
        <Form 
          prompt={prompt} 
          setPrompt={setPrompt} 
          onSubmit={onSubmit} 
          isLoading={isLoading} 
          characterLimit={CHARACTER_LIMIT} />
      );
    }

    const gradientTextStyle = 
      "text-white text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 font-light w-fit mx-auto";

    return (
      
     
        <div className="h-screen flex">
          <div className="max-w-xl m-auto p-3">
            <div className="bg-gray-800 p-6 rounded-md text-white">
              <div className="text-center my-5">
                <Image src={logo}  height={110} />
                <h1 className={gradientTextStyle + " text-3xl text-white font-light"}>GanKitt!</h1> 
                <div className={gradientTextStyle}>Your AI branding assistance</div>
              </div>
              {displayedElement}
            </div>
          </div>
       </div>
      

     );
};

export default GanKitt;