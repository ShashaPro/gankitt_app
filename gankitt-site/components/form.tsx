interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {

    const isPromptValid = props.prompt.length < props.characterLimit;
    const updatePromptValue = (text: string) => {
        if (text.length <= props.characterLimit) {
            props.setPrompt(text);
        }
    };

    let statusColor = "text-slate-400";
    let statusText = "This is a status";

    if (!isPromptValid) {
        statusColor = "text-red-400";
        statusText = `Input must be less than ${props.characterLimit} characters.`;
    } 

    return (
    <>
      <div className="mb-6 text-slate-400">
        <p>
          Tell me what is about and I will generate copy and keywords for you
        </p>
      </div>
        <input 
           className="p-2 w-full rounded-sm focus:outline-orange-400 focus:outline text-gray-800 mb-1"
           type="text" 
           placeholder="coffee"
           value={props.prompt}
           onChange={(e) => updatePromptValue(e.currentTarget.value)}
        >
        </input>
        <div className={statusColor + " flex justify-between my-1 mb-5 text-sm"}>
          <div>{statusText}</div>
          <div>
            {props.prompt.length}/{props.characterLimit}
          </div>
        </div>
        <button 
           className="bg-gradient-to-r from-red-400 to-orange-500 
           disabled:opacity-50 w-full p-2 rounded-sm hover:opacity-15 mb-7"
           onClick={props.onSubmit} 
           disabled={props.isLoading || !isPromptValid}>Submit
        </button>
    </>

   );

};

export default Form;