// function Guardian() {
//     const [formData, setFormData] = useState({
//       parentName: "",
//       parentId: "",
//       email: "",
//       mobileNumber: "",
//       agree: false
//     });
//     const [errors, setErrors] = useState({});

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (validateForm()) {
//         console.log(formData);
//         // Add logic to submit the form data
//       } else {
//         console.log("Form is invalid");
//       }
//     };

//     const handleOnChange = (e) => {
//       const { name, value, type, checked } = e.target;
//       const newValue = type === "checkbox" ? checked : value;
//       setFormData({ ...formData, [name]: newValue });
//       setErrors({ ...errors, [name]: "" }); // Clear the error message when the field is changed
//     };

//     const validateForm = () => {
//       let isValid = true;
//       const newErrors = {};

//       // Validation logic for each field
//       if (!formData.parentName.trim()) {
//         newErrors.parentName = "Parent name is required.";
//         isValid = false;
//       }

//       if (!formData.parentId.trim()) {
//         newErrors.parentId = "Parent ID is required.";
//         isValid = false;
//       }

//       if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//         newErrors.email = "Please enter a valid email address.";
//         isValid = false;
//       }

//       if (!formData.mobileNumber.trim() || !/^\d{8,}$/.test(formData.mobileNumber)) {
//         newErrors.mobileNumber = "Please enter a valid mobile number.";
//         isValid = false;
//       }

//       if (!formData.agree) {
//         newErrors.agree = "You must agree to the terms and conditions.";
//         isValid = false;
//       }

//       setErrors(newErrors);
//       return isValid;
//     };

//     const ErrorList = ({ errors }) => {
//       if (Object.keys(errors).length === 0) {
//         return null;
//       }

//       return (
//         <ul className="error-list">
//           {Object.values(errors).map((error, index) => (
//             <li key={index}>{error}</li>
//           ))}
//         </ul>
//       );
//     };

//     return (
//       <div>
//         <form autoComplete="no" onSubmit={handleSubmit}>
//           <ErrorList errors={errors} />
//           {guardian.map((item) => {
//             switch (item.type) {
//               case "text":
//               case "email":
//                 return (
//                   <div className="input-field item" key={item.id}>
//                     <input
//                       name={item.name}
//                       placeholder={item.placeholder}
//                       id={item.id}
//                       className={item.className}
//                       type={item.type}
//                       autoComplete={item.autoComplete}
//                       defaultValue={item.defaultValue}
//                       style={{ textAlign: "left" }}
//                       onChange={handleOnChange}
//                     />
//                     <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
//                       {item.label}
//                     </label>
//                   </div>
//                 );
//               case "number":
//                 return (
//                   <div className="row mobile" key={item.id}>
//                     <div className="col s4">
//                       <div className="input-field item">
//                         <input
//                           name="mobileNumber_country_code"
//                           placeholder="Country Code"
//                           className=""
//                           id="mobileNumber_country_code"
//                           type="text"
//                           minLength={3}
//                           maxLength={3}
//                           disabled
//                           value="+974"
//                           style={{ textAlign: "left" }}
//                           onChange={handleOnChange}
//                         />
//                         <label htmlFor="mobileNumber_country_code" className="active" style={{ left: 0, right: "auto" }}>
//                           Country Code *
//                         </label>
//                       </div>
//                     </div>
//                     <div className="col s8">
//                       <div className="input-field item">
//                         <input
//                           name={item.name}
//                           placeholder={item.placeholder}
//                           id={item.id}
//                           className={item.className}
//                           maxLength={item.maxLength}
//                           type={item.type}
//                           aria-label={item.ariaLabel}
//                           autoComplete="no"
//                           defaultValue={item.defaultValue}
//                           style={{ textAlign: "left" }}
//                           onChange={handleOnChange}
//                         />
//                         <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
//                           {item.label} <span className="asterisk"> </span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               case "checkbox":
//                 return (
//                   <div className="item subscribe-items" key={item.id}>
//                     <p>
//                       <input
//                         name={item.name}
//                         id={item.id}
//                         type="checkbox"
//                         className={item.className}
//                         onChange={handleOnChange}
//                       />
//                       <label htmlFor={item.id}>
//                         <span className="en">
//                           {item.label}
//                           <button
//                             type="button"
//                             aria-label="Read terms and condition"
//                             tabIndex={0}
//                             className="modal-trigger underline-text"
//                             style={{ border: 0, background: "none" }}
//                           >
//                             {" "}
//                             Terms and conditions
//                           </button>
//                         </span>
//                       </label>
//                     </p>
//                   </div>
//                 );
//               default:
//                 return null;
//             }
//           })}
//           <div className="btn-wrap">
//             <button className="btn blue">Register</button>
//           </div>
//         </form>
//       </div>
//     );
//   }

//   export default Guardian;


// localStorage

// function Guardian() {
//     const [formData, setFormData] = useState({
//         parentName: "",
//         parentId: "",
//         email: "",
//         mobileNumber: "",
//         agree: false
//     });
//     const [errors, setErrors] = useState({});

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             console.log(formData);

//         } else {
//             console.log("Form is invalid");
//         }
//     };

//     const handleOnChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === "checkbox" ? checked : value;
//         setFormData({ ...formData, [name]: newValue });
//         setErrors({ ...errors, [name]: "" });
//     };

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         // Validation logic for each field
//         if (!formData.parentName.trim()) {
//             newErrors.parentName = "Parent name is required.";
//             isValid = false;
//         }

//         if (!formData.parentId.trim()) {
//             newErrors.parentId = "Parent ID is required.";
//             isValid = false;
//         }

//         if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = "Please enter a valid email address.";
//             isValid = false;
//         }

//         if (!formData.mobileNumber.trim() || !/^\d{8,}$/.test(formData.mobileNumber)) {
//             newErrors.mobileNumber = "Please enter a valid mobile number.";
//             isValid = false;
//         }

//         if (!formData.agree) {
//             newErrors.agree = "You must agree to the terms and conditions.";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     return (
//         <form autoComplete="no" onSubmit={handleSubmit}>
//             {guardian.map((item) => {
//                 switch (item.type) {
//                     case "text":
//                     case "email":
//                         return (
//                             <div className="input-field item" key={item.id}>
//                                 <input
//                                     name={item.name}
//                                     placeholder={item.placeholder}
//                                     id={item.id}
//                                     className={item.className}
//                                     type={item.type}
//                                     autoComplete={item.autoComplete}
//                                     defaultValue={item.defaultValue}
//                                     style={{ textAlign: "left" }}
//                                     onChange={handleOnChange}
//                                 />
//                                 <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
//                                     {item.label}
//                                 </label>
//                                 {errors[item.name] && <span className="helper-text" data-error={errors[item.name]} style={{ textAlign: "left" }}>{errors[item.name]}</span>}
//                             </div>
//                         );
//                     case "number":
//                         return (
//                             <div className="row mobile" key={item.id}>
//                                 <div className="col s4">
//                                     <div className="input-field item">
//                                         <input
//                                             name="mobileNumber_country_code"
//                                             placeholder="Country Code"
//                                             className=""
//                                             id="mobileNumber_country_code"
//                                             type="text"
//                                             minLength={3}
//                                             maxLength={3}
//                                             disabled
//                                             value="+974"
//                                             style={{ textAlign: "left" }}
//                                             onChange={handleOnChange}
//                                         />
//                                         <label htmlFor="mobileNumber_country_code" className="active" style={{ left: 0, right: "auto" }}>
//                                             Country Code *
//                                         </label>
//                                         <span className="helper-text" data-error="Enter a valid code." />
//                                     </div>
//                                 </div>
//                                 <div className="col s8">
//                                     <div className="input-field item">
//                                         <input
//                                             name={item.name}
//                                             placeholder={item.placeholder}
//                                             id={item.id}
//                                             className={item.className}
//                                             maxLength={item.maxLength}
//                                             type={item.type}
//                                             aria-label={item.ariaLabel}
//                                             autoComplete="no"
//                                             defaultValue={item.defaultValue}
//                                             style={{ textAlign: "left" }}
//                                             onChange={handleOnChange}
//                                         />
//                                         <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
//                                             {item.label} <span className="asterisk"> </span>
//                                         </label>
//                                         {errors[item.name] && <span className="helper-text" data-error={errors[item.name]} style={{ textAlign: "left" }}>{errors[item.name]}</span>}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     case "checkbox":
//                         return (
//                             <div className="item subscribe-items" key={item.id}>
//                                 <p>
//                                     <input
//                                         name={item.name}
//                                         id={item.id}
//                                         type="checkbox"
//                                         className={item.className}
//                                         onChange={handleOnChange}
//                                     />
//                                     <label htmlFor={item.id}>
//                                         <span className="en">
//                                             {item.label}
//                                             <button
//                                                 type="button"
//                                                 aria-label="Read terms and condition"
//                                                 tabIndex={0}
//                                                 className="modal-trigger underline-text"
//                                                 style={{ border: 0, background: "none" }}
//                                             >
//                                                 {" "}
//                                                 Terms and conditions
//                                             </button>
//                                         </span>
//                                     </label>
//                                     {errors[item.name] && <span className="helper-text" data-error={errors[item.name]} style={{ textAlign: "left" }}>{errors[item.name]}</span>}
//                                 </p>
//                             </div>
//                         );
//                     default:
//                         return null;
//                 }
//             })}
//             <div className="btn-wrap">
//                 <button className="btn blue">Register</button>
//             </div>
//         </form>
//     );
// }

// export default Guardian;




// function Test() {
//     const [formData, setFormData] = useState({
//         parentName: "",
//         parentId: "",
//         email: "",
//         mobileNumber: "",
//         agree: false
//     });
//     const [errors, setErrors] = useState({});

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             console.log(formData);

//         } else {
//             console.log("Form is invalid");
//         }
//     };

//     const handleOnChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === "checkbox" ? checked : value;
//         setFormData({ ...formData, [name]: newValue });
//     };

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         // Validation logic for each field
//         if (!formData.parentName.trim()) {
//             newErrors.parentName = "Parent name is required.";
//             isValid = false;
//         }

//         if (!formData.parentId.trim()) {
//             newErrors.parentId = "Parent ID is required.";
//             isValid = false;
//         }

//         if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = "Please enter a valid email address.";
//             isValid = false;
//         }

//         if (!formData.mobileNumber.trim() || !/^\d{8,}$/.test(formData.mobileNumber)) {
//             newErrors.mobileNumber = "Please enter a valid mobile number.";
//             isValid = false;
//         }

//         if (!formData.agree) {
//             newErrors.agree = "You must agree to the terms and conditions.";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     return (
//         <form autoComplete="no" onSubmit={handleSubmit}>
//             {guardian.map((item) => {
//                 switch (item.type) {
//                     case "text":
//                     case "email":
//                         return (
//                             <div className="input-field item" key={item.id}>
//                                 <input
//                                     name={item.name}
//                                     placeholder={item.placeholder}
//                                     id={item.id}
//                                     className={item.className}
//                                     type={item.type}
//                                     autoComplete={item.autoComplete}
//                                     defaultValue={item.defaultValue}
//                                     style={{ textAlign: "left" }}
//                                     onChange={handleOnChange}
//                                 />
//                                 <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
//                                     {item.label}
//                                 </label>
//                                 {errors[item.name] && <span className="helper-text" data-error={errors[item.name]} style={{ textAlign: "left" }} />}
//                             </div>
//                         );
//                     case "number":
//                         return (
//                             <div className="row mobile" key={item.id}>
//                                 <div className="col s4">
//                                     <div className="input-field item">
//                                         <input
//                                             name="mobileNumber_country_code"
//                                             placeholder="Country Code"
//                                             className=""
//                                             id="mobileNumber_country_code"
//                                             type="text"
//                                             minLength={3}
//                                             maxLength={3}
//                                             disabled
//                                             value="+974"
//                                             style={{ textAlign: "left" }}
//                                             onChange={handleOnChange}
//                                         />
//                                         <label htmlFor="mobileNumber_country_code" className="active" style={{ left: 0, right: "auto" }}>
//                                             Country Code *
//                                         </label>
//                                         <span className="helper-text" data-error="Enter a valid code." />
//                                     </div>
//                                 </div>
//                                 <div className="col s8">
//                                     <div className="input-field item">
//                                         <input
//                                             name={item.name}
//                                             placeholder={item.placeholder}
//                                             id={item.id}
//                                             className={item.className}
//                                             maxLength={item.maxLength}
//                                             type={item.type}
//                                             aria-label={item.ariaLabel}
//                                             autoComplete="no"
//                                             defaultValue={item.defaultValue}
//                                             style={{ textAlign: "left" }}
//                                             onChange={handleOnChange}
//                                         />
//                                         <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
//                                             {item.label} <span className="asterisk"> </span>
//                                         </label>
//                                         {errors[item.name] && <span className="helper-text" data-error={errors[item.name]} style={{ textAlign: "left" }} />}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     case "checkbox":
//                         return (
//                             <div className="item subscribe-items" key={item.id}>
//                                 <p>
//                                     <input
//                                         name={item.name}
//                                         id={item.id}
//                                         type="checkbox"
//                                         className={item.className}
//                                         onChange={handleOnChange}
//                                     />
//                                     <label htmlFor={item.id}>
//                                         <span className="en">
//                                             {item.label}
//                                             <button
//                                                 type="button"
//                                                 aria-label="Read terms and condition"
//                                                 tabIndex={0}
//                                                 className="modal-trigger underline-text"
//                                                 style={{ border: 0, background: "none" }}
//                                             >
//                                                 {" "}
//                                                 Terms and conditions
//                                             </button>
//                                         </span>
//                                     </label>
//                                     {errors[item.name] && <span className="helper-text" data-error={errors[item.name]} style={{ textAlign: "left" }} />}
//                                 </p>
//                             </div>
//                         );
//                     default:
//                         return null;
//                 }
//             })}
//             <div className="btn-wrap">
//                 <button className="btn blue">Register</button>
//             </div>
//         </form>
//     );
// }

// export default Test;


function Guardian() {
    const [formData, setFormData] = useState({
        parentName: "",
        parentId: "",
        email: "",
        mobileNumber: "",
        agree: false
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (validateForm()) {
            console.log(formData);
            // Add logic to submit the form data
        } else {
            console.log("Form is invalid");
        }
    };

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
        setErrors({ ...errors, [name]: "" }); // Clear the error message when the field is changed
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validation logic for each field
        if (!formData.parentName.trim()) {
            newErrors.parentName = "Parent name is required.";
            isValid = false;
        }

        if (!formData.parentId.trim()) {
            newErrors.parentId = "Parent ID is required.";
            isValid = false;
        }

        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!formData.mobileNumber.trim() || !/^\d{8,}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Please enter a valid mobile number.";
            isValid = false;
        }

        if (!formData.agree) {
            newErrors.agree = "You must agree to the terms and conditions.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const ErrorList = ({ errors }) => {
        if (!submitted || Object.keys(errors).length === 0) {
            return null;
        }

        return (
            <ul className="error-list">
                {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <form autoComplete="no" onSubmit={handleSubmit}>
                <ErrorList errors={errors} />
                {guardian.map((item) => {
                    switch (item.type) {
                        case "text":
                        case "email":
                            return (
                                <div className="input-field item" key={item.id}>
                                    <input
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        id={item.id}
                                        className={item.className}
                                        type={item.type}
                                        autoComplete={item.autoComplete}
                                        defaultValue={item.defaultValue}
                                        style={{ textAlign: "left" }}
                                        onChange={handleOnChange}
                                    />
                                    <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
                                        {item.label}
                                    </label>
                                </div>
                            );
                        case "number":
                            return (
                                <div className="row mobile" key={item.id}>
                                    <div className="col s4">
                                        <div className="input-field item">
                                            <input
                                                name="mobileNumber_country_code"
                                                placeholder="Country Code"
                                                className=""
                                                id="mobileNumber_country_code"
                                                type="text"
                                                minLength={3}
                                                maxLength={3}
                                                disabled
                                                value="+974"
                                                style={{ textAlign: "left" }}
                                                onChange={handleOnChange}
                                            />
                                            <label htmlFor="mobileNumber_country_code" className="active" style={{ left: 0, right: "auto" }}>
                                                Country Code *
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col s8">
                                        <div className="input-field item">
                                            <input
                                                name={item.name}
                                                placeholder={item.placeholder}
                                                id={item.id}
                                                className={item.className}
                                                maxLength={item.maxLength}
                                                type={item.type}
                                                aria-label={item.ariaLabel}
                                                autoComplete="no"
                                                defaultValue={item.defaultValue}
                                                style={{ textAlign: "left" }}
                                                onChange={handleOnChange}
                                            />
                                            <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
                                                {item.label} <span className="asterisk"> </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            );
                        case "checkbox":
                            return (
                                <div className="item subscribe-items" key={item.id}>
                                    <p>
                                        <input
                                            name={item.name}
                                            id={item.id}
                                            type="checkbox"
                                            className={item.className}
                                            onChange={handleOnChange}
                                        />
                                        <label htmlFor={item.id}>
                                            <span className="en">
                                                {item.label}
                                                <button
                                                    type="button"
                                                    aria-label="Read terms and condition"
                                                    tabIndex={0}
                                                    className="modal-trigger underline-text"
                                                    style={{ border: 0, background: "none" }}
                                                >
                                                    {" "}
                                                    Terms and conditions
                                                </button>
                                            </span>
                                        </label>
                                    </p>
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
                <div className="btn-wrap">
                    <button className="btn blue">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Guardian;
