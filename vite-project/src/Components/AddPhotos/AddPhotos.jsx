import useAddImage from "../Hooks/useAddImage";

function AddPhotos()
{
    const [handleImageInput,addImage,message] = useAddImage();
    const handleButton=()=>{
        addImage();
    }

    

    return (
        <>
        <div className="section register" >
            <h2>Add Photos</h2>
            <div>
            <label htmlFor="">Enter the Image Url :</label>
            <input type="text" onChange={handleImageInput} />
            </div>
            <label htmlFor="" className="labelResp">{message}</label>
            <button onClick={handleButton}>Add</button>
        </div>
        </>
    )
}

export default AddPhotos