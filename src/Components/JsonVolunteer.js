export const volunteer = [
    {
        name: "name",
        placeholder: "tyvo",
        id: "name",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        label: "volname"
    },
    {
        name: "nameArabic",
        placeholder: "tyar",
        id: "nameArabic",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        label: "vol2"
    },
    {
        name: "qid",
        placeholder: "typegid",
        id: "qid",
        className: "",
        maxLength: 11,
        type: "text",
        autoComplete: "no",
        defaultValue: "",
        label: "qid"
    },
    {
        type: "radio",
        label: "gen",
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
        label: "dob",
        arialabel: "choose date of birth button",
        type: "date",
        className: "example-custom-input",
        ariahidden: "true",
        htmlFor: "dob",
        defaultValue: "dd-mm-yyyy",
    },
    {
        name: "email",
        label: "email",
        placeholder: "email",
        id: "email",
        className: "fontEnglish",
        type: "email",
        autoComplete: "no",
        defaultValue: "",
    },

    {
        name: "mobile",
        type: "mobile",
        placeholder: "pgmob",
        id: "mobile",
        className: "",
        type: "number",
        defaultValue: "",
        label: "phone",
        ariaLabel: "Mobile number",
        maxLength: 8,
        htmlFor: "mobile",
    },
    {
        name: "agree",
        type: "checkbox",
        id: "s",
        type: "checkbox",
        label: "agree",
        ariaLabel: "Read terms and condition",
        className: "modal-trigger underline-text"
    }
]