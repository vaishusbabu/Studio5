import React from 'react';

export const guardian = [
    {
        name: "parentName",
        label: "gname",
        placeholder: "pg",
        id: "parentName",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        htmlFor: "parentName",
        className: "asterisk",
    },
    {
        name: "parentId",
        label: "gid",
        placeholder: "pgid",
        id: "parentId",
        maxLength: 11,
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        htmlFor: "parentId",
        className: "asterisk",
    },
    {
        name: "email",
        label: "gemail",
        Guardian: "Email Address ",
        placeholder: "pgmail",
        id: "email",
        className: "fontEnglish",
        type: "email",
        autoComplete: "no",
        defaultValue: "",
        htmlFor: "email",
    },
    {
        label: "gmob",
        name: "mobileNumber",
        placeholder: "pgmob",
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
        label: "term",
        ariaLabel: "Read terms and condition",
        className: "modal-trigger underline-text",
        htmlFor: "agree"
    }
];

function Jsonguardian() {
    return
}

export default Jsonguardian;