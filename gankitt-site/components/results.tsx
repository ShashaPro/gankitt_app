interface ResultsProps {
    prompt: string;
    snippet: string;
    keywords: string[];
    onBack : any;
}


const Results: React.FC<ResultsProps> = (props) => {
    const keywordElements = [];
    for (let i = 0 ; i < props.keywords.length; i++) {
        const element = <div key={i} className="bg-orange-200 p-1 rounded-sm text-orange-900 px-2 text-sm">#{props.keywords[i]}</div>;
        keywordElements.push(element);
    }

    const keywordElementsHolder = <div className="flex flex-wrap gap-2">{keywordElements}</div>
    const resultSection = (label: string, body: any) => {

        return (
          <div className="bg-slate-700 p-4 my-3 rounded-sm">
            <div className="text-slate-500 text-sm font-bold ">{label}</div>
            <div>{body}</div>
          </div>
        );
    };

    return (
        <>
            <div className="mb-6">
                {resultSection(
                    "Prompt", 
                    <div className="text-lg font-bold">{props.prompt}</div>
                 )}
                {resultSection("Branding Snippet", props.snippet )}
                {resultSection("Keywords", keywordElementsHolder )}
            
            </div>
            <button 
                className="bg-gradient-to-r from-red-400 to-orange-500 
                disabled:opacity-50 w-full p-2 rounded-sm hover:opacity-15 mb-7"
                onClick={props.onBack} 
                >Back
           </button>
        </>
    )

};

export default Results;