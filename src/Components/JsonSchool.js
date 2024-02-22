import React from 'react'

export const schoolData = [
    {
        className: "browser-default",
        name: "schoolName",
        id: "schoolName",
        input: "[object Object]",
        tabIndex: 0,
        options: [
            { value: 253, label: "-" },
            { value: 163, label: "A bayan p2" },
            { value: 241, label: "ACS Doha International School" },
            { value: 165, label: "Al Hammad International School" },
            { value: 312, label: "Al Rayyan private school" },
            { value: 16, label: "Al-Khor International School (Indian Stream)" }
        ]
    },
    {
        name: "repName",
        placeholder: "Type name in English",
        id: "repName",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",

    },
    {
        name: "repNameArabic",
        placeholder: "Type name in Arabic",
        id: "repNameArabic",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
    },
    {
        name: "qid",
        placeholder: "Type your QID",
        id: "qid",
        className: "",
        type: "number",
        maxLength: 11,
        autoComplete: "no",
        defaultValue: "",
    },
    {
        name: "repPosition",
        placeholder: "Type your position",
        id: "repPosition",
        className: "",
        type: "text",
        autoComplete: "no",
        defaultValue: "",
    },
    {
        name: "repMobile_country_code",
        placeholder: "Country Code",
        className: "",
        id: "repMobile_country_code",
        type: "number",
        minLength: 3,
        maxLength: 3,
    },
    {
        name: "repMobile",
        placeholder: "Type your mobile number",
        className: "",
        id: "repMobile",
        maxLength: 8,
        label: "Mobile number starting with country code +974",
        type: "number",
        autoComplete: "no",
        defaultValue: "",
    },
    {
        name: "repEmail",
        placeholder: "Type your email",
        id: "repEmail",
        className: "fontEnglish",
        type: "email",
        autoComplete: "no",
        defaultValue: "",
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
]

function jsonSchool() {
    return (
        <div>
            {
                schoolData.map((item) => {
                    switch (item.type) {
                        case "text":
                            return (
                                <input
                                    name="repName"
                                    placeholder="Type name in English"
                                    id="repName"
                                    className=""
                                    type="text"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />


                            );
                        case "number":
                            return (
                                <input
                                    name="qid"
                                    placeholder="Type your QID"
                                    id="qid"
                                    className=""
                                    type="text"
                                    maxLength={11}
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                            );
                    }
                })
            }
        </div>
    )
}

export default jsonSchool
