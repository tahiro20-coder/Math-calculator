import React,{useEffect, useRef, useState} from 'react'
import "../Css/Gradient_Linear_Regression.css"
import { BlockMath } from 'react-katex'; 
import Container from '../Container';
import Title from '../Title';

const Gradient_Linear_Regression = () => {
  let [data,setdata] = useState([]);
  const [pos,setpos] = useState(0)
  const graph = useRef(null);
  let [theta_0,settheta_0] = useState(0);
  let [theta_1,settheta_1] = useState(1);
  const line = useRef(null);
  const runBtn = useRef(null);
  const [ running ,setrunning] = useState(false);
  const [reset,setreset] = useState(false);

  useEffect(() => {
    
    if(running){
      runBtn.current.innerHTML = "Stop";
    }else{
      if(reset){
        setdata([]); // remove the points data //
  
      // reset the function //
      settheta_0(0);
      settheta_1(1);
      setreset(false)
      console.log("iam in")
      }
      runBtn.current.innerHTML = "Run";
    }
    if (graph.current) {
      // console.log(graph)
      setpos(graph.current.getBoundingClientRect());
    }
    drawLine();
   
    const timer1 = setInterval(() => {

      if (running) {
        if (data.length >= 2) {
            gradientDecent();
            drawLine();
        }
    }else{
      clearInterval(timer1);
    }
      
    }, 50);
    
    const timer2 = setInterval(() => {
      if (running) {
          result.innerHTML =
              "H(x)= " + theta_0.toFixed(2) + " + " + theta_1.toFixed(2) + " * x";
      }else{
        clearInterval(timer2);
      }
  }, 500);


    return () => {
      settheta_0(theta_0);
      settheta_1(theta_1);
      setdata(data);
      clearInterval(timer1); 
      clearInterval(timer2); }
  }, [running]);
  
  const HandleGraphClick = (e)=>{
    var bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;

    // add the new point to the graph //
    let point = document.createElement("div");
    point.classList.add("point");
    point.style.left = x + "px";
    point.style.top = y + "px";
    
    // console.log(graph)
    graph.current.appendChild(point);
    
    //  //

    // add the new credent to the data var //
    x = Math.floor(x);
    y = Math.floor(
        window.getComputedStyle(graph.current).getPropertyValue("height").split("px")[0] - y
    );
    // console.log(x,y)
    data.push({ x, y });
  }
  const gradientDecent = () =>{
    let costSum_0 = 0;
    let costSum_1 = 0;

    let n = data.length;
    let learningRate = 0.000001;

    // calc the cost //
    for (let i = 0; i < n; i++) {
        let x = data[i].x;
        let y = data[i].y;

        let guess = theta_0 + theta_1 * x;
        let error = guess - y ;
        // console.log("g,er",guess,error,x,y,theta_0,theta_1)
        // costSum_0 += learningRate * 1000 * error;
        // costSum_1 += (learningRate / n) * error * x;
        costSum_0 += error * 1000000
        costSum_1 += x*error 
    }
    //  //
    // console.log("chane",learningRate * ((-2/n)*costSum_0),learningRate * ((-2/n)*costSum_1))
    // console.log(theta_0,theta_1)
    theta_0 -= learningRate * ((1/n)*costSum_0);
    theta_1 -= learningRate * ((1/n)*costSum_1);
  }
  const drawLine = () => {
    let x1 = 0;
    let y1 = theta_0 + theta_1 * x1;
    let x2 = window
        .getComputedStyle(graph.current)
        .getPropertyValue("width")
        .split("px")[0];
    let y2 = theta_0 + theta_1 * x2;

    let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let midX = (x1 + x2) / 2;
    let midY = (y1 + y2) / 2;

    let slopeInRadian = Math.atan2(y1 - y2, x1 - x2);
    let slopeInDegrees = (slopeInRadian * 180) / Math.PI;

    line.current.style.width = distance + "px";
    line.current.style.left = midX - (distance / 2) + "px";
    line.current.style.bottom = midY + "px";
    line.current.style.transform = "rotate(" + -slopeInDegrees + "deg)";
  }
  const HandleReset = () =>{
    let graphPoints = document.querySelectorAll(".gradient-decent .graph .point");
    graphPoints.forEach((point) => {
        graph.current.removeChild(point);
    });
    //  //

    setdata([]); // remove the points data //

    // reset the function //
    settheta_0(0);
    settheta_1(1);

    result.innerHTML =
              "H(x)= " + 0 + " + " + 1+ " * x";
    
   setreset(true)
    if(running){
      HandleRunning()
    }
    
    // drawLine();

    
  }
  const HandleRunning = () =>{

    setrunning(running === false ? true : false);

    runBtn.current.classList.toggle("running");

    runBtn.current.innerHTML = runBtn.innerHTML === "Run" ? "Stop" : "Run";
  }

  const result = document.querySelector(".fx");

  const Description = `
  \\textit{This is an interactive function where you can add points by clicking and view the 
  changing of the slope line using gradient descent,where this function is calculating the slope by the 
  following formuls :} \\\\
    \\theta_0 := \\theta_0 - \\alpha\\frac{1}{n}\\sum_{i=1}^n(h_\\theta (x^{(i)}) - y^{(i)}) \\\\
    \\theta_1 := \\theta_1 - \\alpha\\frac{1}{n}\\sum_{i=1}^n(h_\\theta (x^{(i)}) - y^{(i)}).x^{(i)}
  `
  return (
    <>
    <Title title={"Description"}/>
    <Container title={"Function Description"} content={<BlockMath math={Description}/> }/>
    <Title title={"Interactive Input"}/>
    <section className="gradient-decent">
    {/* <h2>
        Gradient Decent With <br />
        Linear Regression
        
    </h2> */}
    
    <div className="run">
        <span className="run-btn" ref={runBtn} onClick={()=>{
          if(data.length >= 2){
            HandleRunning()
          }
        }} >Run</span>
    </div>

    <div className="control">
        <span className="reset" onClick={HandleReset}>Reset</span>
        <span>Click to add Point</span>
    </div>

    <div className="graph" ref={graph} onClick={(event)=>{HandleGraphClick(event)}}>
        <div className="line" ref={line}></div>
    </div>

    <p className="fx">H(x)= 0 + 1 * x</p>
    </section>
    </>
  )
}

export default Gradient_Linear_Regression