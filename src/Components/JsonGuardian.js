import React from 'react';

export const guardian = [
    {
        name: "parentName",
        label: "Guardian name in English",
        placeholder: "Type guardian name in English",
        id: "parentName",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        htmlFor: "parentName",
        className: "asterisk",
        label: "Guardian name in English",

    },
    {
        name: "parentId",
        label: " Guardian QID",
        placeholder: "Type your ID",
        id: "parentId",
        className: "",
        maxLength: 11,
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        htmlFor: "parentId",
        className: "asterisk"
    },
    {
        name: "email",
        label: "Type your email",
        Guardian: "Email Address ",
        placeholder: "Type your email",
        id: "email",
        className: "fontEnglish",
        type: "email",
        autoComplete: "no",
        defaultValue: "",
        type: "email",
        htmlFor: "email",
        className: "asterisk"
    },
    {
        label: "Mobile number",
        name: "mobileNumber",
        placeholder: "Type your mobile number",
        id: "mobileNumber",
        className: "",
        type: "number",
        maxLength: 8,
        autoComplete: "no",
        defaultValue: ""
    },
    {
        name: "agree",
        type: "checkbox",
        id: "agree",
        type: "checkbox",
        label: "I agree to the studio 5",
        ariaLabel: "Read terms and condition",
        className: "modal-trigger underline-text",
        htmlFor: "agree"
    }
];

function Jsonguardian() {
    return (
        <div>
            {/* {guardian.map((item) => {
                switch (item.type) {
                    case "text":
                    case "email":
                        return (
                            <input
                                key={item.id}
                                name={item.name}
                                placeholder={item.placeholder}
                                id={item.id}
                                className={item.className}
                                type={item.type === "text" ? "text" : "email"}
                                autoComplete={item.autoComplete}
                                defaultValue={item.defaultValue}
                                style={{ textAlign: "left" }}
                            />
                        );
                    case "number":
                        return (
                            <input
                                key={item.id}
                                name={item.name}
                                placeholder={item.placeholder}
                                id={item.id}
                                className={item.className}
                                type={item.type}
                                maxLength={item.maxLength}
                                autoComplete={item.autoComplete}
                                defaultValue={item.defaultValue}
                                style={{ textAlign: "left" }}
                            />
                        );
                    case "checkbox":
                        return (
                            <input
                                key={item.id}
                                name={item.name}
                                id={item.id}
                                type="checkbox"
                                className={item.className}
                            />
                        );
                    default:
                        return null;
                }
            })} */}

        </div>
    );
}

export default Jsonguardian;
