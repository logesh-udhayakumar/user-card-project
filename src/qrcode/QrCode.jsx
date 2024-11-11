import { useState } from "react";
import PropTypes from "prop-types";

export const QrCode = () => {
const [qrimage,setQr] = useState("");
const [loading,setLoading] = useState();
const [qrdata,setQrdata] = useState("");
const [qrsize,setQrsize] = useState("");
const [error,setError] = useState("");
const [qrgenerate,setQrgenerate] = useState(false);

async function GenerateQR(){
    if(qrdata !== "" && qrsize !== ""){
        setLoading(true);
    try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?size${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
        setQr(url);
    }catch(error){console.log("error: ",error)}
    finally{
        setLoading(false);
    }}
    if (qrdata === "" || qrsize === "") {
        setError("Please enter the data and size!");
        return;
    }setQrgenerate(true);
}

function DownloadQr(){
  if(qrdata !== "" && qrsize !== "" && qrgenerate){
    fetch(qrimage).then((response)=>response.blob()).
    then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch((error)=>{
        console.log("QRcode downloading error: ",error);
    });
}
setError("Please generate the QR first!");
}
  return (
    <>
    <div className="qr-container">
        <div className="qr-main-container">
        <img className="qr-img" src="images/qrcode/qrimg.jpg" alt="qr"></img>
                <h3>QR Generator Online</h3>
                <p>Create your own QR!</p>
                {qrdata !== "" && qrsize !== "" && loading && <p>Loading...</p>}
                {(qrdata === "" || qrsize === "" || !qrgenerate) && error && <p className="error-msg">{error}</p>}
                {qrdata !== "" && qrsize !== "" && qrimage && (
    <img className="qr-image" src={qrimage} alt="Generated QR Code" />
)}
            <div className="input-data">
                <label htmlFor="dataInput" className="input-label">
                    Data for your QRCode
                </label>
                <input type="text" value={qrdata} id="dataInput" placeholder="https://example.com" 
                onChange={(e)=>setQrdata(e.target.value)}></input>
                <label htmlFor="sizeInput" className="input-label">
                    Size of QRCode (eg., 150)
                </label>
                <input type="number" id="sizeInput" value={qrsize} placeholder="Enter QR image size"
                onChange={(e)=>setQrsize(e.target.value)}></input>
                <button className="generate-button" onClick={GenerateQR} disabled={qrdata !== "" && qrsize !== "" && loading}>Generate QR code</button>
                <button className="download-button" onClick={DownloadQr}>Download</button>
            </div>
            </div>
        </div>
    </>
  )
}