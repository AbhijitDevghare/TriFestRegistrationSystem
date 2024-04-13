import useAddCompetition from "../Hooks/useAddCompetition";
import "./AddCompetition.css"
function AddCompetition()
{

    const [handleName,handleImageUrl,handleDetails,handleFees,handleStartDate,handleEndDate,handleFirstPrize,handleSecondPrize,handleThirdPrize,handleFirstCoordinator,handleSecondCoordinator,handleThirdCoordinator,handleCoordinatorContact,handleTime,add,message] = useAddCompetition()


    
    const handleAddComp =()=>{
        add();
        console.log("ADD BUTTON CLICKED")

    }
    
    return (
        <>
            <div className="compEdit" >
                <br />
            <h2>Add Competition</h2>
            <br />

            <div>
                <label>Competition <br />Name : </label>
                <input type="text" onChange={handleName} />
                <label htmlFor="">Image <br />Url :</label>
                <input type="text"  onChange={handleImageUrl}/>
            </div>
            
            <div>
                <label htmlFor="">Description : </label>
                <textarea rows="6" cols="50" onChange={handleDetails}></textarea>
            </div>

            <div>
            <label htmlFor="">Fees : </label>
            <input type="text" name="" id="" onChange={handleFees}/>
            </div>

                <label htmlFor="">Coordinators : </label>
            <div>
                <label htmlFor="">Coordinator 1 :</label>
                <input type="text" name="" id="" onChange={handleFirstCoordinator} />
                <label htmlFor="">Coordinator 2 :</label>
                <input type="text" onChange={handleSecondCoordinator} />
            </div>
            <div>
                <label htmlFor="">Coordinator 3 :</label>
                <input type="text" onChange={handleThirdCoordinator} />
                <label htmlFor="">Coordinator <br /> Contact Number :</label>
                <input type="text" onChange={handleCoordinatorContact} />
            </div>
             
            <div>
                <label htmlFor="">Start Date : </label>
                <input type="text" onChange={handleStartDate}/>
                <label htmlFor="">End Date : </label>
                <input type="text" onChange={handleEndDate} />
            </div>
            <div>
                <label htmlFor="">Time : </label>
                <input type="text" onChange={handleTime}/>
            </div>
            <div>
                <label htmlFor="">Prize</label>
            </div>
            <div>
                <label htmlFor="">First Prize : </label>
                <input type="text" onChange={handleFirstPrize} />
                <label htmlFor="">Second Prize : </label>
                <input type="text" onChange={handleSecondPrize} />
            </div>
            <div>
                
                <label htmlFor="">Third Prize : </label>
                <input type="text" name="" id=""  onChange={handleThirdPrize}/>
            </div>
            
                
                <label htmlFor="" className="labelResp">{message.message}</label>
            
            
            <button onClick={handleAddComp}>Add</button>
            </div>

        </>
    )
}


export default AddCompetition