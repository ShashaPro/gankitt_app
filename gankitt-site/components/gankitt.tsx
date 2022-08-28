import React from "react";

const GanKitt: React.FC = () => {
   
    
    const [prompt, setPrompt] = React.useState("");
    const [snippet, setSnippet] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
  
    const apiUrl = `https://s74bg84508.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords?prompt=${prompt}`

    // Option I
  
    // const onSubmit = () => {
    //   console.log("Submitting: " + prompt);
    //   fetch(apiUrl)
    //     .then((res) => res.json())
    //     .then(onResult);
    // };
  
    // const onResult = (data: any) => {
    //   setSnippet(data.snippet);
    //   setKeywords(data.keywords);
    // };

    // console.log(snippet);
    // console.log(keywords);
    

    return (
      <>
        <h1>Hello</h1> 
        <p>Tell me what is about and I will generate copy and keywords for you</p>
        <input 
           type="text" 
           placeholder="coffee"
           value={prompt}
           onChange={(e) => setPrompt(e.currentTarget.value)}
        >
        </input>
        <button onClick={onSubmit}>Submit</button>
      </>
     );
};

export default GanKitt;