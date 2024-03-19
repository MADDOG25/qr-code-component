import { useState } from "react";
import { QRCode } from "react-qr-code";

function App() {
  const [value, setValue] = useState("https://github.com/MADDOG25"); //state para el valor
  const [size, setSize] = useState(256); //state para el tamaño

  return (
    <>
    <body className='bg-[#d5e1ef]'>

      <div className="flex justify-center items-center p-8 h-screen w-screen">
        <div className="child-cont flex justify-center items-center flex-col flex-nowrap  bg-[#ffffff]">
          <div className="qr-cont bg-[#2b7dfa] flex justify-center items-center m-4 max-h-[100vh] h-full">
            <QRCode
              className="qr-code cursor-pointer p-4 m-4"
              value={value}
              size={size}
              bgColor={"#2b7dfa"}
              fgColor={"#fefffb"}
              style={{
                height: "auto",
                width: "75%",
              }}
            />
          </div>
          <div className="p-8 w-full text-center">
            <p className="text-base font-bold pb-4">
              Improve your front-end skills by building projects
            </p>
            <p className="text-xs font-normal">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!
            </p>
          </div>
        </div>
      </div>
    </body>
    </>
  );
}

export default App;
