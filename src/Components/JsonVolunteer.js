export const volunteer = [
    {
        name: "name",
        placeholder: "Type name in English",
        id: "name",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        label: "Name in English"
    },
    {
        name: "nameArabic",
        placeholder: "Type name in Arabic",
        id: "nameArabic",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        label: "Name in Arabic"
    },
    {
        name: "qid",
        placeholder: "Type your QID",
        id: "qid",
        className: "",
        maxLength: 11,
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        label: "QID"
    },
    {
        type: "radio",
        label: "Gender",
        htmlFor: "gender",
        id: "gender",
        details: [{
            className: "Male",
            ariachecked: "false",
            id: "Male",
            arialabelledby: "gender Male",
            type: "radio",
            labelid: "_Male",
            label: "Male",
            htmlFor: "Male",
        },
        {
            className: "Female",
            ariachecked: "false",
            id: "Female",
            arialabelledby: "gender Female",
            type: "radio",
            labelid: "_Female",
            label: "Female",
            htmlFor: "Female"
        }]
    },
    {
        placeholder: "dd-mm-yyyy",
        label: "Date of Birth",
        arialabel: "choose date of birth button",
        type: "date",
        className: "example-custom-input",
        ariahidden: "true",
        htmlFor: "dob",

        defaultValue: "dd-mm-yyyy",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Type your email",
        id: "email",
        className: "fontEnglish",
        type: "email",
        autoComplete: "no",
        defaultValue: "",
    },

    {
        name: "mobile",
        type: "mobile",
        placeholder: "Type your mobile number",
        id: "mobile",
        className: "",
        type: "number",
        defaultValue: "",
        label: "Mobile Number",
        ariaLabel: "Mobile number",
        maxLength: 8,
        htmlFor: "mobile",
    },
    {
        name: "agree",
        type: "checkbox",
        id: "agree",
        type: "checkbox",
        label: "I agree to the studio 5",
        ariaLabel: "Read terms and condition",
        className: "modal-trigger underline-text"
    }
]