import React from 'react';
const FormField = ({ formdata, change, id }) => {

    const showRrror = () => {
        let errorMessage = null;
        if (formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>)
        } return errorMessage;
    }

    const renderTemplate = () => {

        let formTemplate = null
        switch (formdata.element) {

            case ('input'):
                formTemplate = (
                    <div className="formBlock">
                        {
                            formdata.showlabel ?
                                <div className="label_inputs">{formdata.config.label}</div>
                                : null
                        }
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                        />
                        {showRrror()}
                    </div>
                )
                break;

            case ('textarea'):
                formTemplate = (
                    <div className="formBlock">
                        {
                            formdata.showlabel ?
                                <div className="label_inputs">{formdata.config.label}</div>
                                : null
                        }
                        <textarea
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                        />
                        {showRrror()}
                    </div>
                )
                break;

            case ('select'):
                formTemplate = (
                    <div className="formBlock">
                        {
                            formdata.showlabel ?
                                <div className="label_inputs">{formdata.config.label}</div>
                                : null
                        }
                        <select
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                        >
                            <option value="">Select One option</option>
                            {
                                formdata.config.options.map(item => (
                                    <option
                                        key={item.key}
                                        value={item.key}
                                    >{item.value}</option>
                                ))
                            }
                        </select>
                        {showRrror()}
                    </div>
                )
                break;

            default:
                formTemplate = null
        }
        return formTemplate
    }
    return (
        <>{renderTemplate()}</>);
};
export default FormField;