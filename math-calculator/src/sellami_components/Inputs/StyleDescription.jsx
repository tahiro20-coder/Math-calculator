function Emph(descriptiontext){
    return "\ \\textit{{{"+descriptiontext+"}}} \ ";

}

function Container(descriptiontext){
    return "\\\\ \  \\\\ {"+descriptiontext+"} \\\\ \  \\\\";
}

function Bold(descriptiontext){
    return '\\textbf{}{'+descriptiontext+'}';
}

function NewLine(){
    return '\\\\';
}

function HyperLink(descriptiontext){
    
    return '\\url{'+descriptiontext+'}   ';
}

export {Emph,Container,Bold,NewLine,HyperLink}