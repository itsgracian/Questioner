const InputField = ({
  type, name, placeholder, img, value, keys
}) => `
    <img src="${img}" alt="">
    <input type="${type}" name="${name}" value="${value}" placeholder="${placeholder}" class="form-input">
    <small class="textMuted" key="${keys}"></small>
    `;

export default InputField;
