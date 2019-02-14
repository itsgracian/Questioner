const InputField = ({ type, name, placeholder, label, img, value, keys }) => {
    return `<div class="form-group">
    <label for="">${label}</label>
    <img src="${img}" alt="">
    <input type="${type}" name="${name}" value="${value}" placeholder="${placeholder}">
    <small class="textMuted" key="${keys}"></small>
    </div>`;
}

export default InputField;
