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
        label: "Guardian name in English"
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
        className: "asterisk",
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
    return
}

export default Jsonguardian;