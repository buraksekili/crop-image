import React, { useState } from "react";
import ProcessImage from "react-imgpro";

const App = () => {
    const [image, setImage] = useState(null);
    const [imageRef, setImageRef] = useState(null);
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);

    return (
        <div>
            <input
                type="file"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setImage(URL.createObjectURL(event.target.files[0]));
                }}
            />
            {image ? (
                <div>
                    <ProcessImage
                        image={image}
                        crop={{ width, height }}
                        // crop={{ w: width, h: height, x: 20, y: 40 }}
                    />
                </div>
            ) : (
                <p>not yet</p>
            )}

            <div>
                <span>Height: </span>
                <input
                    value={height}
                    type="number"
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                />

                <span style={{ marginLeft: "10px" }}>Width: </span>
                <input
                    value={width}
                    type="number"
                    onChange={(e) => setWidth(parseInt(e.target.value))}
                />
            </div>
        </div>
    );
};

export default App;
