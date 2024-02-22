import React from 'react';

export const guardian = [
    {
        name: "parentName",
        placeholder: "Type guardian name in English",
        id: "parentName",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: ""
    },
    {
        name: "parentId",
        placeholder: "Type your ID",
        id: "parentId",
        className: "",
        maxLength: 11,
        type: "number",
        autoComplete: "no",
        defaultValue: ""
    },
    {
        name: "email",
        placeholder: "Type your email",
        id: "email",
        className: "fontEnglish",
        type: "email",
        autoComplete: "no",
        defaultValue: ""
    },
    {
        name: "mobileNumber_country_code",
        placeholder: "Country Code",
        className: "",
        id: "mobileNumber_country_code",
        type: "number",
        disabled: "",
        minLength: 3,
        maxLength: 3
    },
    {
        name: "mobileNumber",
        placeholder: "Type your mobile number",
        id: "mobileNumber",
        className: "",
        type: "text",
        maxLength: 8,
        autoComplete: "no",
        defaultValue: ""
    },
    {
        name: "agree",
        switchkey: "checkbox",
        id: "agree",
        type: "checkbox",
        label: "I agree to the studio 5",
        ariaLabel: "Read terms and condition",
        className: "modal-trigger underline-text"
    }
];

function Jsonguardian() {
    return (
        <div>
            {guardian.map((item) => {
                switch (item.type) {
                    case "text":
                        return (
                            <input
                                key={item.id}
                                name={item.name}
                                placeholder={item.placeholder}
                                id={item.id}
                                className={item.className}
                                type="text"
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
                                type="number"
                                maxLength={item.maxLength}
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
                                type="text"
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
            })}
        </div>
    );
}

export default Jsonguardian;
