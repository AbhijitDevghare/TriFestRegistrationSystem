import "./About.css"
import Abhi from "./Abhi.jpg"
import MenuBar from "../menuBar/menuBar"

function About()
{
   return(
<> 
    <MenuBar/>
    <br /><br /><br />  
    <h1>Website developed by <br />Abhijit Devghare</h1>

    <div className="about">
        
        <section id="aboutBlock">
   
                
    <p className="para1">   
    Hello , I am </p>
        <h1>Abhijit Devghare</h1>   
    <p className="para1"> 
    
      I am a <b>BCA student</b>, currently studying in K.L College in Amravati, Maharashtra. I have a bigger  dreams. And  I wanted one thing in my life is , I wish I should not stop learning things . First I want to be the good listener. If I talk about my carrer I want to a <b>software developer</b> who can try to solve any problem related to the software not just the solution in knowledge but to find new solution to the problems.
      I try to solve problems by own that makes me approachable to any problems.
      I wish i will become the one of the best person in my field.
      I believe in Lord Shri Krishna and I think whatever will be I will accept it move on. Lord Krishna keeps me motivated when  I feel 
      <br/>
      That's all about me...
      <br />
      Follow me on instagram :
      <a href="https://www.instagram.com/abhi_dev04/"><u>abhi_dev04</u></a>
</p>
</section>

<section id="aboutPhoto">

            <img src={Abhi} alt="Image Not Found"/>

        </section>


    </div>

    
</>
   )
}

export default About