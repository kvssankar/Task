import React from "react";
import "../rightbar.css";
const RightBar = () => {
    return (
        <div className="right-bar">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sankarkvs/"
            >
                <img
                    src="https://image.flaticon.com/icons/svg/174/174857.svg"
                    alt=""
                />
            </a>
            <a target="_blank" 
            rel="noopener noreferrer"
            href="https://instagram.com/kvs_sk?igshid=1kyz5t4qiavbp">
                <img
                    src="https://image.flaticon.com/icons/svg/2111/2111463.svg"
                    alt=""
                />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/reacter.reacter.7/">
                <img
                    src="https://image.flaticon.com/icons/svg/2111/2111398.svg"
                    alt=""
                />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kvssankar">
                <img
                    src="https://image.flaticon.com/icons/svg/733/733553.svg"
                    alt=""
                />
            </a>
        </div>
    );
};

export default RightBar;